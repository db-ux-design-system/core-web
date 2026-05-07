import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaLinkProps = {
	size?: string;
	disabled?: boolean;
};

const linkProps: Record<string, FigmaProp> = {
	size: {
		type: 'enum',
		key: 'Size',
		value: {
			'(Def) Medium': 'medium',
			Small: 'small'
		}
	},
	disabled: {
		type: 'enum',
		key: 'Disabled',
		value: {
			False: false,
			True: true
		}
	}
};

export const internalAdaptiveLinks: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=14436:12312'],
	props: linkProps
};

export const internalBrandLinks: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=14436:12458'],
	props: linkProps
};

export const externalAdaptiveLinks: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=14436:12385'],
	props: linkProps
};

export const externalBrandLinks: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=14436:12531'],
	props: linkProps
};
