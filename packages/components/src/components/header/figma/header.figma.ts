import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaHeaderProps = {
	width?: string;
	_children?: any;
};

const headerProps: Record<string, FigmaProp> = {
	width: {
		type: 'enum',
		key: 'Width',
		value: {
			'(Def) Full': 'full',
			'1024': 'medium',
			'1440': 'large'
		}
	},
	// Maps the header navigation slot content from the Figma visibility slot.
	_children: {
		type: 'connectedInstances',
		filter: 'Navigation'
	}
};

export const headers: FigmaCodeConnect = {
	urls: [
		// Desktop
		'https://www.figma.com/design/FIGMA_FILE?node-id=3432:27231',
		// Mobile
		'https://www.figma.com/design/FIGMA_FILE?node-id=2946:22714'
	],
	props: headerProps
};
