const Fse = require('fs-extra');
const Components = require('./components');

module.exports = () => {
	for (const component of Components) {
		try {
			Fse.copySync(`../../output/react/src`, `../../output/next/src`);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	}
};
