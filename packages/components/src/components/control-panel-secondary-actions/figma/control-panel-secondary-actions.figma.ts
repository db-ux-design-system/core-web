import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaControlPanelSecondaryActionsProps = {
	_children?: any;
};

const controlPanelSecondaryActionsProps: Record<string, FigmaProp> = {
	_children: { type: 'connectedInstances' }
};

export const controlPanelSecondaryActions: FigmaCodeConnect = {
	// TODO: Replace node-id with the actual Figma node once available.
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=0:0'],
	props: controlPanelSecondaryActionsProps
};
