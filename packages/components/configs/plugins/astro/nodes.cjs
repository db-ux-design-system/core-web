const { getRootProps, isEvent } = require('./utils.cjs');

const replacePropsInCode = (code) => code.replaceAll(/props\.(\w+)/g, '$1');

/**
 *
 * @param node {import('@builder.io/mitosis').MitosisNode}
 * @returns {string}
 */
const handleShowNode = (node) => {
	const { bindings, children, meta } = node;
	const condition = replacePropsInCode(bindings.when.code);
	const elseCase = meta.else ? `\n: <>${handleNode(meta.else)}</>` : '';

	return `{${condition} ${elseCase ? '?' : '&&'} <>
		${getChildren(children)}
	</>${elseCase}}`;
};

/**
 *
 * @param node {import('@builder.io/mitosis').MitosisNode}
 * @returns {string}
 */
const handleForNode = (node) => {
	const { bindings, children, scope } = node;
	const each = bindings?.each?.code;

	if (!each) return '';

	return `{${each}.map((${scope.forName}) => (
		${getChildren(children)}
	))}`;
};

/**
 *
 * @param node {import('@builder.io/mitosis').MitosisNode}
 * @returns {string}
 */
const handleTextNode = (node) => {
	const { bindings } = node;
	const code = bindings._text.code;
	return code === 'props.children'
		? '<slot />'
		: code.includes('props.')
			? `{${replacePropsInCode(code)}}`
			: code;
};

/**
 *
 * @param node {import('@builder.io/mitosis').MitosisNode}
 * @returns {string}
 */
const handleSlotNode = (node) => {
	const { properties } = node;
	return `<slot name="${properties.name}" />`;
};

/**
 *
 * @param node {import('@builder.io/mitosis').MitosisNode}
 * @param [props] {string[]}
 * @param [root] {boolean}
 * @returns {string}
 */
const handleNode = (node, props, root) => {
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

	Object.keys(bindings).forEach((bind) => {
		if (isEvent(bind) || bind === 'ref' || bind === 'key') {
			delete bindings[bind];
		}
	});
	const isDbComponent = name.startsWith('DB');

	const rootProps = getRootProps(props);
	const componentProps = Object.entries(properties)
		.map(([key, value]) => {
			if (isDbComponent && key === 'class') {
				key = 'className';
			}
			return `${key}="${value}"`;
		})
		.join(' ');

	const bindingProps = Object.entries(bindings)
		.map(([key, value]) => {
			const code = replacePropsInCode(value.code);
			return `${key}={${code}}`;
		})
		.join(' ');

	const tag = isDbComponent ? name : name.toLowerCase();
	const allProps = [componentProps, bindingProps, rootProps]
		.filter(Boolean)
		.join(' ');

	const connectIdString = root
		? ' data-connect-id={wc ? connectId: undefined} '
		: '';
	return `<${tag}${connectIdString}${allProps ? ' ' + allProps : ''}>
	${getChildren(children)}
</${tag}>`;
};

/**
 *
 * @param nodes {import('@builder.io/mitosis').MitosisNode[]}
 * @param [props] {string[]}
 * @param [root] {boolean}
 * @returns {string}
 */
const getChildren = (nodes, props, root) => {
	return nodes.map((node) => handleNode(node, props, root)).join('\n');
};

module.exports = { getChildren };
