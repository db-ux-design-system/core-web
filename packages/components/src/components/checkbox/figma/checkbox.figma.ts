import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaCheckboxProps = {
	label?: string;
	showLabel?: boolean;
	size?: string;
	required?: boolean;
	showRequiredAsterisk?: boolean;
	disabled?: boolean;
	checked?: boolean;
	indeterminate?: boolean;
	validation?: string;
	showMessage?: boolean;
	message?: string;
};

const checkboxProps: Record<string, FigmaProp> = {
	label: { type: 'textContent', key: 'Label' },
	showLabel: { type: 'boolean', key: 'Show Label' },
	size: {
		type: 'enum',
		key: 'Size',
		value: { Medium: 'medium', Small: 'small' }
	},
	required: { type: 'boolean', key: 'Required' },
	showRequiredAsterisk: { type: 'boolean', key: 'Show Required Asterisk' },
	disabled: { type: 'boolean', key: 'Disabled' },
	checked: { type: 'boolean', key: 'Checked' },
	indeterminate: { type: 'boolean', key: 'Indeterminate' },
	validation: {
		type: 'enum',
		key: 'Validation',
		value: {
			'(Def) No Validation': 'no-validation',
			Valid: 'valid',
			Invalid: 'invalid'
		}
	},
	message: {
		type: 'validationMessage',
		key: 'Text',
		conditionProp: 'validation',
		map: {
			invalid: 'invalidMessage',
			valid: 'validMessage',
			default: 'message'
		}
	},
	showMessage: { type: 'boolean', key: 'Show Message' }
};

export const checkboxes: FigmaCodeConnect = {
	urls: [
		// Medium Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=2068:3423',
		// Medium Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:19709',
		// Small Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=2068:3548',
		// Small Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:19958'
	],
	props: checkboxProps
};
