import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaInputProps = {
	variant?: string;
	label?: string;
	placeholder?: string;
	required?: boolean;
	showRequiredAsterisk?: boolean;
	disabled?: boolean;
	validation?: string;
	showIconLeading?: boolean;
	showIconTrailing?: boolean;
	iconLeading?: string;
	iconTrailing?: string;
	showMessage?: boolean;
	message?: string;
};

const inputProps: Record<string, FigmaProp> = {
	variant: {
		type: 'enum',
		key: 'Variant',
		value: { Above: 'above', Floating: 'floating' }
	},
	label: { type: 'string', key: 'Label' },
	placeholder: { type: 'string', key: 'Placeholder' },
	required: { type: 'boolean', key: 'Required' },
	showRequiredAsterisk: { type: 'boolean', key: 'Show Required Asterisk' },
	disabled: { type: 'boolean', key: 'Disabled' },
	validation: {
		type: 'enum',
		key: 'Validation',
		value: {
			'(Def) No Validation': 'no-validation',
			Invalid: 'invalid',
			Valid: 'valid'
		}
	},
	showIconLeading: { type: 'boolean', key: 'Show Icon Leading' },
	showIconTrailing: { type: 'boolean', key: 'Show Icon Trailing' },
	iconLeading: {
		type: 'conditionalProp',
		key: 'Icon Leading',
		guardKey: 'Show Icon Leading',
		attrName: 'icon'
	},
	iconTrailing: {
		type: 'conditionalProp',
		key: 'Icon Trailing',
		guardKey: 'Show Icon Trailing',
		attrName: 'iconTrailing'
	},
	showMessage: { type: 'boolean', key: 'Show Message' },
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

export const inputs: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:4310',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:8795'
	],
	props: inputProps
};
