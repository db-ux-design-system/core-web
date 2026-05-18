import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaLinkProps = {
	text?: string;
	content?: string;
	variant?: string;
	size?: string;
	disabled?: boolean;
};

const linkProps: Record<string, FigmaProp> = {
	text: { type: 'textContent', key: 'Text' },
	content: {
		type: 'enum',
		key: 'Content',
		value: { Internal: 'internal', External: 'external' }
	},
	variant: {
		type: 'enum',
		key: 'Variant',
		value: { Adaptive: 'adaptive', Brand: 'brand' }
	},
	size: {
		type: 'enum',
		key: 'Size',
		value: { '(Def) Medium': 'medium', Small: 'small' }
	},
	disabled: { type: 'boolean', key: 'Disabled' }
};

export const links: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12312',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12458',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12385',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12531'
	],
	props: linkProps
};
