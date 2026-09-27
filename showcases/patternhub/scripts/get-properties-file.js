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
	// The web-types generator emits `slots: component.slots?.map(...)`, so the key
	// is missing for an element without slots. `attributes` and `events` always
	// fall back to an array and therefore need no guard.
	const allSlots = [...(slots ?? [])];

	for (const { name, description, value } of attributes.filter(
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

	for (const { name } of events) {
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
	events.length > 0
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
 @param displayName {string} the page title, which equals `DB<ComponentName>` for
 every entry that documents a single element
 @returns {string}
 */
export default function getPropertiesFile(elements, displayName) {
	// A component family lists every element as its own `h2` section and pushes the
	// tables one level down. A single-element page has no such section, which keeps
	// its output identical to the layout used before families existed.
	const isFamily = elements.length > 1;

	return `
import DefaultPage from "../../../../components/default-page";

# ${displayName}
${elements
	.map(
		(element) =>
			`${isFamily ? `\n## ${getElementTitle(element.name)}\n` : ''}${getElementTables(element, isFamily ? '###' : '##')}`
	)
	.join('')}
export default ({ children }) => <DefaultPage>{children}</DefaultPage>;`;
}
