import components from './components.js';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { ForNode, MitosisComponent, MitosisNode } from '@builder.io/mitosis';
import { toDashedLowerCase } from '../utils';

const outputFolder = 'output';
const freemarkerDirPath = `../../${outputFolder}/freemarker`;
const freemarkerComponentsDirPath = `${freemarkerDirPath}/components`;

const replacePropsInCode = (
	code: string,
	fn: (path: string) => string = (path) => `\${${path.replace('props.', '')}}`
): string => code.replaceAll(/props\.\w+/g, fn);

const replaceStateInCode = (code: string): string =>
	code.replaceAll(/state\._\w+/g, (path) => `${path.replace('state._', '')}`);

const deletePropsInCode = (code: string): string =>
	replacePropsInCode(code, (path) => `${path.replace('props.', '')}!`);

const getBindingTemplate = (node: MitosisNode): string => {
	const { bindings, name } = node;
	return Object.entries(bindings)
		.filter(([, value]) => !!value)
		.map(
			([key, value]) =>
				`<#local ${getPropKey(name, key)}=${replaceStateInCode(
					deletePropsInCode(value!.code)
				)} />`
		)
		.join('\n');
};

const handleShowNode = (node: MitosisNode): string => {
	const { bindings, children, meta } = node;

	const elseCase = meta.else
		? `<#else>${handleNode({ node: meta.else as MitosisNode })}`
		: '';

	return `<#if (${deletePropsInCode(bindings!.when!.code)})?has_content>
	${getChildren({
		nodes: children
	})}
	${elseCase}
	</#if>
	`;
};

const handleForNode = (node: MitosisNode): string => {
	const { bindings, children, scope } = node as ForNode;
	const each = bindings?.each?.code;

	if (!each) return '';

	return `
	<#list ${each} as ${scope.forName}>
	${getChildren({ nodes: children })}
</#list>
	`;
};

const handleTextNode = (node: MitosisNode): string => {
	const { bindings } = node;
	const code = bindings!._text!.code;
	return code === 'props.children'
		? '<#nested ""/>'
		: `${replacePropsInCode(code)}`;
};

const handleSlotNode = (node: MitosisNode): string => {
	const { properties } = node;
	return `<#nested "${properties.name}"/>`;
};

const getPropKey = (name: string, key: string) =>
	`${name}${key.split('-').join('')}`;

const getRootProps = (props?: string[]) => {
	return props?.length
		? `
			<#if !props?is_sequence>
				<#list props as k, v>
					\${k} = \${v}
				</#list>
			</#if>`
		: '';
};

const handleNode = ({
	node,
	props
}: {
	node: MitosisNode;
	props?: string[];
}): string => {
	const { name, children, bindings } = node;
	if (bindings._text) {
		return handleTextNode(node);
	}
	if (name === 'Show') {
		return handleShowNode(node);
	}
	if (name === 'For') {
		return handleForNode(node);
	}
	if (name === 'Slot') {
		return handleSlotNode(node);
	}

	// Delete events && refs && key
	delete bindings.key;
	delete bindings.ref;
	delete bindings.onClick;

	const rootProps = getRootProps(props);
	const isComponent = name.startsWith('DB');

	const bindingProps = Object.keys(bindings)
		.map((key) => {
			const localKey = getPropKey(name, key);
			const attributeSet = `
			${key}="\${${localKey}}"`;
			return isComponent
				? attributeSet
				: `
				<#if (${localKey})?has_content>
				${attributeSet}
				</#if>`;
		})
		.join('');

	const tag = isComponent ? `@${name}.${name.replace('DB', '')}` : name;

	return `
${getBindingTemplate(node)}
<${tag}${bindingProps}${rootProps}>
	${getChildren({ nodes: children })}
</${tag}>`;
};

const getChildren = ({
	nodes,
	props
}: {
	nodes: MitosisNode[];
	props?: string[];
}): string => {
	let template = '';

	for (const node of nodes) {
		template += handleNode({ node, props });
	}

	return template;
};

export const findAllSlots = (nodes: MitosisNode[]): string[] => {
	const result: string[] = [];

	const traverse = (currentNode: MitosisNode) => {
		if (currentNode.name === 'Slot' && currentNode.properties.name) {
			result.push(currentNode.properties.name);
		}
		if (currentNode.children) {
			currentNode.children.forEach(traverse);
			if (currentNode.meta.else) {
				traverse(currentNode.meta.else as MitosisNode);
			}
		}
	};

	for (const node of nodes) {
		traverse(node);
	}
	return result;
};

const getWCTemplate = (componentName: string, props: string[]): string => `
<#if wc>
		<db-${componentName}
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

const createHydrateCss = () => {
	const componentsWithPrefix = components.map(({ name }) => `db-${name}`);

	let template = componentsWithPrefix
		.map(
			(name) => `
.${name} {
    & + ${name} {
      &:not(.hydrated) {
        display: none;
      }
    }

    &:has(+ ${name}[class="hydrated"]) {
      display: none;
    }
  }`
		)
		.join('\n');

	template = template += `
:is(${componentsWithPrefix.join(', ')}):not(.hydrated) {
  font-size: 0;

  & > * {
    display: none;
  }

  &::before {
    --spinner-color: var(--db-brand-origin-default);
    --spinner-border-radius: var(--db-border-radius-xs);

    content: "";
    display: flex;
    width: var(--db-sizing-sm);
    aspect-ratio: 1;
    border-radius: 50%;
    background:
      radial-gradient(farthest-side, var(--spinner-color) 94%, #0000)
        top/var(--spinner-border-radius) var(--spinner-border-radius) no-repeat,
      conic-gradient(#0000 30%, var(--spinner-color));
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--spinner-border-radius)),
      #000 0
    );
    animation: rotate 1s infinite linear;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}`;

	writeFileSync(`${freemarkerComponentsDirPath}/hydrate.css`, template);
};

const createIndexFile = () => {
	const template = components
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
				(prop) => prop !== 'children' && !allSlots.includes(prop)
			);
		} else {
			props = [];
		}

		const componentNameWithoutPrefix = mComponent.name.replace('DB', '');

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
				${getChildren({ nodes: mComponent.children, props })}

    	</#if>
   ${getWCTemplate(componentName, props)}
			</#macro>`;

		writeFileSync(freemarkerFilePath, template);
	}
};
