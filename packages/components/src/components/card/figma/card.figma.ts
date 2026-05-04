import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaCardProps = {
	elevationLevel?: string;
	spacing?: string;
	behavior?: string;
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
	}
};

export const level1Cards: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4794',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4799',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4804',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4809',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4814',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4819',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4824',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4829',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4834',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4839',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4844',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4849',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4854',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4859',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4864',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4869',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4874',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4880',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4886',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4892'
	],
	props: cardProps
};

export const level2Cards: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4899',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4904',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4909',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4914',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4919',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4924',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4929',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4934',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4939',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4944',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4949',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4954',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4959',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4964',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4969',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4974',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4979',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4985',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4991',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:4997'
	],
	props: cardProps
};

export const level3Cards: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5004',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5009',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5014',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5019',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5024',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5029',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5034',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5039',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5044',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5049',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5054',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5059',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5064',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5069',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5074',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5079',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5084',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5090',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5096',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5102'
	],
	props: cardProps
};
