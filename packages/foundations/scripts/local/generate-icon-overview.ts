/*
 * This script can be used to update the icon overview for foundation testing.
 */

import { writeFileSync } from 'node:fs';
import { ALL_ICONS } from '@db-ux/core-icons';

const generateIconOverview = () => {
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
			href="/build/css/db-ui-foundations-absolute.css"
		/>
		<link rel="stylesheet" href="/build/css/default-theme.css" />
		<link rel="stylesheet" href="/build/css/internals.css" />
		<link rel="stylesheet" href="/build/css/icons/include-absolute.css" />
		<style>
			.db-infotext {
				display: none !important;
			}
		</style>
	</head>

	<body>
		<div class="icons-overview-container">
		${
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
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
		writeFileSync('./src/icons.html', iconHtml);
	} catch (error) {
		console.error(error);
	}
};

generateIconOverview();
