import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

/**
 * Simple script to run docker-compose with the correct playwright version
 * Need this script because npm under windows uses cmd which is unable to use variables in a CLI like $version
 */

const rebuildE2e = () => {
	const file = readFileSync('./package.json').toString();
	const packageJSON = JSON.parse(file);
	const version = packageJSON.devDependencies['@playwright/test'];

	spawnSync(
		'docker-compose',
		[
			'-f',
			'./e2e/docker-compose.yml',
			'build',
			'--build-arg',
			`version=${version}`
		],
		{ stdio: 'inherit' }
	);
};

rebuildE2e();
