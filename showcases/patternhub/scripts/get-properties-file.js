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
 *
 * @param componentValue {{description: string,  name: string, attributes:any[], slots:any[], events:any[]}}
 * @returns {string}
 */
const getPropertiesFile = ({ name, attributes, events, slots }) => {
	let propertyTable = '';
	let slotsTable = '';
	let eventsTable = '';
	const allSlots = [...slots];

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
			? `| [IconTypes](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview) |\n`
			: `| ${isUnion ? `<pre><code className="code-pre-wrap">${value.type.replaceAll('|', '&#124;')}</code></pre>` : ''} |\n`;
	}

	for (const { name, description } of allSlots) {
		slotsTable += `| ${getAllNames(name)} | ${description?.replaceAll(/\r\n|\r|\n/g, '<br/>')} |\n`;
	}

	for (const { name } of events) {
		eventsTable += `| ${name} / on${name[0].toUpperCase()}${name.slice(1)} | --- |\n`;
	}

	return `
import DefaultPage from "../../../../components/default-page";

# DB${transformToUpperComponentName(getComponentName(name))}
${
	allSlots.length > 0
		? `## Slots

| Name | Description |
| ---- | ----------- |
${slotsTable}
`
		: ''
}
${
	events.length > 0
		? `## Events

| Name | Type |
| ---- | ----------- |
${eventsTable}
`
		: ''
}
## Properties

| Name | Description | Type | Options |
| ---- | ----------- | ---- | ------- |
${propertyTable}

export default ({ children }) => <DefaultPage>{children}</DefaultPage>;`;
};

export default getPropertiesFile;
