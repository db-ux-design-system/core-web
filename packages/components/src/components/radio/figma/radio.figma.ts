import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaRadioProps = {
	disabled?: boolean;
	checked?: boolean;
	validation?: string;
};

const radioProps: Record<string, FigmaProp> = {
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

export const mediumRadios: FigmaCodeConnect = {
	urls: [
		// Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4473',
		// Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21529'
	],
	props: radioProps
};

export const smallRadios: FigmaCodeConnect = {
	urls: [
		// Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=2277:4584',
		// Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21698'
	],
	props: radioProps
};
