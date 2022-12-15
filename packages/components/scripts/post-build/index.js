const Vue = require('./vue');
const WebComponents = require('./wc');
const Angular = require('./angular');
const Next = require('./next');
const React = require('./react');
const PowerApps = require('./power-apps');
const Svelte = require('./svelte');

const CopyFiles = require('./copy-files');

Vue();
Svelte();
Angular();
Next();
React();
WebComponents();

CopyFiles();

PowerApps();
