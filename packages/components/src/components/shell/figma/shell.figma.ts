import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaShellProps = {
	controlPanelDesktopPosition?: string;
	_children?: any;
};

const shellProps: Record<string, FigmaProp> = {
	controlPanelDesktopPosition: {
		type: 'enum',
		key: 'Position',
		value: {
			'(Def) Top': 'top',
			Left: 'left'
		}
	},
	// Maps the control-panel-desktop slot content from the Figma instance.
	_children: {
		type: 'connectedInstances',
		filter: 'Control Panel'
	}
};

export const shells: FigmaCodeConnect = {
	// TODO: Replace node-id with the actual Figma node once available.
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=0:0'],
	props: shellProps
};
