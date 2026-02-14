import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';
import { MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';

const FORM_COMPONENTS = [
	'DBInput',
	'DBTextarea',
	'DBSelect',
	'DBCustomSelect',
	'DBCheckbox',
	'DBRadio',
	'DBSwitch'
];

const COMPONENTS_WITH_CHILDREN_LABEL = ['DBCheckbox', 'DBRadio', 'DBSwitch'];

export default {
	meta: {
		type: 'problem',
		docs: {
			description:
				'Ensure form components have a label attribute for accessibility',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#form-label-required'
		},
		messages: {
			[MESSAGE_IDS.FORM_LABEL_REQUIRED]: MESSAGES.FORM_LABEL_REQUIRED
		},
		schema: []
	},
	create(context: any) {
		const checkFormComponent = (node: any) => {
			const openingElement = node.openingElement || node;

			const component = FORM_COMPONENTS.find((comp) =>
				isDBComponent(openingElement, comp)
			);
			if (!component) return;

			const label = getAttributeValue(openingElement, 'label');
			const hasChildren = node.children?.some(
				(child: any) =>
					(child.type === 'JSXText' && child.value.trim() !== '') ||
					(child.type === 'VText' && child.value.trim() !== '')
			);

			const canUseChildren =
				COMPONENTS_WITH_CHILDREN_LABEL.includes(component);

			if (!label && !(canUseChildren && hasChildren)) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.FORM_LABEL_REQUIRED,
					data: { component }
				});
			}
		};

		return defineTemplateBodyVisitor(
			context,
			{ VElement: checkFormComponent, Element: checkFormComponent },
			{ JSXElement: checkFormComponent }
		);
	}
};
