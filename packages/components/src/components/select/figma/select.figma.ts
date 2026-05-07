import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaSelectProps = {
	disabled?: boolean;
	validation?: string;
	showIcon?: boolean;
};

const selectProps: Record<string, FigmaProp> = {
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
			Valid: 'valid',
			Invalid: 'invalid'
		}
	},
	showIcon: {
		type: 'boolean',
		key: 'Show Icon'
	}
};

export const aboveSelects: FigmaCodeConnect = {
	urls: [
		// Empty
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:5134',
		// Selected
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:25648'
	],
	props: selectProps
};

export const floatingSelects: FigmaCodeConnect = {
	urls: [
		// Empty
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:4692',
		// Selected
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5527'
	],
	props: selectProps
};
