import Model, { hasMany } from '@ember-data/model';

export default class WorkModel extends Model {
  @hasMany('expression', {
    inverse: null,
    async: true,
  })
  isRealizedBy;
}
