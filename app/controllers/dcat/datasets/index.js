import Controller from '@ember/controller';

import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

import { task, timeout } from 'ember-concurrency';

export default class DcatDatasetsController extends Controller {
  @service store;

  queryParams = ['searchTerm', 'page'];
  @tracked model;
  @tracked searchTerm = '';
  @tracked page = 0;
  @tracked size = 2;
  max_size = 100;

  queryStore = task(async () => {
    let filter = {};
    if (this.searchTerm) {
      filter = this.searchTerm;
    }
    const dataset = await this.store.query('dataset', {
      filter,
      page: {
        size: this.size < this.max_size ? this.size : this.max_size,
        number: this.page,
      },
      sort: 'modified',
      include: 'distributions',
    });

    return dataset;
  });

  updateSearch = task({ restartable: true }, async (value) => {
    await timeout(500);
    this.page = 0;
    this.searchTerm = value;
    this.model = await this.queryStore.perform();
  });
}
