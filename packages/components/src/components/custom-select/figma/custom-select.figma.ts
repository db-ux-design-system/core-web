import { FigmaCodeConnect } from '../../../shared/figma';

export type FigmaCustomSelectProps = {
	placement?: string;
	dropdownWidth?: string;
	formFieldWidth?: string;
	label?: string;
	showLabel?: boolean;
	multiple?: boolean;
	variant?: string;
	required?: boolean;
	showRequiredAsterisk?: boolean;
	disabled?: boolean;
	readonly?: boolean;
	validation?: string;
	showMessage?: boolean;
	showIcon?: boolean;
	placeholder?: string;
	icon?: string;
	value?: string;
	message?: string;
	showClearSelection?: boolean;
	clearSelectionText?: string;
	showLoading?: boolean;
	showNoResults?: boolean;
	showSelectAll?: boolean;
};

export const customSelects: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=19383:17780',
		'https://www.figma.com/design/FIGMA_FILE?node-id=19383:17804',
		'https://www.figma.com/design/FIGMA_FILE?node-id=19383-17828',
		'https://www.figma.com/design/FIGMA_FILE?node-id=19383-17852',
		'https://www.figma.com/design/FIGMA_FILE?node-id=19383-17876'
	],
	ccLayerNames: ['Custom Select Form Field', 'Custom Select Dropdown'],
	props: {
		placement: {
			type: 'enum',
			key: 'Placement',
			value: {
				'(Def) Bottom': 'bottom',
				'Bottom-Start': 'bottom-start',
				'Bottom-End': 'bottom-end'
			}
		},
		formFieldWidth: {
			type: 'enum',
			key: 'Form Field Width',
			value: {
				'(Def) Full': 'full',
				Auto: 'auto'
			}
		},
		variant: {
			type: 'enum',
			key: 'Variant',
			value: { Above: 'above', Floating: 'floating' }
		},
		required: {
			type: 'boolean',
			key: 'Required'
		},
		showClearSelection: { type: 'boolean', key: 'Show Clear Selection' },
		clearSelectionText: {
			type: 'string',
			key: 'Clear Selection Text',
			guardKeys: ['Show Clear Selection']
		},
		dropdownWidth: {
			type: 'enum',
			key: 'Dropdown Width',
			value: {
				Full: 'full',
				Auto: 'auto'
			}
		},
		// Custom Select Form Field
		showRequiredAsterisk: {
			type: 'boolean',
			key: 'Show Required Asterisk',
			layer: 'Custom Select Form Field'
		},
		disabled: {
			type: 'boolean',
			key: 'Disabled',
			layer: 'Custom Select Form Field'
		},
		validation: {
			type: 'enum',
			key: 'Validation',
			value: {
				'(Def) No Validation': 'no-validation',
				Valid: 'valid',
				Invalid: 'invalid'
			},
			layer: 'Custom Select Form Field'
		},
		showIcon: {
			type: 'boolean',
			key: 'Show Icon',
			layer: 'Custom Select Form Field'
		},
		showMessage: {
			type: 'boolean',
			key: 'Show Message',
			layer: 'Custom Select Form Field'
		},
		icon: {
			type: 'conditionalProp',
			key: 'Icon',
			guardKey: 'Show Icon',
			attrName: 'icon',
			layer: 'Custom Select Form Field'
		},
		placeholder: {
			type: 'string',
			key: 'Placeholder',
			layer: 'Custom Select Form Field'
		},
		value: {
			type: 'string',
			key: 'Text',
			layer: 'Custom Select Form Field'
		},
		message: {
			type: 'validationMessage',
			key: 'Text',
			conditionProp: 'validation',
			layer: 'Custom Select Form Field',
			map: {
				invalid: 'invalidMessage',
				valid: 'validMessage',
				default: 'message'
			}
		},
		label: {
			type: 'string',
			key: 'Label',
			layer: 'Custom Select Form Field',
			guardKeys: ['Show Label']
		},
		showLabel: {
			type: 'boolean',
			key: 'Show Label',
			layer: 'Custom Select Form Field'
		},
		// Custom Select Dropdown
		multiple: {
			type: 'boolean',
			key: 'Multiple',
			layer: 'Custom Select Dropdown'
		},
		showLoading: {
			type: 'boolean',
			key: 'Show Loading',
			layer: 'Custom Select Dropdown'
		},
		showSearch: {
			type: 'boolean',
			key: 'Show Search',
			layer: 'Custom Select Dropdown'
		},
		showSelectAll: {
			type: 'boolean',
			key: 'Show Select All',
			layer: 'Custom Select Dropdown'
		},
		showNoResults: {
			type: 'boolean',
			key: 'Show No Results',
			layer: 'Custom Select Dropdown'
		},
		options: {
			type: 'nestedInstancesToArray',
			filter: 'Custom Select List Item',
			props: {
				disabled: {
					type: 'boolean',
					key: 'Disabled'
				},
				showDivider: {
					type: 'boolean',
					key: 'Show Divider'
				},
				isGroupTitle: {
					type: 'boolean',
					key: 'Is Group Title'
				},
				value: { type: 'textContent', key: '✏️ Label' }
			}
		}
	}
};
