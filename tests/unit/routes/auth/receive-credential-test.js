import { module, test } from 'qunit';
import { setupTest } from 'frontend-decide/tests/helpers';

module('Unit | Route | receive-credential', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:auth/receive-credential');
    assert.ok(route);
  });
});
