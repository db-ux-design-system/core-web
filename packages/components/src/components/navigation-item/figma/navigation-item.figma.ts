import { FigmaCodeConnect } from '../../../shared/figma';

export type FigmaNavigationItemProps = {
	disabled?: boolean;
	active?: boolean;
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
	props: {
		disabled: {
			type: 'enum',
			key: 'Disabled',
			value: {
				False: false,
				True: true
			}
		},
		active: {
			type: 'enum',
			key: 'Active',
			value: {
				False: false,
				True: true
			}
		}
	}
};
