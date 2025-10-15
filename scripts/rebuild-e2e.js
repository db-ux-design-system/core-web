import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

/**
 * Simple script to run docker-compose with the correct playwright version
 * Need this script because npm under windows uses cmd which is unable to use variables in a CLI like $version
 */

const rebuildForPlaywright = () => {
	const file = readFileSync('./package.json').toString();
	const packageJSON = JSON.parse(file);
	const version = packageJSON.devDependencies['@playwright/test'];

	spawnSync(
		'docker-compose',
		[
			'--file',
			'./e2e/docker-compose.yml',
			'build',
			'--build-arg',
			`version=${version}`
		],
		{ stdio: 'inherit' }
	);
};

rebuildForPlaywright();
