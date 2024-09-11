import EmberRouter from '@ember/routing/router';
import config from 'frontend-hackathon/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('mock-login');
  this.route('auth', { path: '/authorization' }, function() {
    this.route('logout');
  });
  this.route('index', { path: '' });

  this.route('legal', { path: '/legaal' }, function() {
    this.route('disclaimer');
    this.route('cookiestatement', { path: '/cookieverklaring' });
    this.route('accessibilitystatement', {
      path: '/toegankelijkheidsverklaring',
    });
  });

  this.route('unauthorized', { path: 'niet-toegestaan' });
  this.route('sparql');

  this.route('route-not-found', {
    path: '/*wildcard',
  });
  this.route('accessibility-statement');
  this.route('cookie-notice');
  this.route('disclaimer');
});
