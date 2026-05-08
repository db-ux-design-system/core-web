import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaCheckboxProps = {
	label?: string;
	size?: string;
	disabled?: boolean;
	checked?: boolean;
	indeterminate?: boolean;
	validation?: string;
	message?: string;
};

const checkboxProps: Record<string, FigmaProp> = {
	label: { type: 'textContent', key: '✏️ Label' },
	size: {
		type: 'enum',
		key: '💻 Size',
		value: {
			Medium: 'medium',
			Small: 'small'
		}
	},
	disabled: {
		type: 'enum',
		key: 'Disabled',
		value: {
			False: false,
			True: true
		}
	},
	checked: {
		type: 'enum',
		key: 'Checked',
		value: {
			False: false,
			True: true
		}
	},
	indeterminate: {
		type: 'enum',
		key: 'Indeterminate',
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
			Valid: 'valid',
			Invalid: 'invalid'
		}
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
