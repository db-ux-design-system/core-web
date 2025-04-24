import components from './components.js';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { MitosisComponent, MitosisNode } from '@builder.io/mitosis';

const outputFolder = 'output';

const replacePropsInCode = (
	code: string,
	fn: (path: string) => string = (path) => `\${${path}}`
): string => code.replaceAll(/props\.\w+/g, fn);

const handleShowNode = ({ node }: { node: MitosisNode }): string => {
	const { bindings, children, meta } = node;

	const elseCase = meta.else
		? `<#else>${handleNode({ node: meta.else as MitosisNode })}`
		: '';

	return `<#if (${bindings!.when!.code})??>${getChildren({
		nodes: children
	})}${elseCase}</#if>
	`;
};

const handleTextNode = ({ node }: { node: MitosisNode }): string => {
	const { bindings } = node;
	const code = bindings!._text!.code;
	return code === 'props.children'
		? '<#nested/>'
		: `${replacePropsInCode(code)}`;
};

const getPropKey = (name: string, key: string) =>
	`${name}${key.split('-').join('')}`;

const getRootProps = (props?: string[]) => {
	return props?.length
		? `
			<#list props as k, v>
				\${k} = \${v}
			</#list>`
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
		return handleTextNode({ node });
	}
	if (name === 'Show') {
		return handleShowNode({ node });
	}

	// Delete events and refs
	delete bindings.ref;
	delete bindings.onClick;

	const rootProps = getRootProps(props);

	const bindingTemplate = Object.entries(bindings)
		.filter(([, value]) => !!value)
		.map(
			([key, value]) =>
				`<#local ${getPropKey(name, key)}=${replacePropsInCode(
					value!.code,
					(path) => `${path.replace('props.', '')}!`
				)} />`
		)
		.join('\n');

	const bindingProps = Object.keys(bindings)
		.map((key) => {
			const localKey = getPropKey(name, key);
			return `
				<#if (${localKey})?has_content>
				${key}="\${${localKey}}"
				</#if>`;
		})
		.join('');

	return `
${bindingTemplate}
<${name}${bindingProps}${rootProps}>
	${getChildren({ nodes: children })}
</${name}>`;
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

const getWCTemplate = (componentName: string, props: string[]): string => `
<#if wc>
		<db-${componentName}
		${props
			.map(
				(prop) => `
		<#if (${prop})?has_content>
				${prop}="\${${prop}}"
				</#if>`
			)
			.join('\n')}
			${getRootProps(props)}
		>
    		<#nested/>
    	</db-${componentName}>
    </#if>`;

export default () => {
	for (const component of components) {
		const componentName = component.name;
		const jsonFilePath = `../../${outputFolder}/json/src/components/${componentName}/${componentName}.json`;
		const freemarkerFilePath = `../../${outputFolder}/freemarker/src/components/${componentName}/${componentName}.ftl`;

		const freemarkerDir = dirname(freemarkerFilePath);
		if (!existsSync(freemarkerDir)) {
			mkdirSync(freemarkerDir, { recursive: true });
		}

		const mComponent: MitosisComponent = JSON.parse(
			readFileSync(jsonFilePath).toString()
		);

		const props: string[] = mComponent.props
			? Object.keys(mComponent.props).filter(
					(prop) => prop !== 'children'
			  )
			: [];

		const template = `
		<#include "*/utils.ftl"/>

		<#macro ${mComponent.name} ${props
			.map((prop) => `${prop}=""`)
			.join('\n')} ftl=true wc=true props...>
		 <#if ftl>
				${getChildren({ nodes: mComponent.children, props })}

    	</#if>
   ${getWCTemplate(componentName, props)}
			</#macro>`;

		writeFileSync(
			`../../${outputFolder}/freemarker/src/components/${componentName}/${componentName}.ftl`,
			template
		);
	}
};
