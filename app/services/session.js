import SessionService from 'ember-simple-auth/services/session';
import { service } from '@ember/service';

export default class DecideSessionService extends SessionService {
  @service currentSession;

  get isMockLoginSession() {
    return this.isAuthenticated
      ? this.data.authenticated.authenticator.includes('mock-login')
      : false;
  }

  async handleAuthentication(routeAfterAuthentication) {
    await this.currentSession.load();
    super.handleAuthentication(routeAfterAuthentication);
  }

  async handleInvalidation() {
    // Handled in `logout` route
  }
}
