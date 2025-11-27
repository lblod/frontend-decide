import Controller from '@ember/controller';

import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

import { task, timeout } from 'ember-concurrency';

export default class DcatIndexController extends Controller {
  @service store;

  queryParams = ['keyword', 'page'];
  @tracked model;
  @tracked keyword = '';
  @tracked page = 0;
  size = 10;

  queryStore = task(async () => {
    let filter = { };
    if (this.keyword) {
      filter = this.keyword;
    }
    const dataset = await this.store.query('dataset', {
      filter,
      page: { size: this.size, number: this.page },
      sort: 'title',
      include: 'distributions'
    });

    return dataset;
  });

  updateSearch = task({ restartable: true }, async (value) => {
    await timeout(500);
    this.page = 0;
    this.keyword = value;
    this.model = await this.queryStore.perform();
  });
}
