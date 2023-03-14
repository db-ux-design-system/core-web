import '../../../output/webcomponent/src/components/page/page.js';
import '../../../output/webcomponent/src/components/header/header.js';
import '../../../output/webcomponent/src/components/brand/brand.js';
import '../../showcase-styles.css';
import { navigationItems } from './utils/navigation-items.js';
import getQueryParams from './utils/get-query-params.js';

const getClassName = (tonality, color) => {
	return `db-ui-${tonality} db-bg-${color}`;
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
	const selectTonality = document.querySelector('#select-tonality');
	const selectColor = document.querySelector('#select-color');
	const content = document.querySelector('#content');
	const queryParameters = getQueryParams();

	const tonality = queryParameters.tonality ?? 'regular';
	const color = queryParameters.color ?? 'neutral-0';
	content.className = getClassName(tonality, color);

	if (selectTonality) {
		selectTonality.value = tonality;
		selectTonality.addEventListener('change', (event) => {
			insertParameter(queryParameters, 'tonality', event.target.value);
		});
	}

	if (selectColor) {
		selectColor.value = color;
		selectColor.addEventListener('change', (event) => {
			insertParameter(queryParameters, 'color', event.target.value);
		});
	}
};

const getAppShell = (content) =>
	`
	<db-page type="fixedHeaderFooter">
		<db-header slot="header">
			<db-brand slot="brand" anchorChildren="true" insideHeader="true">Vanilla Showcase</db-brand>
			<nav slot="desktop-navigation" class="desktop-navigation">
				<ul>
					${navigationItems
						.map(
							(item) =>
								`<li><a href=".${item.path}">${item.label}</a></li>`
						)
						.join('')}
				</ul>
			</nav>
			<div slot="meta-navigation">
			<select id="select-tonality">
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
			</div>
		</db-header>
			<div id="content" class="${getClassName()}">
				${content}
			</div>
		<div slot="footer">Footer</div>
	</db-page>
`;

export default getAppShell;
