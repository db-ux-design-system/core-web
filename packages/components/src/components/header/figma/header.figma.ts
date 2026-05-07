import { FigmaCodeConnect } from '../../../shared/figma';

export type FigmaHeaderProps = {
	width?: string;
};

export const desktopHeaders: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=3432:27231'],
	props: {
		width: {
			type: 'enum',
			key: 'Width',
			value: {
				'(Def) Full': 'full',
				'1024': 'medium',
				'1440': 'large'
			}
		}
	}
};

export const mobileHeaders: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=2946:22714'],
	props: {}
};
