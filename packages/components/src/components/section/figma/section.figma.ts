import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaSectionProps = {
	spacing?: string;
	width?: string;
};

const sectionProps: Record<string, FigmaProp> = {
	spacing: {
		type: 'enum',
		key: 'Spacing',
		value: {
			'(Def) Medium': 'medium',
			Large: 'large',
			Small: 'small',
			None: 'none'
		}
	},
	width: {
		type: 'enum',
		key: 'Width',
		value: {
			'(Def) Full': 'full',
			'Medium (1024)': 'medium',
			'Large (1440)': 'large',
			'Small (768)': 'small'
		}
	}
};

export const sections: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=32604:20623'],
	props: sectionProps
};
