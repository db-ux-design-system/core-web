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
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=17457-13260'],
	props: paginationProps
};
