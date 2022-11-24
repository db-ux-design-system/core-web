const FS = require('fs-extra');

FS.moveSync(
	'../packages/foundations/scss/db-ui-base.scss',
	'../packages/foundations/scss/db-ui-foundations.scss'
);
