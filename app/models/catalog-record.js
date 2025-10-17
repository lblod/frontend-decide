import Model, { attr, belongsTo } from '@ember-data/model';

export default class CatalogRecordModel extends Model {
  @attr uri;
  @attr title;
  @attr description;
  @attr issued;
  @attr modified;
  @belongsTo('catalog', { async: true, inverse: 'record' }) catalog;
  @belongsTo('dataset', { async: true, inverse: 'primaryTopic' }) primaryTopic;
}
