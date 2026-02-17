// TODO: Remove this when https://github.com/BuilderIO/mitosis/pull/1789 is merged

const { getSlotKey } = require('../utils.cjs');
/**
 *
 * @param node {import('@builder.io/mitosis').MitosisNode}
 */
const processNode = (node) => {
	if (!node || node['@type'] !== '@builder.io/mitosis/node') return;

	if (node.slots) {
		for (const [key, binding] of Object.entries(node.slots)) {
			binding.forEach((bind) => {
				const newChildren = [];
				if (bind.name === 'Fragment') {
					newChildren.push(...bind.children);
				} else {
					newChildren.push(bind);
				}

				node.children.push(
					...newChildren.map((bind) => ({
						...bind,
						properties: {
							...bind.properties,
							slot: getSlotKey(key)
						}
					}))
				);
			});

			delete node.bindings[key];
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
