import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaControlPanelPrimaryActionsProps = {
	_children?: any;
};

const controlPanelPrimaryActionsProps: Record<string, FigmaProp> = {
	_children: { type: 'connectedInstances' }
};

export const controlPanelPrimaryActions: FigmaCodeConnect = {
	// TODO: Replace node-id with the actual Figma node once available.
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=0:0'],
	props: controlPanelPrimaryActionsProps
};
