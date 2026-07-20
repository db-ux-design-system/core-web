import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaDrawerFooterProps = {
	_children?: any;
};

const drawerFooterProps: Record<string, FigmaProp> = {
	_children: { type: 'children', key: 'Children' }
};

export const drawerFooters: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=37977:35190'
	],
	props: drawerFooterProps
};
