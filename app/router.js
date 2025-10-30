import EmberRouter from '@ember/routing/router';
import config from 'frontend-decide/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('receive-credential');
  this.route('present-credential');
  this.route('mock-login');
  this.route('protected');
  this.route('login');
  this.route('logout');
  this.route('dcat', function() {
    this.route('distributions.distribution', { path: '/distributions/:distribution_id' });
    this.route('datasets.dataset', { path: '/datasets/:dataset_id' });
    this.route('catalogs', function() {
      this.route('index');
      this.route('catalog', { path: '/:catalog_id' });
    });
  });
});
