import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AnnotationsIndexRoute extends Route {
  @service store;

  async model() {
    const annotations = await this.store.findAll('annotation');

    return annotations;
  }
}
