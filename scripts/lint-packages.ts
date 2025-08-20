#!/usr/bin/env tsx
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const PUBLISHABLE_PACKAGES = [
	'packages/foundations',
	'packages/components', 
	'packages/migration',
	'packages/stylelint'
];

const mode = process.argv[2];

if (!mode || !['publint', 'types'].includes(mode)) {
	console.error('Usage: tsx lint-packages.ts <publint|types>');
	process.exit(1);
}

let hasErrors = false;
let totalIssues = 0;

console.log(`🔍 Running ${mode} checks on publishable packages...`);

for (const packagePath of PUBLISHABLE_PACKAGES) {
	const packageJsonPath = path.join(packagePath, 'package.json');
	
	try {
		const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
		const packageName = packageJson.name;
		
		console.log(`\n📦 Checking ${packageName} (${packagePath})...`);
		
		if (mode === 'publint') {
			try {
				execSync(`npx publint ${packagePath}`, { 
					stdio: 'inherit',
					cwd: process.cwd()
				});
				console.log(`✅ ${packageName} - No publint issues`);
			} catch (error) {
				console.error(`❌ ${packageName} - Publint found issues`);
				hasErrors = true;
				totalIssues++;
			}
		} else if (mode === 'types') {
			try {
				execSync(`npx @arethetypeswrong/cli --pack ${packagePath}`, { 
					stdio: 'inherit',
					cwd: process.cwd()
				});
				console.log(`✅ ${packageName} - No type issues`);
			} catch (error) {
				console.error(`❌ ${packageName} - Type issues found`);
				hasErrors = true;
				totalIssues++;
			}
		}
	} catch (error) {
		console.error(`❌ Failed to process ${packagePath}:`, error instanceof Error ? error.message : error);
		hasErrors = true;
		totalIssues++;
	}
}

console.log(`\n📊 Summary: ${totalIssues} package(s) with issues out of ${PUBLISHABLE_PACKAGES.length} checked`);

if (hasErrors) {
	console.error('❌ Some packages have issues that need to be addressed');
	process.exit(1);
} else {
	console.log('✅ All packages passed validation');
}