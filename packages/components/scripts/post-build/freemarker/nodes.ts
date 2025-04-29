import { ForNode, MitosisNode } from '@builder.io/mitosis';
import { getRootProps, isEvent } from './utils';

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
		.map(([key, value]) => {
			let code = value!.code;
			if (code === 'true' || code === 'false') {
				code += '?c';
			}
			code = replaceStateInCode(deletePropsInCode(code));
			const propKey = getPropKey(name, key);
			const result = `<#local ${propKey}=${code} />`;

			if (code.includes('state.')) {
				return `
				<#-- CONTAINS STATE: ${result} -->
				<#local ${propKey}=""/>
				`;
			}

			return result;
		})
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
		: code.includes('props.')
			? `\${${deletePropsInCode(code)}}`
			: code;
};

const handleSlotNode = (node: MitosisNode): string => {
	const { properties } = node;
	return `<#nested "${properties.name}"/>`;
};

const getPropKey = (name: string, key: string) =>
	`${name}${key.split('-').join('')}`;

const handleNode = ({
	node,
	props,
	connectId
}: {
	node: MitosisNode;
	props?: string[];
	connectId?: string;
}): string => {
	const { name, children, bindings, properties } = node;
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
	Object.keys(bindings).forEach((bind) => {
		if (isEvent(bind) || bind === 'ref' || bind === 'key') {
			delete bindings[bind];
		}
	});

	const rootProps = getRootProps(props);
	const isComponent = name.startsWith('DB');

	const componentProps = Object.entries(properties)
		.map(
			([key, value]) => `
		${key}="${value}"`
		)
		.join('');

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
	const connect = connectId
		? `
	<#if wc>
data-connect-id="${connectId}"
</#if>`
		: '';

	return `
${getBindingTemplate(node)}
<${tag}${bindingProps}${componentProps}${rootProps}${connect}>
	${getChildren({ nodes: children })}
</${tag}>`;
};

export const getChildren = ({
	nodes,
	props,
	connectId
}: {
	nodes: MitosisNode[];
	props?: string[];
	connectId?: string;
}): string => {
	let template = '';

	for (const node of nodes) {
		template += handleNode({ node, props, connectId });
	}

	return template;
};
