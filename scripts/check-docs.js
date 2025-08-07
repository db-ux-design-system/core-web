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
	// Root directory to search from
	rootDir: process.cwd(),
	// Workspace packages directory (adjust if different)
	packagesDir: 'packages',
	// Debug mode - set to true to see all references found
	debug: process.argv.includes('--debug') || process.env.DEBUG === 'true',
	// Folder patterns to ignore
	ignorePatterns: [
		'node_modules/**',
		'**/node_modules/**',
		'.git/**',
		'docs/migration/**'
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

	let allFiles = [];
	patterns.forEach((pattern) => {
		const files = glob.sync(pattern, {
			cwd: config.rootDir,
			ignore: config.ignorePatterns,
			dot: false,
			absolute: false
		});
		allFiles = allFiles.concat(files);
	});

	// Remove duplicates
	allFiles = [...new Set(allFiles)];

	if (config.debug) {
		console.log(`📄 Found ${allFiles.length} markdown files:`);
		allFiles.forEach((file) => console.log(`  - ${file}`));
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
	lines.forEach((line, lineIndex) => {
		patterns.forEach((pattern) => {
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
		});
	});

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
	const match = reference.match(/^(@db-ux\/[^\/]+)\/(.+)$/);
	if (!match) return null;

	const [, packageName, filePath] = match;
	const packageDirName = packageName.replace('@db-ux/', '');

	// Try different possible locations
	const possiblePaths = [
		// Direct workspace package
		path.join(config.rootDir, config.packagesDir, packageDirName, filePath),
		// node_modules (for published packages)
		path.join(config.rootDir, 'node_modules', packageName, filePath),
		// Workspace node_modules
		path.join(
			config.rootDir,
			config.packagesDir,
			packageDirName,
			'node_modules',
			packageName,
			filePath
		)
	];

	const resolvedPath = possiblePaths.find((p) => fs.existsSync(p));

	if (config.debug && resolvedPath) {
		console.log(`    🔍 Resolved to: ${resolvedPath}`);
	}

	return resolvedPath;
};

/**
 * Check if a file reference exists
 */
const checkFileReference = (referenceObj, markdownFile) => {
	const resolvedPath = resolvePackageReference(referenceObj.reference);

	return {
		reference: referenceObj.reference,
		lineNumber: referenceObj.lineNumber,
		lineContent: referenceObj.lineContent,
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

	markdownFiles.forEach((file) => {
		const fullPath = path.join(config.rootDir, file);
		const content = fs.readFileSync(fullPath, 'utf8');
		const references = extractFileReferences(content);

		if (references.length > 0) {
			if (config.debug) {
				console.log(`📄 Checking ${file}...`);
			}

			references.forEach((referenceObj) => {
				totalReferences++;
				const result = checkFileReference(referenceObj, file);
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
			});

			if (config.debug) {
				console.log('');
			}
		}
	});

	// Debug output - show all references found
	if (config.debug && allReferences.length > 0) {
		console.log('🐛 Debug: All references found:');
		allReferences.forEach((ref) => {
			const status = ref.exists ? '✅' : '❌';
			console.log(
				`  ${status} ${ref.reference} (in ${ref.markdownFile}:${ref.lineNumber})`
			);
			console.log(`    📝 Line content: ${ref.lineContent}`);
			if (ref.resolvedPath) {
				console.log(`    📁 Resolved to: ${ref.resolvedPath}`);
			}
		});
		console.log('');
	}

	// Summary
	console.log('📊 Summary:');
	console.log(`  Total markdown files checked: ${markdownFiles.length}`);
	console.log(`  Total references found: ${totalReferences}`);
	console.log(`  Broken references: ${allIssues.length}`);

	if (allIssues.length > 0) {
		console.log('\n❌ Broken references found:');
		allIssues.forEach((issue) => {
			console.log(`  File: ${issue.markdownFile}:${issue.lineNumber}`);
			console.log(`  Reference: ${issue.reference}`);
			console.log(`  Line content: ${issue.lineContent}`);
			console.log('');
		});

		process.exit(1);
	} else {
		console.log('\n✅ All references are valid!');
		process.exit(0);
	}
};

checkDocs();
