import FS from 'node:fs';

const componentPath = '../../packages/components/src/components';

/**
 * @param componentName {string}
 * @returns {string}
 */
const getHowToFile = (componentName) => {
	let howToReadme = '';
	const fileName = `${componentPath}/${componentName}/README.md`;
	if (FS.existsSync(fileName)) {
		howToReadme = FS.readFileSync(fileName, 'utf8').toString();
	}

	return `
import DefaultPage from "../../../components/default-page";

${howToReadme}

export default ({ children }) => <DefaultPage>{children}</DefaultPage>;
	`;
};

export default getHowToFile;
