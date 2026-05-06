#!/usr/bin/env tsx
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
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

type PkgJson = {
	name: string;
	version?: string;
	dependencies?: Record<string, string>;
	peerDependencies?: Record<string, string>;
};

function resolveWorkspaceDeps(packageJsonPath: string): void {
	const pkgJson = JSON.parse(
		readFileSync(packageJsonPath, 'utf8')
	) as PkgJson;
	let rewritten = false;
	for (const depField of ['dependencies', 'peerDependencies'] as const) {
		const deps = pkgJson[depField];
		if (!deps) continue;
		for (const [dep, ver] of Object.entries(deps)) {
			if (!ver.startsWith('workspace:')) continue;
			const depPkgPath = path.join(
				'build-outputs',
				dep.replace('@db-ux/', ''),
				'package.json'
			);
			try {
				const { version } = JSON.parse(
					readFileSync(depPkgPath, 'utf8')
				) as PkgJson;
				deps[dep] = `^${version}`;
				rewritten = true;
			} catch {
				// Dep not in build-outputs, leave as-is
			}
		}
	}

	if (rewritten) {
		writeFileSync(packageJsonPath, JSON.stringify(pkgJson, null, '\t'));
	}
}

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
			resolveWorkspaceDeps(packageJsonPath);
			try {
				execFileSync('npx', ['publint', packagePath], {
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
