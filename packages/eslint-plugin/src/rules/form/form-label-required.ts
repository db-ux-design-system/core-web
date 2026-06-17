import { MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import {
	createAngularVisitors,
	defineTemplateBodyVisitor,
	getAttributeValue,
	isDBComponent
} from '../../shared/utils.js';

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
		type: 'problem' as const,
		docs: {
			description:
				'Ensure form components have a label attribute for accessibility',
			url: 'https://github.com/db-ux-design-system/core-web/blob/main/packages/eslint-plugin/README.md#form-label-required'
		},
		messages: {
			missingLabel: MESSAGES.FORM_LABEL_REQUIRED
		},
		schema: []
	},
	create(context: any) {
		const angularHandler = (node: any, parserServices: any) => {
			const componentName = node.name;
			const component = FORM_COMPONENTS.find((comp) =>
				isDBComponent(node, comp)
			);
			if (!component) return;

			const label = getAttributeValue(node, 'label');
			const hasChildren = node.children?.some(
				(child: any) =>
					child.type === 'Text' && child.value.trim() !== ''
			);

			const canUseChildren =
				COMPONENTS_WITH_CHILDREN_LABEL.includes(component);

			if (
				(label === null || label === '') &&
				!(canUseChildren && hasChildren)
			) {
				const loc = parserServices.convertNodeSourceSpanToLoc(
					node.sourceSpan
				);
				context.report({
					loc,
					messageId: MESSAGE_IDS.FORM_LABEL_REQUIRED,
					data: { component: componentName }
				});
			}
		};

		const angularVisitors: any = {};
		for (const comp of FORM_COMPONENTS) {
			const visitors = createAngularVisitors(
				context,
				comp,
				angularHandler
			);
			if (visitors) {
				Object.assign(angularVisitors, visitors);
			}
		}
		if (Object.keys(angularVisitors).length > 0) return angularVisitors;

		const checkFormComponent = (node: any) => {
			const openingElement = node.openingElement || node;

			const component = FORM_COMPONENTS.find((comp) =>
				isDBComponent(openingElement, comp)
			);
			if (!component) return;

			const componentName =
				openingElement.name?.name || openingElement.rawName;

			const label = getAttributeValue(openingElement, 'label');
			const hasChildren = node.children?.some(
				(child: any) =>
					(child.type === 'JSXText' && child.value.trim() !== '') ||
					(child.type === 'VText' && child.value.trim() !== '') ||
					(child.type === 'Text' && child.value.trim() !== '')
			);

			const canUseChildren =
				COMPONENTS_WITH_CHILDREN_LABEL.includes(component);

			if (
				(label === null || label === '') &&
				!(canUseChildren && hasChildren)
			) {
				context.report({
					node: openingElement,
					messageId: MESSAGE_IDS.FORM_LABEL_REQUIRED,
					data: { component: componentName }
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
