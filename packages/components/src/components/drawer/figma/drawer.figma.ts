import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaDrawerProps = {
	direction?: string;
	size?: string;
	rounded?: boolean;
	spacing?: string;
	backdrop?: boolean;
	open?: boolean;
	drawerHeader?: string;
	_children?: any;
};

const drawerProps: Record<string, FigmaProp> = {
	direction: {
		type: 'enum',
		key: 'Direction',
		value: { Right: 'right', Left: 'left', Bottom: 'up', Top: 'down' }
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
	// TODO: Backdrop will be refactored by Design
	backdrop: { type: 'boolean', key: 'Backdrop' },
	open: { type: 'boolean', key: 'Open' },
	drawerHeader: {
		type: 'string',
		key: 'Text',
		layer: '↳ Drawer HEADER'
	},

	// Renders all children inside the card's Children slot.
	// Connected instances render via their own Code Connect template.
	// Non-connected wrapper frames render as plain <div> elements.
	_children: {
		type: 'children',
		key: 'Children'
	}
};

export const drawers: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24042',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24813',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25261',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25709',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:26157'
	],
	props: drawerProps
};
