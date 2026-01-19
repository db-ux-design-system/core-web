// TODO: Move this into Mitosis directly

/**
 *
 * @param node {import('@builder.io/mitosis').MitosisNode}
 */
const processNode = (node) => {
	if (!node || node['@type'] !== '@builder.io/mitosis/node') return;

	if (node.slots) {
		for (const [key, binding] of Object.entries(node.slots)) {
			const slotNode = {
				'@type': '@builder.io/mitosis/node',
				name: 'template',
				meta: {},
				scope: {},
				bindings: {},
				children: binding,
				properties: {
					'v-slot': key.replace(/([A-Z])/g, '-$1').toLowerCase()
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
			return code.replace(/v-slot="([^"]+)"/g, 'v-slot:$1');
		}
	}
});
