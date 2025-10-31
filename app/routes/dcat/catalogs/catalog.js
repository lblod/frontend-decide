import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class DcatCatalogsCatalogRoute extends Route {
  @service session;
  @service store;

  async beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  async model(params) {
    const catalog = await this.store.findRecord('catalog', params.catalog_id);
    return catalog;
  }
}
