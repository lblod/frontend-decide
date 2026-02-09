import Controller from '@ember/controller';
import ENV from 'frontend-decide/config/environment';
import buildUrlFromConfig from '@lblod/ember-acmidm-login/utils/build-url-from-config';

export default class AuthIndexController extends Controller {
  loginUrl = buildUrlFromConfig(ENV.acmidm);
}
