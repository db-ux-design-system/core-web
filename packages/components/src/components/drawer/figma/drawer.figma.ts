import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaDrawerProps = {
	direction?: string;
	rounded?: boolean;
	spacing?: string;
};

const drawerProps: Record<string, FigmaProp> = {
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

export const rightDrawers: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=1:24042'],
	props: drawerProps
};

export const leftDrawers: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=1:24813'],
	props: drawerProps
};

export const bottomDrawers: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=1:25261'],
	props: drawerProps
};

export const topDrawers: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=1:25709'],
	props: drawerProps
};

export const fullDrawers: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=1:26157'],
	props: {
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
	}
};
