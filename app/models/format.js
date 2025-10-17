import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class FormatModel extends Model {
  @attr uri;
  @attr name;
  @attr labels;
  @belongsTo('page', { async: true, inverse: null }) page;
  @hasMany('distribution', { async: true, inverse: 'format' }) distributions;
}
