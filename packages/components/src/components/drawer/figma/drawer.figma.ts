import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaDrawerProps = {
	direction?: string;
	size?: string;
	rounded?: boolean;
	spacing?: string;
};

const drawerProps: Record<string, FigmaProp> = {
	direction: {
		type: 'enum',
		key: '💻 Direction',
		value: {
			Right: 'right',
			Left: 'left',
			Bottom: 'up',
			Top: 'down'
		}
	},
	size: {
		type: 'enum',
		key: '💻 Size',
		value: {
			Medium: 'medium',
			Full: 'full'
		}
	},
	rounded: {
		type: 'enum',
		key: 'Rounded',
		value: {
			False: false,
			True: true
		}
	},
	spacing: {
		type: 'enum',
		key: 'Spacing',
		value: {
			'(Def) Medium': 'medium',
			Small: 'small',
			Large: 'large',
			None: 'none'
		}
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
