import { module, test } from 'qunit';
import { setupTest } from 'frontend-decide/tests/helpers';

module('Unit | Route | present-credential', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:present-credential');
    assert.ok(route);
  });
});
