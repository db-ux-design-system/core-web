import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaDrawerProps = {
	direction?: string;
	containerSize?: string;
	rounded?: boolean;
	showSpacing?: boolean;
	backdrop?: string;
	_drawerHeader?: any;
	_drawerFooter?: any;
	_children?: any;
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
	backdrop: {
		type: 'enum',
		key: 'Backdrop',
		value: {
			none: 'none',
			strong: 'strong',
			weak: 'weak',
			invisible: 'invisible'
		}
	},
	_drawerHeader: {
		type: 'nestedConnectedInstances',
		filter: 'DBDrawerHeader'
	},
	_drawerFooter: {
		type: 'nestedConnectedInstances',
		filter: 'DBDrawerFooter'
	},
	_children: {
		type: 'children',
		key: 'Children'
	}
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
