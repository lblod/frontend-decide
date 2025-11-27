import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class DcatIndexRoute extends Route {
  @service store;
  @service session;

  queryParams = {
    page: {
      refreshModel: true,
    },
  };

  async beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  async model(params) {
    let filter = { };
    if (params.keyword) {
      filter = params.keyword;
    }
    return this.store.query('dataset', {
      include: 'distributions',
      filter: filter,
      page: { size: 10, number: params.page },
      sort: 'title',
    });
  }
}
