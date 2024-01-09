import FS from 'node:fs';

const componentPath = '../../packages/components/src/components';

/**
 * @param componentName {string}
 * @param displayName {string}
 * @returns {string}
 */
const getMigrationFile = (componentName, displayName) => {
	let imports = '';
	let components = '';

	const path = `${componentPath}/${componentName}/docs/Migration.md`;

	if (FS.existsSync(path)) {
		imports += `import Migration from './docs/Migration.md';\n`;
		components += `<Migration/>\n`;
	}

	return `
import DefaultPage from "../../../components/default-page";
${imports}

# ${displayName} Migration

${components}

export default ({ children }) => <DefaultPage>{children}</DefaultPage>;
	`;
};

export default getMigrationFile;
