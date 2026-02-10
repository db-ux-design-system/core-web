import buttonNoTextRequiresTooltip from './rules/button/button-no-text-requires-tooltip.js';
import buttonTypeRequired from './rules/button/button-type-required.js';
import textOrChildrenRequired from './rules/content/text-or-children-required.js';
import formLabelRequired from './rules/form/form-label-required.js';
import preferIconAttribute from './rules/icon/prefer-icon-attribute.js';
import noInteractiveTooltipContent from './rules/tooltip/no-interactive-tooltip-content.js';
import tooltipRequiresInteractiveParent from './rules/tooltip/tooltip-requires-interactive-parent.js';

const recommended = {
	rules: {
		'db-ux/button-no-text-requires-tooltip': 'error',
		'db-ux/button-type-required': 'error',
		'db-ux/form-label-required': 'error',
		'db-ux/prefer-icon-attribute': 'warn',
		'db-ux/text-or-children-required': 'error',
		'db-ux/no-interactive-tooltip-content': 'error',
		'db-ux/tooltip-requires-interactive-parent': 'error'
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
		'form-label-required': formLabelRequired,
		'prefer-icon-attribute': preferIconAttribute,
		'text-or-children-required': textOrChildrenRequired,
		'no-interactive-tooltip-content': noInteractiveTooltipContent,
		'tooltip-requires-interactive-parent': tooltipRequiresInteractiveParent
	},
	configs: {
		recommended
	}
};

export default plugin;
