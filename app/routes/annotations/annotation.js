import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AnnotationsAnnotationRoute extends Route {
  @service store;

  async model(params) {
    const annotation = await this.store.findRecord(
      'annotation',
      params.annotation_id,
      {
        include: 'has-body,has-body.geometry',
      },
    );

    const location = await annotation.hasBody;
    const geometry = await location.geometry;

    return { annotation, location, geometry };
  }
}
