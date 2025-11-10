import Route from '@ember/routing/route';
import { service } from '@ember/service';

let interval = null;
export default class PresentCredentialRoute extends Route {
  @service
  store;
  @service
  session;

  beforeModel() {
    this.session.prohibitAuthentication('mock-login');
  }

  async model() {
    const response = await fetch(
      `/vc-verifier/build-authorization-request-uri?redirectUri=${window.location.origin}/present-credential-callback`,
    );
    const { authorizationRequestUri } = await response.json();

    const statusObject = this.store.createRecord('credential-status', {
      status: 'pending',
    });

    interval = setInterval(async () => {
      // simple polling approach for demo purposes
      const response = await fetch('/vc-verifier/authorization-request-status');
      const { status } = await response.json();
      statusObject.status = status;
      if (['pending', 'received'].indexOf(statusObject.status) === -1) {
        clearInterval(interval);
      }
      if (statusObject.status === 'accepted') {
        await this.session.authenticate('authenticator:oid4vc');
      }
    }, 3000);

    return { authorizationRequestUri, statusObject };
  }

  deactivate() {
    if (interval) {
      clearInterval(interval);
    }
  }
}
