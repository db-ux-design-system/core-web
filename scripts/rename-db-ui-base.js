import FS from 'fs-extra';

if (FS.pathExistsSync('./packages/foundations/scss/db-ui-base.scss')) {
	if (
		FS.pathExistsSync('./packages/foundations/scss/db-ui-foundations.scss')
	) {
		FS.removeSync('./packages/foundations/scss/db-ui-foundations.scss');
	}

	FS.moveSync(
		'./packages/foundations/scss/db-ui-base.scss',
		'./packages/foundations/scss/db-ui-foundations.scss'
	);
}
