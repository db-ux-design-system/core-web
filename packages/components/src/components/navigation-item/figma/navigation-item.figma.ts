import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaNavigationItemProps = {
	text?: string;
	width?: string;
	disabled?: boolean;
	active?: boolean;
	showIcon?: boolean;
	icon?: string;
};

const navigationItemProps: Record<string, FigmaProp> = {
	text: { type: 'textContent', key: '✏️ Text' },
	width: {
		type: 'enum',
		key: '💻 Width',
		value: { Auto: 'auto', Full: 'full' }
	},
	disabled: { type: 'boolean', key: 'Disabled' },
	active: { type: 'boolean', key: 'Active' },
	showIcon: { type: 'boolean', key: 'Show Icon' },
	icon: {
		type: 'conditionalProp',
		key: '🔄 Icon',
		guardProp: 'showIcon',
		attrName: 'icon'
	}
};

export const navigationItems: FigmaCodeConnect = {
	urls: [
		// Horizontal Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33106',
		// Vertical Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33052',
		// Vertical Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:32998',
		// Horizontal Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33160'
	],
	props: navigationItemProps
};
