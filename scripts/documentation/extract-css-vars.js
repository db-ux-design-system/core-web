import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import sassdoc from 'sassdoc';

const COMPONENTS_SUBPATH = '../../packages/components/src/components';

/**
 * Escape HTML special characters in a string.
 * @param {string} str - The string to escape.
 */
function escapeHtml(str) {
	return str
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('`', '&#96;');
}

/**
 * Get the names of all subdirectories under the given directory.
 * @param {string} basePath - The directory to search.
 * @returns {string[]} - Array of subdirectory names.
 */
function getComponentDirs(basePath) {
	return fs
		.readdirSync(basePath, { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map((d) => d.name);
}

/**
 * Process a single component SCSS file to extract CSS custom properties
 * @param component {string} - The name of the component.
 * @param basePath {string} - The base path to the components directory.
 * @returns {Promise<void>}
 */
async function processComponent(component, basePath) {
	const scssFile = path.join(basePath, component, `${component}.scss`);
	if (!fs.existsSync(scssFile)) {
		console.warn(`⚠️  Skipping ${component}: SCSS not found`);
		return;
	}

	const docs = await sassdoc.parse([scssFile]);
	const md = buildMarkdown(component, docs);
	const outFile = path.join(basePath, component, `${component}.css.md`);
	fs.writeFileSync(outFile, md, 'utf8');
	console.log(`✅ ${component}: wrote ${component}.css.md`);
}

/**
 * Extract name, defaultValue, description & example from
 * the raw SassDoc description block.
 * @param {string} description
 */
function extractTags(description) {
	const lines = description.split(/\r?\n/).map((l) => l.trim());
	const result = {
		name: null,
		propertyName: null,
		defaultValue: null,
		description: '',
		example: null
	};
	const descLines = [];
	const exampleLines = [];
	let inExample = false;

	for (const line of lines) {
		const tagMatch = line.match(/^@(\w+)\s*:?\s*(.*)$/);
		if (tagMatch) {
			const [, tag, rest] = tagMatch;
			switch (tag) {
				case 'cssprop': {
					result.name = rest.trim();
					inExample = false;
					break;
				}

				case 'default': {
					result.defaultValue = rest.trim();
					inExample = false;
					break;
				}

				case 'propertyname': {
					inExample = true;
					result.propertyName = rest.trim();
					break;
				}

				case 'example': {
					inExample = true;
					exampleLines.push(rest.trim());
					break;
				}

				default: {
					inExample = false;
				}
			}
		} else if (inExample) {
			if (line.startsWith('@')) break;
			exampleLines.push(line);
		} else if (line && !line.startsWith('@')) {
			descLines.push(line);
		}
	}

	result.description = descLines.join(' ');
	if (exampleLines.length > 0) {
		result.example = exampleLines.join('\n');
	}

	return result;
}

/**
 * Build Markdown table for a component.
 * @param {string} component - The component name.
 * @param {Array} docs - The SassDoc documentation array for the component.
 */
function buildMarkdown(component, docs) {
	const HEADERS = [
		'CSS Variable',
		'Default',
		'CSS Property',
		'Description',
		'Example'
	];
	const EMPTY = '—';

	const lines = [
		`| ${HEADERS.join(' | ')} |`,
		`| ${HEADERS.map(() => '---').join(' | ')} |`
	];

	let md = lines.join('\n') + '\n';

	for (const item of docs) {
		if (!item.description.includes('@cssprop')) continue;
		const { name, propertyName, defaultValue, description, example } =
			extractTags(item.description);
		if (!name) continue;

		const ex = example
			? `<pre>${escapeHtml(example).replaceAll(/\r?\n/g, '<br>')}</pre>`
			: EMPTY;
		md += `| \`${name}\` | ${defaultValue ? `\`${defaultValue}\`` : EMPTY} | ${propertyName} | ${description || EMPTY} | ${ex} |\n`;
	}

	return md;
}

/**
 * Extract CSS variables from all components and write them to Markdown files.
 * @returns {Promise<void>}
 */
async function extractCSSVars() {
	const __dirname = path.dirname(fileURLToPath(import.meta.url));
	const basePath = path.resolve(__dirname, COMPONENTS_SUBPATH);
	const components = getComponentDirs(basePath);

	await Promise.all(
		components.map((component) => processComponent(component, basePath))
	);
}

/**
 * Main function to execute the script.
 */
try {
	await extractCSSVars();
} catch (error) {
	console.error(`❌  Error: ${error.message}`);
}
