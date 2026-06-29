import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaSelectProps = {
	label?: string;
	showLabel?: boolean;
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
};

const selectProps: Record<string, FigmaProp> = {
	label: { type: 'string', key: 'Label' },
	showLabel: { type: 'boolean', key: 'Show Label' },
	variant: {
		type: 'enum',
		key: 'Variant',
		value: { Above: 'above', Floating: 'floating' }
	},
	required: { type: 'boolean', key: 'Required' },
	showRequiredAsterisk: { type: 'boolean', key: 'Show Required Asterisk' },
	disabled: { type: 'boolean', key: 'Disabled' },
	readonly: { type: 'boolean', key: 'Readonly' },
	validation: {
		type: 'enum',
		key: 'Validation',
		value: {
			'(Def) No Validation': 'no-validation',
			Valid: 'valid',
			Invalid: 'invalid'
		}
	},
	showIcon: { type: 'boolean', key: 'Show Icon' },
	showMessage: { type: 'boolean', key: 'Show Message' },
	icon: {
		type: 'conditionalProp',
		key: 'Icon',
		guardKey: 'Show Icon',
		attrName: 'icon'
	},
	placeholder: { type: 'string', key: 'Placeholder' },
	value: { type: 'string', key: 'Text' },
	message: {
		type: 'validationMessage',
		key: 'Text',
		conditionProp: 'validation',
		map: {
			invalid: 'invalidMessage',
			valid: 'validMessage',
			default: 'message'
		}
	}
};

export const selects: FigmaCodeConnect = {
	urls: [
		// Above Empty
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:5134',
		// Above Selected
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:25648',
		// Floating Empty
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:4692',
		// Floating Selected
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5527'
	],
	props: selectProps
};

export const aboveSelects = selects;
export const floatingSelects = selects;
