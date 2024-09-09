'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-simple-auth': {
      useSessionSetupMethod: true,
    },
    sassOptions: {
      sourceMapEmbed: true,
      includePaths: ['node_modules/@appuniversum/ember-appuniversum'],
    },
    autoprefixer: {
      enabled: true,
      cascade: true,
      sourcemap: true,
    },
    fingerprint: {
      exclude: ['assets/chunk.*.css'],
    },
    '@appuniversum/ember-appuniversum': {
      disableWormholeElement: true,
    },
    babel: {
      plugins: [
        require.resolve('ember-concurrency/async-arrow-task-transform'),
      ],
    },
    // Add options here
  });
  app.import('node_modules/@triply/yasgui/build/yasgui.min.css');
  return app.toTree();
};
