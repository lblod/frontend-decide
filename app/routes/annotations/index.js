import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AnnotationsIndexRoute extends Route {
  @service store;

  queryParams = {
    page: { refreshModel: true },
    size: { refreshModel: true },
  };

  async model(params) {
    const annotations = await this.store.query('annotation', {
      page: { size: params.size, number: params.page },
    });

    return annotations;
  }
}
