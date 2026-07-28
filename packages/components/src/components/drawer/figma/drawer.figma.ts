import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaDrawerProps = {
	direction?: string;
	containerSize?: string;
	rounded?: boolean;
	showSpacing?: boolean;
	showBackdrop?: boolean;
	_drawerHeader?: any;
	_drawerFooter?: any;
};

const drawerProps: Record<string, FigmaProp> = {
	direction: {
		type: 'enum',
		key: 'Direction',
		value: {
			'to-left': 'to-left',
			'to-right': 'to-right',
			up: 'up',
			down: 'down'
		}
	},
	containerSize: {
		type: 'enum',
		key: 'Container Size',
		value: {
			'(Def) Small': 'small',
			Medium: 'medium',
			Large: 'large',
			Full: 'full'
		}
	},
	rounded: { type: 'boolean', key: 'Rounded' },
	showSpacing: { type: 'boolean', key: 'Show Spacing' },
	showBackdrop: { type: 'boolean', key: 'Show Backdrop' },
	_drawerHeader: {
		type: 'connectedInstances',
		filter: 'Drawer Header'
	},
	_drawerFooter: {
		type: 'connectedInstances',
		filter: 'Drawer Footer'
	}
	// TODO: Children slot removed — getSlot() crashes when connected instances
	// are placed inside the slot (Figma Code Connect limitation).
};

export const drawers: FigmaCodeConnect = {
	urls: [
		// (Def) Right
		'https://www.figma.com/design/FIGMA_FILE?node-id=37477:7499',
		// Left
		'https://www.figma.com/design/FIGMA_FILE?node-id=37477:7614',
		// Bottom
		'https://www.figma.com/design/FIGMA_FILE?node-id=37477:7729',
		// Top
		'https://www.figma.com/design/FIGMA_FILE?node-id=37477:7856'
	],
	props: drawerProps
};
