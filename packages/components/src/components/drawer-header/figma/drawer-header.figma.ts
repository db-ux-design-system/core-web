import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaDrawerHeaderProps = {
	text?: string;
	startSlot?: any;
	endSlot?: any;
};

const drawerHeaderProps: Record<string, FigmaProp> = {
	text: { type: 'textContent', key: '✏️ Text', guardKeys: ['Show Text'] },
	startSlot: {
		type: 'children',
		key: '📦 Start Slot',
		guardKeys: ['Show Start Slot']
	},
	endSlot: {
		type: 'children',
		key: '📦 End Slot',
		guardKeys: ['Show End Slot']
	}
};

export const drawerHeaders: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=37980:31922'
	],
	props: drawerHeaderProps
};
