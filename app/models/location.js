import Model, { attr, belongsTo } from '@ember-data/model';

export default class LocationModel extends Model {
  @attr('string') label;
  @attr('string') exactMatch;

  @belongsTo('geometry', { inverse: null, async: true }) geometry;
}
