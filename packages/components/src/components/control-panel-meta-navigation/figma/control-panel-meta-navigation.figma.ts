import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaControlPanelMetaNavigationProps = {
	_children?: any;
};

const controlPanelMetaNavigationProps: Record<string, FigmaProp> = {
	_children: { type: 'connectedInstances' }
};

export const controlPanelMetaNavigations: FigmaCodeConnect = {
	// TODO: Replace node-id with the actual Figma node once available.
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=0:0'],
	props: controlPanelMetaNavigationProps
};
