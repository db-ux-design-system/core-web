#!/usr/bin/env node
import { glob } from 'glob';
import * as fs from 'node:fs';
import path from 'node:path';
import * as process from 'node:process';

// Configuration
const config = {
	// File extensions to check
	markdownExtensions: ['md', 'mdx'],
	// NPM organization prefix to look for
	orgPrefix: '@db-ux/',
	// Root directory to search from – as this script is run from the scripts directory, we set it to one level up
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
 * Extract file references from markdown content
 */
const extractFileReferences = (content) => {
	const references = [];
	const lines = content.split('\n');

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
		/["']([^"']*@db-ux\/[^"']+)["']/g
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
				if (reference.includes(config.orgPrefix)) {
					// Extract package name and check if there's a file path after it
					const packageMatch = reference.match(
						/^(@db-ux\/[^/]+)\/(.+)$/
					);
					if (packageMatch && packageMatch[2]) {
						// Only include references that have a file path after the package name
						references.push({
							reference,
							lineNumber: lineIndex + 1,
							lineContent: line.trim()
						});
					}
				}
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
 * Resolve package reference to actual file path
 */
const resolvePackageReference = (reference) => {
	// Extract package name and file path
	const match = reference.match(/^(@db-ux\/[^/]+)\/(.+)$/);
	if (!match) return null;

	const [, packageName, filePath] = match;
	const packageDirName = packageName.replace('@db-ux/', '');

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

	// Try different possible locations for each file variation
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

	const resolvedPath = possiblePaths.find((p) => fs.existsSync(p));

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

/**
 * Check if a file reference exists
 */
const checkFileReference = (referenceObject, markdownFile) => {
	const resolvedPath = resolvePackageReference(referenceObject.reference);

	return {
		reference: referenceObject.reference,
		lineNumber: referenceObject.lineNumber,
		lineContent: referenceObject.lineContent,
		exists: Boolean(resolvedPath),
		resolvedPath,
		markdownFile
	};
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

		if (references.length > 0) {
			if (config.debug) {
				console.log(`📄 Checking ${file}...`);
			}

			for (const referenceObject of references) {
				totalReferences++;
				const result = checkFileReference(referenceObject, file);
				allReferences.push(result);

				if (!result.exists) {
					allIssues.push(result);
				}

				if (config.debug) {
					const status = result.exists ? '✅' : '❌';
					console.log(
						`  ${status} ${result.reference} (line ${result.lineNumber})`
					);
					console.log(`    📝 ${result.lineContent}`);
				} else if (!result.exists) {
					console.log(
						`❌ ${result.reference} in ${file}:${result.lineNumber}`
					);
				}
			}

			if (config.debug) {
				console.log('');
			}
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

checkDocs();
