import Model, { attr } from '@ember-data/model';

export default class CredentialStatusModel extends Model {
  @attr('string') status;
}
