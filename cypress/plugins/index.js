// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('@cypress/webpack-preprocessor');

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
const { cypressConfigResolver } = require('../config/cypress-config-resolver');
const pluginExecuteCommand = require('./plugin-execute-command');

module.exports = (on) => {
  const options = {
    // eslint-disable-next-line global-require
    webpackOptions: require('../webpack.config.js'),
  };
  on('file:preprocessor', webpack(options));
  on('task', {
    pluginExecuteCommand,
  });
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  return cypressConfigResolver();
};
