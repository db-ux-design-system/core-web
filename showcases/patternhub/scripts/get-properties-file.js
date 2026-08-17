import { getComponentName, transformToUpperComponentName } from './utils.js';

const getAllNames = (name) => {
	const part = transformToUpperComponentName(name);
	if (!part) {
		return '';
	}

	const upperName = `${part[0].toLowerCase()}${part.slice(1)}`;

	if (name === 'classname') {
		return 'className';
	}

	if (name !== upperName) {
		return `${name} / ${upperName}`;
	}

	return name;
};

/**
 Renders the Slots/Events/Properties tables of a single custom element.
 The headline level is a parameter because a component family documents every
 element as an `h2` section and therefore needs to push these one level down.
 @param componentValue {{name: string, attributes:any[], slots:any[], events:any[]}}
 @param componentValue.attributes
 @param componentValue.events
 @param componentValue.slots
 @param headline {string} markdown headline prefix, e.g. `##`
 @returns {string}
 */
const getElementTables = ({ attributes, events, slots }, headline) => {
	let propertyTable = '';
	let slotsTable = '';
	let eventsTable = '';
	// `web-types.json` omits these keys entirely when an element contributes
	// nothing, so they cannot be spread or iterated unconditionally.
	const allSlots = [...(slots ?? [])];
	const allEvents = events ?? [];

	for (const { name, description, value } of (attributes ?? []).filter(
		({ value }) => !value?.type?.includes('function')
	)) {
		const isUnion = value.type.includes('|');

		propertyTable += `| ${getAllNames(name)} `;
		propertyTable += `| ${description?.replaceAll(/\r\n|\r|\n/g, '<br/>') || 'No description'} `;
		propertyTable += `| ${isUnion ? 'union' : value.type} `;

		propertyTable += ['icon', 'icon-trailing', 'message-icon'].includes(
			name
		)
			? '| [IconTypes](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview) |\n'
			: `| ${isUnion ? `<pre><code className="code-pre-wrap">${value.type.replaceAll('|', '&#124;')}</code></pre>` : ''} |\n`;
	}

	for (const { name, description } of allSlots) {
		slotsTable += `| ${getAllNames(name)} | ${description?.replaceAll(/\r\n|\r|\n/g, '<br/>')} |\n`;
	}

	for (const { name } of allEvents) {
		eventsTable += `| ${name} / on${name[0].toUpperCase()}${name.slice(1)} | --- |\n`;
	}

	return `${
		allSlots.length > 0
			? `${headline} Slots

| Name | Description |
| ---- | ----------- |
${slotsTable}
`
			: ''
	}
${
	allEvents.length > 0
		? `${headline} Events

| Name | Type |
| ---- | ----------- |
${eventsTable}
`
		: ''
}
${headline} Properties

| Name | Description | Type | Options |
| ---- | ----------- | ---- | ------- |
${propertyTable}
`;
};

const getElementTitle = (name) =>
	`DB${transformToUpperComponentName(getComponentName(name))}`;

/**
 @param elements {{description: string, name: string, attributes:any[], slots:any[], events:any[]}[]}
 all custom elements documented by one Patternhub page, in navigation order
 @param displayName {string} the page title used when the page documents a family
 @returns {string}
 */
export default function getPropertiesFile(elements, displayName) {
	// A single-element page keeps its historic layout so that the existing
	// Patternhub pages and their screenshots stay untouched.
	if (elements.length === 1) {
		return `
import DefaultPage from "../../../../components/default-page";

# ${getElementTitle(elements[0].name)}
${getElementTables(elements[0], '##')}
export default ({ children }) => <DefaultPage>{children}</DefaultPage>;`;
	}

	return `
import DefaultPage from "../../../../components/default-page";

# ${displayName}
${elements
	.map(
		(element) => `
## ${getElementTitle(element.name)}
${getElementTables(element, '###')}`
	)
	.join('')}
export default ({ children }) => <DefaultPage>{children}</DefaultPage>;`;
}
