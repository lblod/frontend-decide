import Model, { attr } from '@ember-data/model';

export default class GeometryModel extends Model {
  @attr('string') asWKT;
}
