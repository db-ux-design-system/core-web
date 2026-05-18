import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaButtonProps = {
	text?: string;
	size?: string;
	width?: string;
	disabled?: boolean;
	noText?: boolean;
	variant?: string;
	showIconLeading?: boolean;
	showIconTrailing?: boolean;
	iconLeading?: string;
	iconTrailing?: string;
};

export type FigmaIconButtonProps = {
	size?: string;
	width?: string;
	disabled?: boolean;
	noText?: boolean;
	variant?: string;
	icon?: string;
};

const disabledProp: FigmaProp = { type: 'boolean', key: 'Disabled' };

const sizeProp: FigmaProp = {
	type: 'enum',
	key: 'Size',
	value: { Small: 'small', '(Def) Medium': 'medium' }
};

const variantProp: FigmaProp = {
	type: 'enum',
	key: 'Variant',
	value: {
		Brand: 'brand',
		Ghost: 'ghost',
		Filled: 'filled',
		Outlined: 'outlined'
	}
};

const widthProp: FigmaProp = {
	type: 'enum',
	key: 'Width',
	value: { '(Def) Auto': 'auto', Full: 'full' }
};

const buttonProps: Record<string, FigmaProp> = {
	disabled: disabledProp,
	noText: { type: 'boolean', key: 'No Text' },
	size: sizeProp,
	text: { type: 'textContent', key: 'Text' },
	variant: variantProp,
	width: widthProp,
	showIconLeading: { type: 'boolean', key: 'Show Icon Leading' },
	showIconTrailing: { type: 'boolean', key: 'Show Icon Trailing' },
	iconLeading: {
		type: 'enum',
		key: 'Size',
		guardKey: 'Show Icon Leading',
		value: {
			Small: { type: 'iconSwap', key: 'Icon Leading Small' },
			'(Def) Medium': { type: 'iconSwap', key: 'Icon Leading Medium' }
		}
	},
	iconTrailing: {
		type: 'enum',
		key: 'Size',
		guardKey: 'Show Icon Trailing',
		value: {
			Small: { type: 'iconSwap', key: 'Icon Trailing Small' },
			'(Def) Medium': { type: 'iconSwap', key: 'Icon Trailing Medium' }
		}
	},
	icon: {
		type: 'enum',
		key: 'Size',
		value: {
			Small: { type: 'iconSwap', key: 'Icon Small' },
			'(Def) Medium': { type: 'iconSwap', key: 'Icon Medium' }
		}
	}
};

export const buttons: FigmaCodeConnect = {
	urls: [
		// Text variants
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436-13065',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436-13355',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436-13645',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436-13935',
		// No-text icon variants
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436-13210',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436-13500',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436-13790',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436-14080'
	],
	props: buttonProps
};
