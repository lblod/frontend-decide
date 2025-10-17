import { module, test } from 'qunit';
import { setupTest } from 'frontend-decide/tests/helpers';

module('Unit | Route | dcat', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:dcat');
    assert.ok(route);
  });
});
