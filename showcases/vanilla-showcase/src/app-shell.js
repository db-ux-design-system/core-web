import '../../../output/webcomponent/src/components/page/page.js';
import '../../../output/webcomponent/src/components/header/header.js';
import '../../../output/webcomponent/src/components/brand/brand.js';
import './index.css';
import { navigationItems } from './utils/navigation-items.js';

let tonality =
	document.location.search.slice(1).split('&').tonality ?? 'regular';
const color = 'neutral-0';

const getClassName = () => {
	return `db-ui-${tonality} db-bg-${color}`;
};

const insertParameter = (key, value) => {
	key = encodeURIComponent(key);
	value = encodeURIComponent(value);

	const kvp = document.location.search.slice(1).split('&');
	let i = 0;

	for (; i < kvp.length; i++) {
		if (kvp[i].startsWith(key + '=')) {
			const pair = kvp[i].split('=');
			pair[1] = value;
			kvp[i] = pair.join('=');
			break;
		}
	}

	if (i >= kvp.length) {
		kvp[kvp.length] = [key, value].join('=');
	}

	document.location.search = kvp.join('&');
};

onload = () => {
	const selectTonality = document.querySelector('#select-tonality');
	const content = document.querySelector('#content');
	content.className = getClassName();

	if (selectTonality) {
		selectTonality.addEventListener('change', (event) => {
			tonality = event.target.value;
			insertParameter('tonality', tonality);
		});
	}
};

const getAppShell = (content) => {
	return `
	<db-page type="fixedHeaderFooter">
		<db-header slot="header">
			<db-brand slot="brand" anchorChildren="true" insideHeader="true">Vanilla Showcase</db-brand>
			<nav slot="desktop-navigation" class="desktop-navigation">
				<ul>
					${navigationItems
						.map(
							(item) =>
								`<li><a href="${item.path}">${item.label}</a></li>`
						)
						.join('')}
				</ul>
			</nav>
			<div slot="meta-navigation">
			<select id="select-tonality" value="${tonality}">
				<option>functional</option>
				<option>regular</option>
				<option>expressive</option>
			</select>
			<select v-model="color" @change="onChange($event)">
				<option v-for="col of COLORS" :value="col">
				{{ col }}
				</option>
			</select>
			</div>
		</db-header>
			<div id="content" class="${getClassName()}">
				${content}
			</div>
		<div slot="footer">Footer</div>
	</db-page>
`;
};

export default getAppShell;
