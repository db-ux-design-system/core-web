import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaCheckboxProps = {
	label?: string;
	disabled?: boolean;
	checked?: boolean;
	indeterminate?: boolean;
	validation?: string;
};

const checkboxProps: Record<string, FigmaProp> = {
	label: { type: 'textContent', key: '✏️ Label' },
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
	}
};

export const mediumCheckboxes: FigmaCodeConnect = {
	urls: [
		// Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=2068:3423',
		// Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:19709'
	],
	props: checkboxProps
};

export const smallCheckboxes: FigmaCodeConnect = {
	urls: [
		// Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=2068:3548',
		// Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:19958'
	],
	props: checkboxProps
};
