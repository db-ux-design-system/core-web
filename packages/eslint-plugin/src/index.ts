import noNestedAccordion from './rules/accordion/no-nested-accordion.js';
import accordionItemHeadlineRequired from './rules/accordion/accordion-item-headline-required.js';
import badgeCornerPlacementRules from './rules/badge/badge-corner-placement-rules.js';
import badgeNoInlineInInteractive from './rules/badge/badge-no-inline-in-interactive.js';
import buttonNoTextRequiresTooltip from './rules/button/button-no-text-requires-tooltip.js';
import buttonSingleIconAttribute from './rules/button/button-single-icon-attribute.js';
import buttonTypeRequired from './rules/button/button-type-required.js';
import closeButtonTextRequired from './rules/close-button/close-button-text-required.js';
import textOrChildrenRequired from './rules/content/text-or-children-required.js';
import formLabelRequired from './rules/form/form-label-required.js';
import formValidationMessageRequired from './rules/form/form-validation-message-required.js';
import headerBurgerMenuLabelRequired from './rules/header/header-burger-menu-label-required.js';
import preferIconAttribute from './rules/icon/prefer-icon-attribute.js';
import inputFileTypeValidation from './rules/input/input-file-type-validation.js';
import inputTypeRequired from './rules/input/input-type-required.js';
import linkExternalSecurity from './rules/link/link-external-security.js';
import navigationItemBackButtonTextRequired from './rules/navigation/navigation-item-back-button-text-required.js';
import customSelectTagsRemoveTextRequired from './rules/select/custom-select-tags-remove-text-required.js';
import selectRequiresOptions from './rules/select/select-requires-options.js';
import tagRemovableRemoveButtonRequired from './rules/tag/tag-removable-remove-button-required.js';
import noInteractiveTooltipContent from './rules/tooltip/no-interactive-tooltip-content.js';
import tooltipRequiresInteractiveParent from './rules/tooltip/tooltip-requires-interactive-parent.js';
import testAngular from './rules/test-angular.js';

const recommended = {
	rules: {
		'db-ux/button-no-text-requires-tooltip': 'error',
		'db-ux/button-type-required': 'error',
		'db-ux/button-single-icon-attribute': 'error',
		'db-ux/form-label-required': 'error',
		'db-ux/form-validation-message-required': 'error',
		'db-ux/prefer-icon-attribute': 'warn',
		'db-ux/text-or-children-required': 'error',
		'db-ux/no-interactive-tooltip-content': 'error',
		'db-ux/tooltip-requires-interactive-parent': 'error',
		'db-ux/no-nested-accordion': 'error',
		'db-ux/accordion-item-headline-required': 'error',
		'db-ux/badge-corner-placement-rules': 'error',
		'db-ux/badge-no-inline-in-interactive': 'error',
		'db-ux/link-external-security': 'warn',
		'db-ux/select-requires-options': 'error',
		'db-ux/custom-select-tags-remove-text-required': 'error',
		'db-ux/close-button-text-required': 'error',
		'db-ux/header-burger-menu-label-required': 'error',
		'db-ux/navigation-item-back-button-text-required': 'error',
		'db-ux/tag-removable-remove-button-required': 'error',
		'db-ux/input-type-required': 'warn',
		'db-ux/input-file-type-validation': 'error'
	}
};

const plugin = {
	meta: {
		name: '@db-ux/eslint-plugin',
		version: '0.0.1'
	},
	rules: {
		'button-no-text-requires-tooltip': buttonNoTextRequiresTooltip,
		'button-type-required': buttonTypeRequired,
		'button-single-icon-attribute': buttonSingleIconAttribute,
		'form-label-required': formLabelRequired,
		'form-validation-message-required': formValidationMessageRequired,
		'prefer-icon-attribute': preferIconAttribute,
		'text-or-children-required': textOrChildrenRequired,
		'no-interactive-tooltip-content': noInteractiveTooltipContent,
		'tooltip-requires-interactive-parent': tooltipRequiresInteractiveParent,
		'no-nested-accordion': noNestedAccordion,
		'accordion-item-headline-required': accordionItemHeadlineRequired,
		'badge-corner-placement-rules': badgeCornerPlacementRules,
		'badge-no-inline-in-interactive': badgeNoInlineInInteractive,
		'link-external-security': linkExternalSecurity,
		'select-requires-options': selectRequiresOptions,
		'custom-select-tags-remove-text-required':
			customSelectTagsRemoveTextRequired,
		'close-button-text-required': closeButtonTextRequired,
		'header-burger-menu-label-required': headerBurgerMenuLabelRequired,
		'navigation-item-back-button-text-required':
			navigationItemBackButtonTextRequired,
		'tag-removable-remove-button-required':
			tagRemovableRemoveButtonRequired,
		'input-type-required': inputTypeRequired,
		'input-file-type-validation': inputFileTypeValidation,
		'test-angular': testAngular
	},
	configs: {
		recommended
	}
};

export default plugin;
