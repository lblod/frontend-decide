import EmberRouter from '@ember/routing/router';
import config from 'frontend-decide/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('receive-credential');
  this.route('present-credential');
});
