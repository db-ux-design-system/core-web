// TODO: Remove some of this when https://github.com/BuilderIO/mitosis/pull/1789 is merged
// TODO: Remove the rest when https://github.com/db-ux-design-system/core-web/pull/4639 is merged

const { getSlotKey } = require('../utils.cjs');
/**
 *
 * @param node {import('@builder.io/mitosis').MitosisNode}
 */
const processNode = (node) => {
	if (!node || node['@type'] !== '@builder.io/mitosis/node') return;

	if (node.slots) {
		if (
			node.name === 'DBNavigationItem' &&
			node.children.length === 1 &&
			node.children[0].properties['_text']
		) {
			const firstChild = node.children[0];

			node.children[0] = {
				'@type': '@builder.io/mitosis/node',
				name: 'ng-container',
				meta: {},
				scope: {},
				bindings: {},
				children: [firstChild],
				properties: {
					SLOT: 'navigation-content'
				}
			};
		}

		for (const [key, binding] of Object.entries(node.slots)) {
			const slotNode = {
				'@type': '@builder.io/mitosis/node',
				name: 'ng-container',
				meta: {},
				scope: {},
				bindings: {},
				children: binding,
				properties: {
					SLOT: getSlotKey(key)
				}
			};
			node.children.push(slotNode);
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
	},
	code: {
		post: (code, json) => {
			return code.replace(/SLOT="([^"]+)"/g, '$1');
		}
	}
});
