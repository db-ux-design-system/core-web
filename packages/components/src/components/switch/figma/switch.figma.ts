import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaSwitchProps = {
	disabled?: boolean;
	checked?: boolean;
	validation?: string;
};

const switchProps: Record<string, FigmaProp> = {
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

export const mediumTrailingSwitches: FigmaCodeConnect = {
	urls: [
		// Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:25045',
		// Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:22590'
	],
	props: switchProps
};

export const mediumLeadingSwitches: FigmaCodeConnect = {
	urls: [
		// Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=25185:23452',
		// Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=25185:23940'
	],
	props: switchProps
};

export const smallTrailingSwitches: FigmaCodeConnect = {
	urls: [
		// Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=25185:2705',
		// Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=25185:2989'
	],
	props: switchProps
};

export const smallLeadingSwitches: FigmaCodeConnect = {
	urls: [
		// Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=25204:19990',
		// Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=25204:20475'
	],
	props: switchProps
};
