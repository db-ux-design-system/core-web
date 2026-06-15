import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaControlPanelBrandProps = {
	text?: string;
	_children?: any;
};

const controlPanelBrandProps: Record<string, FigmaProp> = {
	text: { type: 'textContent', key: 'Text' }
};

export const controlPanelBrands: FigmaCodeConnect = {
	// TODO: Replace node-id with the actual Figma node once available.
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=0:0'],
	props: controlPanelBrandProps
};
