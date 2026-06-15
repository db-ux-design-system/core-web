import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaControlPanelDesktopProps = {
	width?: string;
	orientation?: string;
	_children?: any;
};

const controlPanelDesktopProps: Record<string, FigmaProp> = {
	width: {
		type: 'enum',
		key: 'Width',
		value: {
			'(Def) Full': 'full',
			'1024': 'medium',
			'1440': 'large'
		}
	},
	orientation: {
		type: 'enum',
		key: 'Orientation',
		value: {
			'(Def) Horizontal': 'horizontal',
			Vertical: 'vertical'
		}
	},
	// Maps the main navigation slot content from the Figma navigation instance.
	_children: {
		type: 'connectedInstances',
		filter: 'Navigation'
	}
};

export const controlPanelDesktops: FigmaCodeConnect = {
	// TODO: Replace node-id with the actual Figma node once available.
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=0:0'],
	props: controlPanelDesktopProps
};
