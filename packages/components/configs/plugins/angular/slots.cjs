// TODO: Remove some of this when https://github.com/BuilderIO/mitosis/pull/1789 is merged
// TODO: Remove the rest when https://github.com/db-ux-design-system/core-web/pull/4639 is merged

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
					SLOT: key.replace(/([A-Z])/g, '-$1').toLowerCase()
				}
			};
			node.children.push(slotNode);
			delete node.bindings[key];
		}
	}

	node.children?.forEach(processNode);
};

const headerDirectives = ['MetaNavigation', 'Navigation', 'SecondaryAction'];

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	json: {
		post: (json) => {
			if (json.name.startsWith('Header')) {
				for (const directive of headerDirectives) {
					json.imports.push({
						path: `../${directive}.directive`,
						imports: {
							[`${directive}Directive`]: `${directive}Directive`
						},
						importKind: 'value'
					});
				}
			}
			if (
				['Header', 'Navigation'].some((exampleName) =>
					json.name.startsWith(exampleName)
				)
			) {
				json.imports.push({
					path: `../${json.name.startsWith('NavigationItem') ? '' : '../navigation-item/'}NavigationContent.directive`,
					imports: {
						NavigationContentDirective: `NavigationContentDirective`
					},
					importKind: 'value'
				});
			}

			json.children?.forEach(processNode);
			return json;
		}
	},
	code: {
		post: (code, json) => {
			if (json.name.startsWith('Header')) {
				code = code
					.replace(
						'imports: [',
						`imports: [
					${headerDirectives.join('Directive,')}Directive,`
					)
					.replaceAll(
						'<db-navigation\n',
						'<db-navigation *dbNavigation\n'
					);
			}
			if (
				['Header', 'Navigation'].some((exampleName) =>
					json.name.startsWith(exampleName)
				)
			) {
				code = code
					.replace(
						'imports: [',
						`imports: [
					NavigationContentDirective,`
					)
					.replaceAll(
						'a href="#"',
						'a href="#" *dbNavigationContent'
					);
			}
			return code
				.replace(/SLOT="([^"]+)"/g, '$1')
				.replaceAll(
					'<ng-container meta-navigation',
					'<ng-container *dbMetaNavigation'
				)
				.replaceAll(
					'<ng-container secondary-action',
					'<ng-container *dbSecondaryAction'
				)
				.replaceAll(
					'<ng-container navigation-content',
					'<ng-container *dbNavigationContent'
				);
		}
	}
});
