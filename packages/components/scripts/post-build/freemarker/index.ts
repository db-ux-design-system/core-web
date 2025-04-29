import components from '../components';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { MitosisComponent } from '@builder.io/mitosis';
import { toDashedLowerCase } from '../../utils';
import {
	findAllSlots,
	freemarkerComponentsDirPath,
	getRootProps,
	isEvent,
	outputFolder
} from './utils';
import { createHydrateCss } from './css';
import { getChildren } from './nodes';
import { uuid } from '../../../src/utils/index';

const testedComponents = [
	'button',
	'card',
	'accordion',
	'accordion-item',
	'link',
	'badge',
	'brand',
	'divider',
	'icon',
	'infotext',
	'notification',
	'page'
];

const getWCTemplate = (
	componentName: string,
	props: string[],
	connectId: string
): string => `
<#if wc>
		<db-${componentName}
		<#if ftl>
		data-connect="${connectId}"
		</#if>
		${props
			.map(
				(prop) => `
		<#if (${prop})?has_content>
				${toDashedLowerCase(prop)}="\${${prop}}"
				</#if>`
			)
			.join('\n')}
			${getRootProps(props)}
		>
    		<#nested/>
    	</db-${componentName}>
    </#if>`;

const createIndexFile = () => {
	const template = components
		.filter(({ name }) => testedComponents.includes(name))
		.map(({ name }) => `<#include "${name}/${name}.ftl"/>`)
		.join('\n');

	writeFileSync(`${freemarkerComponentsDirPath}/index.ftl`, template);
};

export default () => {
	if (!existsSync(`${freemarkerComponentsDirPath}`)) {
		mkdirSync(freemarkerComponentsDirPath, { recursive: true });
	}

	createHydrateCss();
	createIndexFile();

	for (const component of components) {
		const componentName = component.name;
		const jsonFilePath = `../../${outputFolder}/json/src/components/${componentName}/${componentName}.json`;
		const freemarkerFilePath = `${freemarkerComponentsDirPath}/${componentName}/${componentName}.ftl`;

		const freemarkerDir = dirname(freemarkerFilePath);
		if (!existsSync(freemarkerDir)) {
			mkdirSync(freemarkerDir, { recursive: true });
		}

		const mComponent: MitosisComponent = JSON.parse(
			readFileSync(jsonFilePath).toString()
		);

		const allSlots = findAllSlots(mComponent.children);

		let props: string[];
		if (mComponent.props) {
			props = Object.keys(mComponent.props).filter(
				(prop) =>
					prop !== 'children' &&
					!allSlots.includes(prop) &&
					!isEvent(prop)
			);
		} else {
			props = [];
		}

		const componentNameWithoutPrefix = mComponent.name.replace('DB', '');
		const connectId = `connect-${uuid()}`;

		const imports = mComponent.imports
			.filter((imp) => imp.path.endsWith('.lite'))
			.map((imp) => {
				const importName = Object.keys(imp.imports).join('');
				return `<#import "${imp.path.replace(
					'.lite',
					'.ftl'
				)}" as ${importName}/>`;
			});

		const requiresJavaScript =
			mComponent.hooks.onMount.length > 0 ||
			(mComponent.hooks.onUpdate
				? mComponent.hooks.onUpdate?.length > 0
				: false);

		const template = `
		<#-- This file is auto-generated. Do not edit it directly. -->
		${
			requiresJavaScript
				? '<#-- !!! This component requires JavaScript to run with all functions you should enable the wc property. !!! -->'
				: ''
		}

		<#include "*/utils.ftl"/>
		${imports.join('\n')}

		<#macro ${componentNameWithoutPrefix} ${props
			.map((prop) => `${prop}=""`)
			.join('\n')} ftl=true wc=${
			requiresJavaScript ? 'true' : 'false'
		} props...>
		 <#if ftl>
				${getChildren({ nodes: mComponent.children, props, connectId })}

    	</#if>
   ${getWCTemplate(componentName, props, connectId)}
			</#macro>`;

		writeFileSync(freemarkerFilePath, template);
	}
};
