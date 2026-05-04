import { FigmaCodeConnect } from '../../../shared/figma';

export type FigmaNavigationItemProps = {
	disabled?: boolean;
	active?: boolean;
};

export const navigationItems: FigmaCodeConnect = {
	urls: [
		// Horizontal Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33107',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33112',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33117',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33122',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33129',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33135',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33141',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33147',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33155',
		// Vertical Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33053',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33058',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33063',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33068',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33075',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33081',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33087',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33093',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33101',
		// Vertical Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:32999',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33004',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33009',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33014',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33021',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33027',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33033',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33039',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33047',
		// Horizontal Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33161',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33166',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33171',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33176',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33183',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33189',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33195',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33201',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:33209'
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
