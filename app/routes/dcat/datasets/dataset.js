import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class DcatDatasetsDatasetRoute extends Route {
  @service session;
  @service store;

  async beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  async model(params) {
    const dataset = await this.store.findRecord('dataset', params.dataset_id);
    return dataset;
  }
}
