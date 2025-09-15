import Route from '@ember/routing/route';

export default class ReceiveCredentialRoute extends Route {
  async model() {
    const response = await fetch('/vc-issuer/build-credential-offer-uri');
    const { credentialOfferUri, pin } = await response.json();

    return {
      credentialOfferUri,
      pin,
    };
  }
}
