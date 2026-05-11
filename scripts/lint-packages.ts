#!/usr/bin/env tsx
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { publint } from 'publint';
import { formatMessage } from 'publint/utils';

const mode = process.argv[2];

if (!mode || !['publint'].includes(mode)) {
	console.error('Usage: tsx lint-packages.ts <publint>');
	process.exit(1);
}

console.log(`🔍 Running ${mode} checks on publishable packages...`);

type PkgJson = {
	name: string;
	version?: string;
	dependencies?: Record<string, string>;
	peerDependencies?: Record<string, string>;
};

const dirs = readdirSync('build-outputs', { withFileTypes: true }).filter(
	(entry) => entry.isDirectory()
);

const results = await Promise.all(
	dirs.map(async (entry) => {
		const packagePath = path.join(entry.parentPath, entry.name);
		const packageJsonPath = path.join(packagePath, 'package.json');

		try {
			const pkgJson = JSON.parse(
				readFileSync(packageJsonPath, 'utf8')
			) as PkgJson;

			const { messages } = await publint({
				pkgDir: path.resolve(packagePath),
				level: 'warning',
				pack: false
			});

			return { pkgJson, packagePath, messages, error: null };
		} catch (error) {
			return {
				pkgJson: null,
				packagePath,
				messages: [],
				error: error instanceof Error ? error.message : String(error)
			};
		}
	})
);

let hasErrors = false;
let totalIssues = 0;

for (const { pkgJson, packagePath, messages, error } of results) {
	if (error) {
		console.error(`\n❌ Failed to process ${packagePath}: ${error}`);
		hasErrors = true;
		totalIssues++;
		continue;
	}

	const { name } = pkgJson!;
	console.log(`\n📦 Checking ${name} (${packagePath})...`);

	if (messages.length > 0) {
		for (const message of messages) {
			console.error(`  ${formatMessage(message, pkgJson)}`);
		}

		console.error(`❌ ${name} - Publint found ${messages.length} issue(s)`);
		hasErrors = true;
		totalIssues++;
	} else {
		console.log(`✅ ${name} - No publint issues`);
	}
}

console.log(
	`\n📊 Summary: ${totalIssues} package(s) with issues out of ${dirs.length} checked`
);

if (hasErrors) {
	console.error('❌ Some packages have issues that need to be addressed');
	process.exit(1);
} else {
	console.log('✅ All packages passed validation');
}
