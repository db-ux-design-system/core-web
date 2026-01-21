#!/usr/bin/env tsx
import { execSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const packages = readdirSync('build-outputs', {
	withFileTypes: true
});

const mode = process.argv[2];

if (!mode || !['publint'].includes(mode)) {
	console.error('Usage: tsx lint-packages.ts <publint>');
	process.exit(1);
}

let hasErrors = false;
let totalIssues = 0;

console.log(`🔍 Running ${mode} checks on publishable packages...`);

for (const { name, parentPath } of packages) {
	if (name === 'package.json') continue; // Skip root package.json

	const packagePath = path.join(parentPath, name);
	const packageJsonPath = path.join(packagePath, 'package.json');

	try {
		const { name: packageName } = JSON.parse(
			readFileSync(packageJsonPath, 'utf8')
		) as { name: string };

		console.log(`\n📦 Checking ${packageName} (${packagePath})...`);

		if (mode === 'publint') {
			try {
				execSync(`pnpm exec publint ${packagePath}`, {
					stdio: 'inherit',
					cwd: process.cwd()
				});
				console.log(`✅ ${packageName} - No publint issues`);
			} catch (_error) {
				console.error(
					`❌ ${packageName} - Publint found issues`,
					_error instanceof Error ? _error.message : _error
				);
				hasErrors = true;
				totalIssues++;
			}
		}
	} catch (_error) {
		console.error(
			`❌ Failed to process ${packagePath}:`,
			_error instanceof Error ? _error.message : _error
		);
		hasErrors = true;
		totalIssues++;
	}
}

console.log(
	`\n📊 Summary: ${totalIssues} package(s) with issues out of ${packages.length} checked`
);

if (hasErrors) {
	console.error('❌ Some packages have issues that need to be addressed');
	process.exit(1);
} else {
	console.log('✅ All packages passed validation');
}
