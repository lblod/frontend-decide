import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class MockLoginRoute extends Route {
  @service store;

  @service session;

  queryParams = {
    gemeente: {
      refreshModel: true
    },
    page: {
      refreshModel: true,
    },
  };

  beforeModel() {
    this.session.prohibitAuthentication('index');
  }

  model(params) {
    const filter = { provider: 'https://github.com/lblod/mock-login-service' };
    if (params.gemeente) {
      filter.gebruiker = { bestuurseenheden: params.gemeente };
    }
    return this.store.query('account', {
      include: 'gebruiker.bestuurseenheden',
      filter: filter,
      page: { size: params.size, number: params.page },
      sort: 'gebruiker.achternaam',
    });
  }
}
