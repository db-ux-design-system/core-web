import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaControlPanelFlatIconNavigationProps = {
	noText?: boolean;
	_children?: any;
};

const controlPanelFlatIconNavigationProps: Record<string, FigmaProp> = {
	noText: { type: 'boolean', key: 'No Text' },
	_children: { type: 'connectedInstances', filter: 'Navigation' }
};

export const controlPanelFlatIconNavigations: FigmaCodeConnect = {
	// TODO: Replace node-id with the actual Figma node once available.
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=0:0'],
	props: controlPanelFlatIconNavigationProps
};
