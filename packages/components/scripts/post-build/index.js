const Vue = require('./vue');
const WebComponents = require('./web-components');
const Angular = require('./angular');
const React = require('./react');
const PowerApps = require('./power-apps');
const Svelte = require('./svelte');
const CopyFiles = require('./copy-files');

CopyFiles();
Vue();
Svelte();
Angular();
React();
WebComponents();

PowerApps();
