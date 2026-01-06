import Model, { hasMany } from '@ember-data/model';

export default class ExpressionModel extends Model {
  @hasMany('manifestation', {
    inverse: null,
    async: true,
  })
  isEmbodiedBy;
}
