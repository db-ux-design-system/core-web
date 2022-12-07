const Replace = require('replace-in-file');

const renamePackageName = () => {
	const options = {
		files: `./../../build-outputs/components/package.json`,
		from: `@db-ui/x-components`,
		to: `@db-ui/components`
	};

	try {
		Replace.sync(options);
	} catch (error) {
		console.error('Error occurred:', error);
	}
};

renamePackageName();
