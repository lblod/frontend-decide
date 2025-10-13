import { service } from '@ember/service';
import Route from '@ember/routing/route';

let interval = null;

export default class ReceiveCredentialRoute extends Route {
  @service('store') store;
  async model() {
    const response = await fetch('/vc-issuer/build-credential-offer-uri');
    const { credentialOfferUri, pin } = await response.json();

    const statusObject = this.store.createRecord('credential-status', {
      status: 'pending',
    });

    interval = setInterval(async () => {
      // simple polling approach for demo purposes
      const response = await fetch('/vc-issuer/issuance-status');
      const { status } = await response.json();
      statusObject.status = status;
      if (['pending', 'received'].indexOf(statusObject.status) === -1) {
        clearInterval(interval);
      }
    }, 3000);

    return {
      credentialOfferUri,
      pin,
      statusObject,
    };
  }

  deactivate() {
    if (interval) {
      clearInterval(interval);
    }
  }
}
