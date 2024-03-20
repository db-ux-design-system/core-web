import FS from 'node:fs';

const componentPath = '../../packages/components/src/components';

const docs = ['HTML', 'Angular', 'React', 'Vue'];

/**
 * @param componentName {string}
 * @param displayName {string}
 * @returns {string}
 */
const getHowToFile = (componentName, displayName) => {
	let imports = '';
	let components = '';

	for (const document of docs) {
		const path = `${componentPath}/${componentName}/docs/${document}.md`;
		if (FS.existsSync(path)) {
			imports += `import ${document} from './docs/${document}.md';\n`;
			components += `<${document}/>\n`;
		}
	}

	return `
import DefaultPage from "../../../components/default-page";
${imports}

# How to use ${displayName}

${components}

export default ({ children }) => <DefaultPage>{children}</DefaultPage>;
	`;
};

export default getHowToFile;
