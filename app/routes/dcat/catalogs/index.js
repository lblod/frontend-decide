import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class DcatCatalogsCatalogsRoute extends Route {
  @service session;
  @service store;

  async beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  async model() {
    const catalogs = await this.store.query('catalog', {
      include: ['record', 'publisher', 'theme-taxonomy', 'datasets.distributions', 'datasets.themes', 'datasets.publisher', 'datasets.distributions.format'].join(
        ',',
      ),
    });
    return { catalogs };
  }
}
