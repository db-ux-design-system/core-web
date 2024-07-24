import FS from 'node:fs';
import CPR from 'cpr';
import { navigationPaths } from '../src/utils/navigation-paths.js';

const generateRoutes = () => {
	for (const key of Object.keys(navigationPaths)) {
		const splitPath = navigationPaths[key].split('/');
		let lastPath = '';
		for (const [index, path] of splitPath.entries()) {
			lastPath += `/${path}`;
			if (!FS.existsSync(`./dist${lastPath}`)) {
				FS.mkdirSync(`./dist${lastPath}`);
			}

			if (index === splitPath.length - 1) {
				CPR(
					`./dist/index.html`,
					`./dist${lastPath}/index.html`,
					{
						deleteFirst: true,
						overwrite: true,
						confirm: true
					},
					(error) => {
						if (error) {
							console.error(error);
						}
					}
				);
			}
		}
	}
};

export default generateRoutes();
