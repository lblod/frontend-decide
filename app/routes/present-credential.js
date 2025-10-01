import Route from '@ember/routing/route';

let interval = null;
export default class PresentCredentialRoute extends Route {
  async model() {
    const response = await fetch(
      `/vc-issuer/build-authorization-request-uri?redirectUri=${window.location.origin}/present-credential-callback`,
    );
    const { authorizationRequestUri } = await response.json();

    const statusObject = {
      status: 'pending',
    };

    interval = setInterval(async () => {
      // simple polling approach for demo purposes
      const response = await fetch('/vc-issuer/authorization-request-status');
      const { status } = await response.json();
      statusObject.status = status;
      if (['pending', 'received'].indexOf(statusObject.status) === -1) {
        clearInterval(interval);
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
