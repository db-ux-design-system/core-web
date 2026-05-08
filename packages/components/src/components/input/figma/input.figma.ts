import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaInputProps = {
	variant?: string;
	label?: string;
	placeholder?: string;
	disabled?: boolean;
	validation?: string;
	showIconLeading?: boolean;
	showIconTrailing?: boolean;
	iconLeading?: string;
	iconTrailing?: string;
	message?: string;
};

const inputProps: Record<string, FigmaProp> = {
	variant: {
		type: 'enum',
		key: '💻 Variant',
		value: {
			Above: 'above',
			Floating: 'floating'
		}
	},
	label: { type: 'string', key: '✏️ Label' },
	placeholder: { type: 'string', key: '✏️ Placeholder' },
	disabled: {
		type: 'enum',
		key: 'Disabled',
		value: {
			False: false,
			True: true
		}
	},
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
		key: '🔄 Icon Leading',
		guardProp: 'showIconLeading',
		attrName: 'icon'
	},
	iconTrailing: {
		type: 'conditionalProp',
		key: '🔄 Icon Trailing',
		guardProp: 'showIconTrailing',
		attrName: 'iconTrailing'
	},
	message: {
		type: 'validationMessage',
		key: '✏️ Text',
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
