import Model, { attr } from '@ember-data/model';

export default class TextPositionSelectorModel extends Model {
  @attr start;
  @attr end;
}
