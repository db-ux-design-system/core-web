import { FigmaCodeConnect } from '../../../shared/figma';

export type FigmaPopoverProps = {
	spacing?: string;
};

export const popovers: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=32604:5594'],
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
