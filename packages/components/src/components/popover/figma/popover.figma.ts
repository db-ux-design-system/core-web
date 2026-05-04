import { FigmaCodeConnect } from '../../../shared/figma';

export type FigmaPopoverProps = {
	spacing?: string;
};

export const popovers: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5595',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5599',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5603',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:5607'
	],
	props: {
		spacing: {
			type: 'enum',
			key: 'Spacing',
			value: {
				'(Def) Small': 'small',
				Medium: 'medium',
				Large: 'large',
				None: 'none'
			}
		}
	}
};
