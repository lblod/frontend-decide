import { setupTest } from 'frontend-decide/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | credential status', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('credential-status', {});
    assert.ok(model, 'model exists');
  });
});
