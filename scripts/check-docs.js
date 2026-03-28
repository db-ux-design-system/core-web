#!/usr/bin/env node
import { glob } from 'glob';
import * as fs from 'node:fs';
import path from 'node:path';
import * as process from 'node:process';
import { fileURLToPath } from 'node:url';

// Configuration
const config = {
	// File extensions to check
	markdownExtensions: ['md', 'mdx'],
	// NPM organization prefix to look for
	orgPrefix: '@db-ux/',
	// Root directory to search from
	rootDir: path.join(process.cwd(), '.'),
	// Workspace packages directories (can be multiple)
	packagesDirs: ['packages', 'output'],
	// Debug mode - set to true to see all references found
	debug: process.argv.includes('--debug') || process.env.DEBUG === 'true',
	// Folder patterns to ignore
	ignorePatterns: [
		'node_modules/**',
		'**/node_modules/**',
		'.git/**',
		'docs/migration/**',
		'showcases/patternhub/public/docs/migration/**'
	]
};

/**
 * Find all markdown files in the repository
 */
const findMarkdownFiles = () => {
	const patterns = config.markdownExtensions.map((ext) => `**/*.${ext}`);

	if (config.debug) {
		console.log(`🔍 Searching for patterns: ${patterns.join(', ')}`);
		console.log(`📁 Root directory: ${config.rootDir}`);
	}

	let allFiles = new Set();
	for (const pattern of patterns) {
		const files = glob.sync(pattern, {
			cwd: config.rootDir,
			ignore: config.ignorePatterns,
			dot: false,
			absolute: false
		});
		allFiles = [...allFiles, ...files];
	}

	if (config.debug) {
		console.log(`📄 Found ${allFiles.length} markdown files:`);
		for (const file of allFiles) console.log(`  - ${file}`);
		console.log('');
	}

	return allFiles;
};

/**
 * Parse references that point to @db-ux packages.
 *
 * Supports these forms:
 * - @db-ux/<package>/<path>
 * - node_modules/@db-ux/<package>/<path>
 * - ./node_modules/@db-ux/<package>/<path>
 * - ../node_modules/@db-ux/<package>/<path>
 */
export const parseDBUXReference = (reference) => {
	// Escape the org prefix for use in a regular expression
	const escapedOrgPrefix = config.orgPrefix.replaceAll(
		/[.*+?^${}()|[\]\\]/g,
		String.raw`\$&`
	);
	// Extract package name and check if there's a file path after it
	const match = reference.match(
		new RegExp(
			`^(?:(?:\\.\\.?/)+)?(?:node_modules/)?(${escapedOrgPrefix}[^/]+)/(.+)$`
		)
	);

	if (!match) return undefined;

	const [, packageName, filePath] = match;
	if (!filePath) return undefined;

	return { packageName, filePath };
};

/**
 * Extract file references from markdown content
 */
const extractFileReferences = (content) => {
	const references = [];
	const lines = content.split('\n');

	// Escape org prefix for use in the generic path pattern regex
	const escapedOrgPrefix = config.orgPrefix.replaceAll(
		/[.*+?^${}()|[\]\\]/g,
		String.raw`\$&`
	);
	// Patterns to match different types of imports/references
	const patterns = [
		// @import statements in CSS/SCSS
		/@import\s+["']([^"']+)["']/g,
		// Import statements in JS/TS
		/import\s+.*?from\s+["']([^"']+)["']/g,
		// Require statements
		/require\s*\(\s*["']([^"']+)["']\s*\)/g,
		// HTML link tags
		/href\s*=\s*["']([^"']+)["']/g,
		// Generic file paths in code blocks
		new RegExp(`["']([^"']*${escapedOrgPrefix}[^"']+)["']`, 'g')
	];

	// Track line numbers for each reference
	for (const [lineIndex, line] of lines.entries()) {
		for (const pattern of patterns) {
			let match;
			// Reset regex lastIndex for each line
			pattern.lastIndex = 0;

			while ((match = pattern.exec(line)) !== null) {
				const reference = match[1];

				// Check if reference includes orgPrefix and has a file path (not just package name)
				if (!reference.includes(config.orgPrefix)) continue;
				if (!parseDBUXReference(reference)) continue;

				// Only include references that have a file path after the package name
				references.push({
					reference,
					lineNumber: lineIndex + 1,
					lineContent: line.trim()
				});
			}
		}
	}

	// Remove duplicates based on reference string
	const unique = references.filter(
		(item, index, array) =>
			array.findIndex((other) => other.reference === item.reference) ===
			index
	);

	return unique;
};

/**
 * Expand a path that contains bracket alternatives, e.g.
 * `build/styles/[rollup|webpack|relative].css`.
 *
 * Supports multiple bracket groups by recursively generating
 * the cartesian product of all alternatives.
 */
export const expandBracketAlternatives = (input) => {
	// Find the first bracket group with alternatives (e.g. [a|b])
	const match = input.match(/\[([^\]]*\|[^\]]+)]/);

	if (!match) return [input];

	const [fullMatch, alternativesGroup] = match;
	const alternatives = alternativesGroup
		.split('|')
		.map((alternative) => alternative.trim())
		.filter(Boolean);

	if (alternatives.length === 0) return [input];

	const prefix = input.slice(0, match.index);
	const suffix = input.slice(match.index + fullMatch.length);
	const expanded = [];

	for (const alternative of alternatives) {
		expanded.push(
			...expandBracketAlternatives(`${prefix}${alternative}${suffix}`)
		);
	}

	return expanded;
};

const resolveSinglePackagePath = (packageName, filePath) => {
	// Package directory name used in workspaces (`@db-ux/foo` -> `foo`).
	const packageDirName = packageName.replace(config.orgPrefix, '');

	// SCSS file resolution: try different variations for SCSS partials and extensions
	const generateScssVariations = (originalPath) => {
		const variations = [originalPath];
		const dir = path.dirname(originalPath);
		const basename = path.basename(originalPath);
		const ext = path.extname(basename);
		const nameWithoutExt = path.basename(basename, ext);

		// Add variations with SCSS extensions if no extension provided
		if (!ext) {
			variations.push(`${originalPath}.scss`, `${originalPath}.css`);
		}

		// Add variations with underscore prefix (SCSS partials)
		if (!nameWithoutExt.startsWith('_')) {
			const withUnderscore = path.join(dir, `_${nameWithoutExt}`);
			variations.push(withUnderscore);

			if (ext) {
				variations.push(`${withUnderscore}${ext}`);
			} else {
				variations.push(
					`${withUnderscore}.scss`,
					`${withUnderscore}.css`
				);
			}
		}

		// Add directory-based imports (SCSS index resolution)
		// For "variables", try "variables/index.scss", "variables/_index.scss"
		if (!ext) {
			const indexVariations = [
				path.join(originalPath, 'index.scss'),
				path.join(originalPath, 'index.css'),
				path.join(originalPath, '_index.scss'),
				path.join(originalPath, '_index.css')
			];
			variations.push(...indexVariations);
		}

		return variations;
	};

	const fileVariations = generateScssVariations(filePath);

	// Try different possible locations for each file variation.
	// This supports both monorepo workspace paths and installed package paths.
	const possiblePaths = [];

	for (const variation of fileVariations) {
		for (const packagesDir of config.packagesDirs) {
			possiblePaths.push(
				// Direct workspace package
				path.join(
					config.rootDir,
					packagesDir,
					packageDirName,
					variation
				),
				// Workspace node_modules
				path.join(
					config.rootDir,
					packagesDir,
					packageDirName,
					'node_modules',
					packageName,
					variation
				)
			);
		}

		// Node_modules (for published packages) - only once
		possiblePaths.push(
			path.join(config.rootDir, 'node_modules', packageName, variation)
		);
	}

	const resolvedPath = possiblePaths.find((currentPath) =>
		fs.existsSync(currentPath)
	);

	if (config.debug) {
		if (resolvedPath) {
			console.log(`    🔍 Resolved to: ${resolvedPath}`);
		} else {
			console.log(
				`    ❌ Tried paths: ${possiblePaths.slice(0, 6).join(', ')}...`
			);
		}
	}

	return resolvedPath;
};

const resolvePackageReference = (reference) => {
	const parsedReference = parseDBUXReference(reference);
	if (!parsedReference) return [];

	const { packageName, filePath } = parsedReference;
	const expandedFilePaths = expandBracketAlternatives(filePath);

	// Validate each expanded variant independently so that one broken
	// alternative fails the docs check even if other alternatives exist.
	return expandedFilePaths.map((expandedPath) => {
		const expandedReference = `${packageName}/${expandedPath}`;
		return {
			reference: expandedReference,
			resolvedPath: resolveSinglePackagePath(packageName, expandedPath)
		};
	});
};

/**
 * Check if a reference exists.
 *
 * Returns an array because a single source reference may expand into
 * multiple concrete paths via bracket alternatives.
 */
const checkFileReference = (referenceObject, markdownFile) => {
	const resolvedReferences = resolvePackageReference(
		referenceObject.reference
	);

	if (resolvedReferences.length === 0) {
		return [
			{
				reference: referenceObject.reference,
				lineNumber: referenceObject.lineNumber,
				lineContent: referenceObject.lineContent,
				exists: false,
				resolvedPath: null,
				markdownFile
			}
		];
	}

	return resolvedReferences.map((resolvedReference) => ({
		reference: resolvedReference.reference,
		lineNumber: referenceObject.lineNumber,
		lineContent: referenceObject.lineContent,
		exists: Boolean(resolvedReference.resolvedPath),
		resolvedPath: resolvedReference.resolvedPath,
		markdownFile
	}));
};

const logReferenceResult = (result, file) => {
	// In debug mode, print detailed information for all references.
	if (config.debug) {
		const status = result.exists ? '✅' : '❌';
		console.log(
			`  ${status} ${result.reference} (line ${result.lineNumber})`
		);
		console.log(`    📝 ${result.lineContent}`);
		return;
	}

	if (!result.exists) {
		// In normal mode, only print failing references to keep output concise.
		console.log(`❌ ${result.reference} in ${file}:${result.lineNumber}`);
	}
};

/**
 * Main function
 */
const checkDocs = () => {
	console.log('🔍 Checking documentation file references...\n');

	if (config.debug) {
		console.log('🐛 Debug mode enabled\n');
	}

	const markdownFiles = findMarkdownFiles();
	const allIssues = [];
	const allReferences = [];
	let totalReferences = 0;

	for (const file of markdownFiles) {
		const fullPath = path.join(config.rootDir, file);
		const content = fs.readFileSync(fullPath, 'utf8');
		const references = extractFileReferences(content);

		if (references.length === 0) continue;

		if (config.debug) {
			console.log(`📄 Checking ${file}...`);
		}

		for (const referenceObject of references) {
			const results = checkFileReference(referenceObject, file);

			for (const result of results) {
				totalReferences++;
				allReferences.push(result);

				if (!result.exists) {
					allIssues.push(result);
				}

				logReferenceResult(result, file);
			}
		}

		if (config.debug) {
			console.log('');
		}
	}

	// Debug output - show all references found
	if (config.debug && allReferences.length > 0) {
		console.log('🐛 Debug: All references found:');
		for (const ref of allReferences) {
			const status = ref.exists ? '✅' : '❌';
			console.log(
				`  ${status} ${ref.reference} (in ${ref.markdownFile}:${ref.lineNumber})`
			);
			console.log(`    📝 Line content: ${ref.lineContent}`);
			if (ref.resolvedPath) {
				console.log(`    📁 Resolved to: ${ref.resolvedPath}`);
			}
		}

		console.log('');
	}

	// Summary
	console.log('📊 Summary:');
	console.log(`  Total markdown files checked: ${markdownFiles.length}`);
	console.log(`  Total references found: ${totalReferences}`);
	console.log(`  Broken references: ${allIssues.length}`);

	if (allIssues.length > 0) {
		console.log('\n❌ Broken references found:');
		for (const issue of allIssues) {
			console.log(`  File: ${issue.markdownFile}:${issue.lineNumber}`);
			console.log(`  Reference: ${issue.reference}`);
			console.log(`  Line content: ${issue.lineContent}`);
			console.log('');
		}

		process.exit(1);
	} else {
		console.log('\n✅ All references are valid!');
		process.exit(0);
	}
};

const isDirectExecution =
	process.argv[1] !== undefined &&
	path.resolve(process.argv[1]) ===
		path.resolve(fileURLToPath(import.meta.url));

// Run automatically only when executed directly (`node scripts/check-docs.js`).
// This keeps imports side-effect free for unit tests.
if (isDirectExecution) {
	checkDocs();
}
