import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class LogoutRoute extends Route {
  @service router;
  @service session;

  async beforeModel(transition) {
    if (this.session.requireAuthentication(transition, 'login')) {
      try {
        await this.session.invalidate();
        this.router.transitionTo('mock-login');
      } catch (error) {
        throw new Error(
          'Something went wrong while trying to remove the session on the server',
          {
            cause: error,
          },
        );
      }
    }
  }
}
