import { setupTest } from 'frontend-decide/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | distribution.js', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('distribution.js', {});
    assert.ok(model, 'model exists');
  });
});
