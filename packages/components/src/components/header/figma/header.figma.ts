import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaHeaderProps = {
	width?: string;
};

const widthProp: FigmaProp = {
	type: 'enum',
	key: 'Width',
	value: {
		'(Def) Full': 'full',
		'1024': 'medium',
		'1440': 'large'
	}
};

const desktopHeaderProps: Record<string, FigmaProp> = {
	width: widthProp
};

const mobileHeaderProps: Record<string, FigmaProp> = {};

export const desktopHeaders: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=3432:27231'],
	props: desktopHeaderProps
};

export const mobileHeaders: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=2946:22714'],
	props: mobileHeaderProps
};
