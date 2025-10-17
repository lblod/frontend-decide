import { setupTest } from 'frontend-decide/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | page', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('page', {});
    assert.ok(model, 'model exists');
  });
});
