import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaSwitchProps = {
	label?: string;
	size?: string;
	variant?: string;
	required?: boolean;
	showRequiredAsterisk?: boolean;
	disabled?: boolean;
	checked?: boolean;
	visualAid?: boolean;
	iconLeading?: string;
	iconTrailing?: string;
	validation?: string;
	showMessage?: boolean;
	message?: string;
};

const switchProps: Record<string, FigmaProp> = {
	label: { type: 'textContent', key: '✏️ Label' },
	size: {
		type: 'enum',
		key: '💻 Size',
		value: { Medium: 'medium', Small: 'small' }
	},
	variant: {
		type: 'enum',
		key: '💻 Variant',
		value: { Trailing: 'trailing', Leading: 'leading' }
	},
	required: { type: 'boolean', key: 'Required' },
	showRequiredAsterisk: { type: 'boolean', key: '💻 Show Required Asterisk' },
	disabled: { type: 'boolean', key: 'Disabled' },
	checked: { type: 'boolean', key: 'Checked' },
	visualAid: { type: 'boolean', key: 'Visual Aid' },
	iconLeading: {
		type: 'conditionalProp',
		key: '🔄 Icon Leading',
		guardKey: 'Visual Aid',
		attrName: 'iconLeading'
	},
	iconTrailing: {
		type: 'conditionalProp',
		key: '🔄 Icon Trailing',
		guardKey: 'Visual Aid',
		attrName: 'iconTrailing'
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

export const switches: FigmaCodeConnect = {
	urls: [
		// Medium Trailing Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:25045',
		// Medium Trailing Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:22590',
		// Medium Leading Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=25185:23452',
		// Medium Leading Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=25185:23940',
		// Small Trailing Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=25185:2705',
		// Small Trailing Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=25185:2989',
		// Small Leading Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=25204:19990',
		// Small Leading Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=25204:20475'
	],
	props: switchProps
};

export const mediumLeadingSwitches = switches;
export const mediumTrailingSwitches = switches;
export const smallLeadingSwitches = switches;
export const smallTrailingSwitches = switches;
