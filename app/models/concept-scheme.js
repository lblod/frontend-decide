import Model, { attr, hasMany } from '@ember-data/model';

export default class ConceptSchemeModel extends Model {
  @attr uri;
  @hasMany('catalog', { async: true, inverse: 'themeTaxonomy' }) catalogs;
  @hasMany('concept', { async: true, inverse: 'conceptScheme' }) concepts;
}
