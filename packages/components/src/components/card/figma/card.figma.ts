import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaCardProps = {
	elevationLevel?: string;
	spacing?: string;
	behavior?: string;
	children?: string;
};

const cardProps: Record<string, FigmaProp> = {
	elevationLevel: {
		type: 'enum',
		key: '💻 Elevation Level',
		value: {
			'1': '1',
			'2': '2',
			'3': '3'
		}
	},
	spacing: {
		type: 'enum',
		key: 'Spacing',
		value: {
			'(Def) Small': 'small',
			Medium: 'medium',
			Large: 'large',
			None: 'none'
		}
	},
	behavior: {
		type: 'enum',
		key: 'Behavior',
		value: {
			'(Def) Static': 'static',
			Interactive: 'interactive'
		}
	},
	children: {
		type: 'children',
		key: 'Children'
	}
};

export const cards: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4793',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4898',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5003'
	],
	props: cardProps
};
