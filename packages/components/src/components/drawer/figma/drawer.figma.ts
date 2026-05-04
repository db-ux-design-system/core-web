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
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24043',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24049',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24055',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24061',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24066',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24072',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24078',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24084'
	],
	props: drawerProps
};

export const leftDrawers: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24860',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24866',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24872',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24878',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24883',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24889',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24895',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:24901'
	],
	props: drawerProps
};

export const bottomDrawers: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25354',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25360',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25366',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25372',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25377',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25383',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25389',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25395'
	],
	props: drawerProps
};

export const topDrawers: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25848',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25854',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25860',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25866',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25871',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25877',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25883',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:25889'
	],
	props: drawerProps
};

export const fullDrawers: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:26342',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:26346',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:26350',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:26354'
	],
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
