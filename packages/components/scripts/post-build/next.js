const Fse = require('fs-extra');
const Replace = require('replace-in-file');
const Components = require('./components');

module.exports = () => {
	for (const component of Components) {
		try {
			Fse.copySync(`../../output/react/src`, `../../output/next/src`);

			setTimeout(() => {
				Replace.sync({
					files: `../../output/next/src/components/${component.name}/${component.name}.tsx`,
					processor: (input) => {
						return input
							.split('\n')
							.filter((line) => !line.includes('.scss'))
							.join('\n');
					}
				});
			}, 1000);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
