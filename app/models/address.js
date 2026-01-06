import Model, { attr } from '@ember-data/model';

export default class AddressModel extends Model {
  @attr geometry;
}
