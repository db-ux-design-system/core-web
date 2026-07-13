import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaDrawerProps = {
	direction?: string;
	size?: string;
	rounded?: boolean;
	spacing?: string;
	showBackdrop?: boolean;
	drawerHeader?: string;
	showText?: boolean;
	_children?: any;
};

const drawerProps: Record<string, FigmaProp> = {
	direction: {
		type: 'enum',
		key: 'Direction',
		value: { Right: 'to-left', Left: 'to-right', Bottom: 'up', Top: 'down' }
	},
	size: {
		type: 'enum',
		key: 'Size',
		value: { Medium: 'medium', Full: 'full' }
	},
	rounded: { type: 'boolean', key: 'Rounded' },
	spacing: {
		type: 'enum',
		key: 'Spacing',
		value: {
			'(Def) Medium': 'medium',
			Small: 'small',
			Large: 'large',
			None: 'none'
		}
	},
	showBackdrop: { type: 'boolean', key: 'Show Backdrop' },
	drawerHeader: {
		type: 'string',
		key: '✏️ Text',
		layer: '↳ Drawer HEADER'
	},
	showText: {
		type: 'boolean',
		key: 'Show Text',
		layer: '↳ Drawer HEADER'
	},
	_children: {
		type: 'children',
		key: 'Children'
	}
};

export const drawers: FigmaCodeConnect = {
	urls: [
		// (Def) Right
		'https://www.figma.com/design/FIGMA_FILE?node-id=35452:6313',
		// Left
		'https://www.figma.com/design/FIGMA_FILE?node-id=35453:7783',
		// Bottom
		'https://www.figma.com/design/FIGMA_FILE?node-id=35453:8027',
		// Top
		'https://www.figma.com/design/FIGMA_FILE?node-id=35453:8244',
		// Full
		'https://www.figma.com/design/FIGMA_FILE?node-id=35471:17307'
	],
	props: drawerProps
};
