import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaCustomSelectProps = {
	placement?: string;
	dropdownWidth?: string;
};

const customSelectProps: Record<string, FigmaProp> = {
	placement: {
		type: 'enum',
		key: 'Dropdown Position',
		value: {
			'(Def) Bottom': 'bottom',
			'Bottom-Start': 'bottom-start',
			'Bottom-End': 'bottom-end',
			Top: 'top',
			'Top-Start': 'top-start',
			'Top-End': 'top-end'
		}
	},
	dropdownWidth: {
		type: 'enum',
		key: 'Dropdown Width',
		value: {
			'(Def) Full': 'full',
			'Auto/Fix': 'auto'
		}
	}
};

// Form Field Width=Full (Desktop)
export const fullWidthCustomSelects: FigmaCodeConnect = {
	urls: [
		// Bottom
		'https://www.figma.com/design/FIGMA_FILE?node-id=19383:17781',
		'https://www.figma.com/design/FIGMA_FILE?node-id=19383:17786',
		'https://www.figma.com/design/FIGMA_FILE?node-id=19383:17794',
		// Top
		'https://www.figma.com/design/FIGMA_FILE?node-id=19383:17829',
		'https://www.figma.com/design/FIGMA_FILE?node-id=19383:17834',
		'https://www.figma.com/design/FIGMA_FILE?node-id=19383:17842'
	],
	props: customSelectProps
};

// Form Field Width=Auto (Desktop)
export const autoWidthCustomSelects: FigmaCodeConnect = {
	urls: [
		// Bottom
		'https://www.figma.com/design/FIGMA_FILE?node-id=19383:17805',
		'https://www.figma.com/design/FIGMA_FILE?node-id=19383:17810',
		'https://www.figma.com/design/FIGMA_FILE?node-id=19383:17818',
		// Top
		'https://www.figma.com/design/FIGMA_FILE?node-id=19383:17853',
		'https://www.figma.com/design/FIGMA_FILE?node-id=19383:17858',
		'https://www.figma.com/design/FIGMA_FILE?node-id=19383:17866'
	],
	props: customSelectProps
};
