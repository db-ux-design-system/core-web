import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaControlPanelMobileProps = {
	position?: string;
	variant?: string;
	_children?: any;
};

const controlPanelMobileProps: Record<string, FigmaProp> = {
	position: {
		type: 'enum',
		key: 'Position',
		value: {
			'(Def) Top': 'top',
			Bottom: 'bottom'
		}
	},
	variant: {
		type: 'enum',
		key: 'Variant',
		value: {
			'(Def) Drawer': 'drawer',
			'Flat Icon': 'flat-icon'
		}
	},
	// Maps the main navigation slot content from the Figma navigation instance.
	_children: {
		type: 'connectedInstances',
		filter: 'Navigation'
	}
};

export const controlPanelMobiles: FigmaCodeConnect = {
	// TODO: Replace node-id with the actual Figma node once available.
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=0:0'],
	props: controlPanelMobileProps
};
