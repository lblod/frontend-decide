import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class DcatIndexRoute extends Route {
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
    let filter = {};
    if (params.keyword) {
      filter = params.keyword;
    }
    return this.store.query('dataset', {
      include: 'distributions',
      filter: filter,
      page: {
        size: params.size < this.max_size ? params.size : this.max_size,
        number: params.page,
      },
      sort: 'modified',
    });
  }
}
