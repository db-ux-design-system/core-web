import '../../../output/webcomponent/src/components/page/page.js';
import '../../../output/webcomponent/src/components/header/header.js';
import '../../../output/webcomponent/src/components/brand/brand.js';
import '../../showcase-styles.css';
import getQueryParams from './utils/get-query-params.js';
import getActionBar from './action-bar.js';
import getNavigation from './navigation.js';

const getClassName = (density, color) => {
	return `db-density-${density} db-${color}`;
};

const insertParameter = (queryParameters, key, value) => {
	key = encodeURIComponent(key);
	value = encodeURIComponent(value);

	queryParameters[key] = value;

	const keys = Object.keys(queryParameters).map((pKey) => {
		return `${pKey}=${queryParameters[pKey]}`;
	});

	document.location.search = keys.join('&');
};

onload = () => {
	const selectDensities = Array.from(
		document.querySelectorAll('#select-density')
	);
	const selectColors = Array.from(document.querySelectorAll('#select-color'));
	const content = document.querySelector('#content');
	const header = document.querySelector('#db-header');
	const queryParameters = getQueryParams();

	const density = queryParameters.density ?? 'regular';
	const color = queryParameters.color ?? 'neutral-bg-basic-level-1';
	content.className = getClassName(density, color);

	for (const selectDensity of selectDensities) {
		selectDensity.value = density;
		selectDensity.addEventListener('change', (event) => {
			insertParameter(queryParameters, 'density', event.target.value);
		});
	}

	for (const selectColor of selectColors) {
		selectColor.value = color;
		selectColor.addEventListener('change', (event) => {
			insertParameter(queryParameters, 'color', event.target.value);
		});
	}

	if (header) {
		header.props.onToggle = (open) => {
			header.setAttribute('drawerOpen', open);
		};
	}
};

const getMetaNavigation = (mobile) => {
	return `
			<div slot="meta-navigation${mobile ? '-mobile' : ''}">
				<select id="select-density">
					<option>functional</option>
					<option>regular</option>
					<option>expressive</option>
				</select>
				<select id="select-color">
					<option>neutral-0</option>
					<option>neutral-1</option>
					<option>neutral-2</option>
					<option>neutral-3</option>
					<option>neutral-4</option>
					<option>neutral-transparent-full</option>
					<option>neutral-transparent-semi</option>
					<option>primary</option>
					<option>primary-transparent-semi</option>
					<option>secondary</option>

					<option>secondary-transparent-semi</option>
					<option>successful</option>
					<option>successful-transparent-semi</option>
					<option>critical</option>

					<option>critical-transparent-semi</option>
					<option>warning</option>
					<option>warning-transparent-semi</option>
					<option>informational</option>
					<option>informational-transparent-semi</option>
				</select>
			</div>`;
};

const getAppShell = (content) =>
	`
	<db-page data-variant="fixed">
		<db-header id="db-header" slot="header">
			<db-brand slot="brand" anchorChildren="true" insideHeader="true">Vanilla Showcase</db-brand>
			${getNavigation(true)}
			${getNavigation(false)}
			<db-button slot="call-to-action" variant="ghost" icon="magnifying_glass">Search</db-button>
			${getActionBar(true)}
			${getActionBar(false)}
			${getMetaNavigation(true)}
			${getMetaNavigation(false)}
		</db-header>
			<div id="content" class="${getClassName()}">
				${content}
			</div>
		<div slot="footer">Footer</div>
	</db-page>
`;

export default getAppShell;
