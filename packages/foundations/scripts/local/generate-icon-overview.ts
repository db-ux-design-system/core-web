/*
 * This script can be used to update the icon overview for foundation testing.
 */

import { writeFileSync } from 'node:fs';
import { ALL_ICONS } from '../../src';

const generateIconOverview = async () => {
	try {
		const generatedDisclaimer = 'This file was generated';
		const iconHtml = `<!--${generatedDisclaimer}-->
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Icon Overview</title>
		<link rel="stylesheet" href="/dev/index.css" />
		<link rel="stylesheet" href="/build/styles/icons/absolute.css" />
		<style>
			.db-infotext {
				display: none !important;
			}
		</style>
	</head>

	<body>
		<div class="icons-overview-container">
		${
			/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */
			ALL_ICONS.map(
				(icon) => `
<div data-spacing="small" class="db-card">
<span
aria-hidden="true"
class="db-icon"
data-icon="${icon}"
>${icon}</span
><span
class="db-infotext"
data-icon="none"
data-semantic="informational"
>${icon}</span
>
</div>`
			).join('\n')
		}
</div>
</body>
</html>`;
		// we're formatting the code with Prettier within package.json (to easily resolve to the config)
		writeFileSync('./dev/icons.html', iconHtml);
	} catch (error) {
		console.error(error);
	}
};

void generateIconOverview();
