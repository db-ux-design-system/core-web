/*
 * This script can be used to update the icon overview for foundation testing.
 */

import { writeFileSync } from 'node:fs';
import * as prettier from 'prettier';
import { ALL_ICONS } from '@db-ux/core-icons';

const generateIconOverview = async () => {
	try {
		const generatedDisclaimer = 'This file was generated';
		const iconHtml = `<!--${generatedDisclaimer}-->
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Icon Overview</title>
		<link
			rel="stylesheet"
			href="/build/styles/absolute.css"
		/>
		<link rel="stylesheet" href="/build/styles/defaults/default-theme.css" />
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
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
		const output: string = await prettier.format(iconHtml, {
			parser: 'html'
		});
		writeFileSync('./src/icons.html', output);
	} catch (error) {
		console.error(error);
	}
};

void generateIconOverview();
