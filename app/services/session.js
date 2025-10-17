import SessionService from 'ember-simple-auth/services/session';
import { service } from '@ember/service'

export default class DecideSessionService extends SessionService {
    @service currentSession;
    async handleAuthentication(routeAfterAuthentication) {
        await this.currentSession.load();
        super.handleAuthentication(routeAfterAuthentication);
    }

    async handleInvalidation() {
        
    }

}
