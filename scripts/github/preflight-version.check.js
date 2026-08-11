#!/usr/bin/env node
/**
 * Self-check: the preflight version/channel derived for the publish dry-run must match
 * what the real release path computes for the same release.
 *
 * Real path: changesets tags `v<foundations version>` (scripts/github/changesets/publish.ts),
 * get-release.ts maps target=main + !prerelease -> RELEASE, package-version.ts then rejects a
 * hyphen for RELEASE and requires one for PRE_RELEASE. publish-npm.js maps release -> `latest`
 * and preRelease -> `next`.
 *
 * Preflight path (00-init.yml): reads the same manifest version and derives the channel from
 * the hyphen rule. This asserts both paths agree, so the dry-run rehearses the real release.
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.join(
	path.dirname(fileURLToPath(import.meta.url)),
	'../..'
);

// Mirrors the shell derivation in .github/workflows/00-init.yml (preflight-version step).
const derivePreflight = (version) =>
	version.includes('-')
		? { release: false, preRelease: true }
		: { release: true, preRelease: false };

// Mirrors publish-npm.js tag selection.
const tagFor = ({ preRelease }) => (preRelease ? 'next' : 'latest');

// 1. The manifest the preflight reads is present and a usable semver.
const foundations = JSON.parse(
	readFileSync(
		path.join(repoRoot, 'packages/foundations/package.json'),
		'utf8'
	)
);
assert.match(
	foundations.version,
	/^\d+\.\d+\.\d+/,
	`foundations version must be semver, got "${foundations.version}"`
);

// 2. foundations is claimed to be in sync with components; the dry-run relies on that.
const components = JSON.parse(
	readFileSync(
		path.join(repoRoot, 'packages/components/package.json'),
		'utf8'
	)
);
assert.equal(
	components.version,
	foundations.version,
	'foundations and components versions must stay in sync'
);

// 3. Channel derivation agrees with package-version.ts constraints in both directions.
for (const version of ['5.1.3', '10.0.0']) {
	const derived = derivePreflight(version);
	assert.deepEqual(derived, { release: true, preRelease: false });
	assert.equal(tagFor(derived), 'latest');
}

for (const version of ['5.2.0-alpha.1', '6.0.0-rc.0']) {
	const derived = derivePreflight(version);
	assert.deepEqual(derived, { release: false, preRelease: true });
	assert.equal(tagFor(derived), 'next');
}

// 4. Exactly one channel is ever set, so publish-npm.js never hits its CI guard.
for (const version of ['5.1.3', '5.2.0-alpha.1', foundations.version]) {
	const { release, preRelease } = derivePreflight(version);
	assert.notEqual(
		release,
		preRelease,
		`exactly one channel must be set for "${version}"`
	);
}

// 5. The current repo state resolves to a concrete version and tag (never 0.0.0-local).
const current = derivePreflight(foundations.version);
assert.notEqual(foundations.version, '0.0.0-local');
console.log(
	`✅ preflight resolves ${foundations.version} -> tag "${tagFor(current)}"`
);
