import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaAccordionProps = {
	behavior?: string;
	variant?: string;
	_children?: string;
};

const accordionProps: Record<string, FigmaProp> = {
	behavior: {
		type: 'enum',
		key: 'Behavior',
		value: {
			multiple: 'multiple',
			single: 'single'
		}
	},
	variant: {
		type: 'enum',
		key: 'Variant',
		value: {
			'(Def) Divider': 'divider',
			Card: 'card'
		}
	},
	_children: { type: 'nestedConnectedInstances', filter: 'DBAccordionItem' }
};

export const accordions: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=14442-15752'],
	props: accordionProps
};
