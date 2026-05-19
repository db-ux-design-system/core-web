import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaRadioProps = {
	label?: string;
	size?: string;
	required?: boolean;
	showRequiredAsterisk?: boolean;
	disabled?: boolean;
	checked?: boolean;
	validation?: string;
};

const radioProps: Record<string, FigmaProp> = {
	label: { type: 'textContent', key: '✏️ Label' },
	size: {
		type: 'enum',
		key: '💻 Size',
		value: { Medium: 'medium', Small: 'small' }
	},
	required: { type: 'boolean', key: 'Required' },
	showRequiredAsterisk: { type: 'boolean', key: '💻 Show Required Asterisk' },
	disabled: { type: 'boolean', key: 'Disabled' },
	checked: { type: 'boolean', key: 'Checked' },
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

export const radios: FigmaCodeConnect = {
	urls: [
		// Medium Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4473',
		// Medium Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21529',
		// Small Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=2277:4584',
		// Small Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21698'
	],
	props: radioProps
};
