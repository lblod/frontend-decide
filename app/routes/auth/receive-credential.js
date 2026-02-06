import { service } from '@ember/service';
import Route from '@ember/routing/route';

export default class ReceiveCredentialRoute extends Route {
  @service session;

  async beforeModel(transition) {
    this.session.requireAuthentication(transition, 'mock-login');
  }
}
