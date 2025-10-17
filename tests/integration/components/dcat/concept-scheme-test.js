import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-decide/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | dcat/concept-scheme', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Dcat::ConceptScheme />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Dcat::ConceptScheme>
        template block text
      </Dcat::ConceptScheme>
    `);

    assert.dom().hasText('template block text');
  });
});
