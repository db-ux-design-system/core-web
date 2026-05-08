import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaTextareaProps = {
	variant?: string;
	label?: string;
	placeholder?: string;
	required?: boolean;
	showRequiredAsterisk?: boolean;
	disabled?: boolean;
	validation?: string;
	showMessage?: boolean;
	message?: string;
};

const textareaProps: Record<string, FigmaProp> = {
	variant: {
		type: 'enum',
		key: '💻 Variant',
		value: { Above: 'above', Floating: 'floating' }
	},
	label: { type: 'string', key: '✏️ Label' },
	placeholder: { type: 'string', key: '✏️ Placeholder' },
	required: { type: 'boolean', key: 'Required' },
	showRequiredAsterisk: { type: 'boolean', key: '💻 Show Required Asterisk' },
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
	showMessage: { type: 'boolean', key: 'Show Message' },
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

export const textareas: FigmaCodeConnect = {
	urls: [
		// Above Empty
		'https://www.figma.com/design/FIGMA_FILE?node-id=3895:4642',
		// Above Filled
		'https://www.figma.com/design/FIGMA_FILE?node-id=3714:7493',
		// Above Active
		'https://www.figma.com/design/FIGMA_FILE?node-id=3714:6941',
		// Floating Empty
		'https://www.figma.com/design/FIGMA_FILE?node-id=3714:8045',
		// Floating Filled
		'https://www.figma.com/design/FIGMA_FILE?node-id=3714:8838',
		// Floating Active
		'https://www.figma.com/design/FIGMA_FILE?node-id=3714:8597'
	],
	props: textareaProps
};
