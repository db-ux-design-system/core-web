// TODO: Remove this when https://github.com/BuilderIO/mitosis/pull/1789 is merged

/**
 *
 * @param node {import('@builder.io/mitosis').MitosisNode}
 */
const processNode = (node) => {
	if (!node || node['@type'] !== '@builder.io/mitosis/node') return;

	if (node.name.startsWith('DB')) {
		if (node.bindings['class']) {
			node.bindings['className'] = node.bindings['class'];
			delete node.bindings['class'];
		}
		if (node.properties['class']) {
			node.properties['className'] = node.properties['class'];
			delete node.properties['class'];
		}
	}

	node.children?.forEach(processNode);
};

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	json: {
		post: (json) => {
			json.children?.forEach(processNode);
			return json;
		}
	}
});
