import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaNavigationProps = {
	_children?: string;
};

const navigationProps: Record<string, FigmaProp> = {
	_children: { type: 'nestedConnectedInstances', filter: 'DBNavigationItem' }
};

export const navigations: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=4935:49095',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4924:32907'
	],
	props: navigationProps
};
