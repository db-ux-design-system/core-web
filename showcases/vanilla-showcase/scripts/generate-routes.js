import FS from 'node:fs';
import CPY from 'cpy';
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
				CPY(`./dist/index.html`, `./dist${lastPath}/index.html`).catch(
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
