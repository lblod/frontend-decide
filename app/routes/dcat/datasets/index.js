import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class DcatDatasetsRoute extends Route {
  @service store;
  @service session;
  max_size = 100;

  queryParams = {
    size: {
      refreshModel: true,
    },
    page: {
      refreshModel: true,
    },
  };

  async beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  async model(params) {
    const opts = {
      page: {
        size: params.size < this.max_size ? params.size : this.max_size,
        number: params.page,
      },
      sort: 'modified',
      include: 'distributions',
    };
    if (params.searchTerm) {
      opts['filter[:or:]'] = params.searchTerm;
      opts['filter[:or:][distributions]'] = params.searchTerm;
    };
    return this.store.query('dataset', opts);
  }
}
