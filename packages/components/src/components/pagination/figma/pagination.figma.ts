import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaPaginationProps = {
	size?: string;
};

const paginationProps: Record<string, FigmaProp> = {
	size: {
		type: 'enum',
		key: 'Size',
		value: { Small: 'small', '(Def) Medium': 'medium' }
	}
};

export const pagination: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=40157-4967',
		'https://www.figma.com/design/FIGMA_FILE?node-id=40266-966'
	],
	props: paginationProps
};
