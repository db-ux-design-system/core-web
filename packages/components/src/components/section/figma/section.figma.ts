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
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:20624',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:20627',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:20630',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:20633',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:20636',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:20639',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:20642',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:20645',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:20648',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:20651',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:20654',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:20657',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:20660',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:20663',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:20666',
		'https://www.figma.com/design/FIGMA_FILE?node-id=32604:20669'
	],
	props: sectionProps
};
