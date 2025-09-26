import Route from '@ember/routing/route';

export default class PresentCredentialRoute extends Route {
  async model() {
    const response = await fetch(
      `/vc-issuer/build-authorization-request-uri?redirectUri=${window.location.origin}/present-credential-callback`,
    );
    const { authorizationRequestUri } = await response.json();

    return { authorizationRequestUri };
  }
}
