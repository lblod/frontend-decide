import { setupTest } from 'frontend-decide/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | dcat/concept scheme', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('dcat/concept-scheme', {});
    assert.ok(model, 'model exists');
  });
});
