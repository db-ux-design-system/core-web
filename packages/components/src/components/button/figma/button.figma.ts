import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaButtonProps = {
	text?: string;
	size?: string;
	width?: string;
	disabled?: boolean;
	noText?: boolean;
	showIconLeading?: boolean;
	showIconTrailing?: boolean;
	variant?: string;
	iconLeading?: string;
	iconTrailing?: string;
	icon?: string;
};

const defaultButtonProps: Record<string, FigmaProp> = {
	disabled: {
		type: 'enum',
		key: 'Disabled',
		value: {
			False: false,
			True: true
		}
	},
	noText: {
		type: 'enum',
		key: '💻 No Text',
		value: {
			False: false,
			True: true
		}
	},
	size: {
		type: 'enum',
		key: 'Size',
		value: {
			Small: 'small',
			'(Def) Medium': 'medium'
		}
	},
	text: { type: 'string', key: '✏️ Text' },
	variant: {
		type: 'enum',
		key: '💻 Variant',
		value: {
			Brand: 'brand',
			Ghost: 'ghost',
			Filled: 'filled',
			Outlined: 'outlined'
		}
	},
	width: {
		type: 'enum',
		key: 'Width',
		value: {
			'(Def) Auto': 'auto',
			Full: 'full'
		}
	}
};

const noTextButtonProps: Record<string, FigmaProp> = {
	...defaultButtonProps,
	icon: {
		type: 'enum',
		key: 'Size',
		value: {
			Small: { type: 'instance', key: '🔄 Icon Small' },
			'(Def) Medium': { type: 'instance', key: '🔄 Icon Medium' }
		}
	}
};

const textButtonProps: Record<string, FigmaProp> = {
	...defaultButtonProps,
	showIconLeading: { type: 'boolean', key: 'Show Icon Leading' },
	showIconTrailing: { type: 'boolean', key: 'Show Icon Trailing' },
	iconLeading: {
		type: 'enum',
		key: 'Size',
		value: {
			Small: { type: 'instance', key: '🔄 Icon Leading Small' },
			'(Def) Medium': { type: 'instance', key: '🔄 Icon Leading Medium' }
		}
	},
	iconTrailing: {
		type: 'enum',
		key: 'Size',
		value: {
			Small: { type: 'instance', key: '🔄 Icon Trailing Small' },
			'(Def) Medium': { type: 'instance', key: '🔄 Icon Trailing Medium' }
		}
	}
};

export const textButtons: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436-13065',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436-13355',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436-13645',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436-13935'
	],
	props: textButtonProps
};

export const noTextButtons: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436-13210',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436-13500',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436-13790',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436-14080'
	],
	props: noTextButtonProps
};
