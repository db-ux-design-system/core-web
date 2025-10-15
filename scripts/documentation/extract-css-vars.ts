/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call, no-await-in-loop, unicorn/prefer-top-level-await */

import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sassdoc from 'sassdoc';

const componentSubPath = '../../packages/components/src/components';
const outputSubPath = '../../output/docs';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Escape HTML special characters in a string.
 * @param string_
 */
function escapeHtml(string_: string): string {
	return string_
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('`', '&#96;');
}

/**
 * Get the names of all subdirectories under the given directory.
 * @param basePath - The directory to search.
 * @returns Array of subdirectory names.
 */
function getComponentDirectories(basePath: string): string[] {
	return readdirSync(basePath, { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map((d) => d.name);
}

/**
 * Process a single component SCSS file to extract CSS custom properties
 * @param component {string} - The name of the component.
 * @param basePath {string} - The base path to the components' directory.
 * @returns {Promise<void>}
 */
async function processComponent(
	component: string,
	basePath: string
): Promise<void> {
	const scssFile = join(basePath, component, `${component}.scss`);
	if (!existsSync(scssFile)) {
		console.warn(`⚠️  Skipping ${component}: SCSS not found`);
		return;
	}

	const documents: any[] = await sassdoc.parse([scssFile]);

	if (documents.length > 0) {
		// Remove HTML anchor tags inserted by SassDoc
		const md = buildMarkdown(documents).replaceAll(
			/^[ \t]*<a id="[^"]+"><\/a>[ \t]*\r?\n/gm,
			''
		);
		const outPath = join(resolve(__dirname, outputSubPath), component);
		if (!existsSync(outPath)) {
			mkdirSync(outPath, { recursive: true });
		}

		const outFile: string = join(outPath, `${component}.css.md`);
		writeFileSync(outFile, md, 'utf8');
		console.log(`✅ ${component}: wrote ${component}.css.md`);
	}
}

/**
 * Extract name, defaultValue, description & example from
 * the raw SassDoc description block.
 * @param {string} description
 */
function extractTags(description: string) {
	const lines = description.split(/\r?\n/).map((l) => l.trim());
	const result: {
		name?: string;
		propertyName?: string;
		defaultValue?: string;
		description?: string;
		example?: string;
	} = {
		name: undefined,
		propertyName: undefined,
		defaultValue: undefined,
		description: '',
		example: undefined
	};
	const descLines: string[] = [];
	const exampleLines: string[] = [];
	let inExample = false;

	for (const line of lines) {
		const tagMatch = /^@(\w+)\s*:?\s*(.*)$/.exec(line);
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
			if (line.startsWith('@')) {
				break;
			}

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
 * @param {Array} documents - The SassDoc documentation array for the component.
 */
function buildMarkdown(documents: any[]) {
	const headers = [
		'CSS Variable',
		'Default',
		'CSS Property',
		'Description',
		'Example'
	];
	const empty = '—';

	const lines = [
		`| ${headers.join(' | ')} |`,
		`| ${headers.map(() => '---').join(' | ')} |`
	];

	let md = `## CSS Properties\n\n` + lines.join('\n') + '\n';

	for (const item of documents) {
		if (!item.description.includes('@cssprop')) {
			continue;
		}

		const { name, propertyName, defaultValue, description, example } =
			extractTags(item.description as string);
		if (!name) {
			continue;
		}

		const ex = example
			? `<pre>${escapeHtml(example).replaceAll(/\r?\n/g, '<br>')}</pre>`
			: empty;
		md += `| \`${name}\` | ${defaultValue ? `\`${defaultValue}\`` : empty} | ${propertyName} | ${description ?? empty} | ${ex} |\n`;
	}

	return md;
}

/**
 * Extract CSS variables from all components and write them to Markdown files.
 * @returns {Promise<void>}
 */
async function extractCssVariables(): Promise<void> {
	const basePath = resolve(__dirname, componentSubPath);
	const components = getComponentDirectories(basePath);

	for (const component of components) {
		await processComponent(component, basePath);
	}
}

/**
 * Main function to execute the script.
 */
try {
	void extractCssVariables();
} catch (error) {
	console.error(`❌  Error: ${error.message}`);
}
