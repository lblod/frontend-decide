import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class DcatDistributionsDistributionRoute extends Route {
  @service session;
  @service store;

  async beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  async model(params) {
    const distribution = await this.store.findRecord('distribution', params.distribution_id);
    return distribution;
  }
}
