import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-decide/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | qr-code', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<QrCode />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <QrCode>
        template block text
      </QrCode>
    `);

    assert.dom().hasText('template block text');
  });
});
