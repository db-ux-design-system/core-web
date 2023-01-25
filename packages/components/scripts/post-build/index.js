const Vue = require('./vue');
const WebComponents = require('./wc');
const Angular = require('./angular');
const React = require('./react');
const PowerApps = require('./power-apps');
const Svelte = require('./svelte');

const CopyFiles = require('./copy-files');

Vue();
Svelte();
Angular();
React();
WebComponents();

CopyFiles();

PowerApps();
