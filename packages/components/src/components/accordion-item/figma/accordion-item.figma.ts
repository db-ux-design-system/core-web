import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaAccordionItemProps = {
	headlinePlain?: string;
	disabled?: boolean;
	defaultOpen?: boolean;
};

const accordionItemProps: Record<string, FigmaProp> = {
	headlinePlain: { type: 'string', key: '✏️ Headline' },
	disabled: {
		type: 'enum',
		key: 'Disabled',
		value: {
			False: false,
			True: true
		}
	},
	defaultOpen: {
		type: 'enum',
		key: 'Open',
		value: {
			False: false,
			True: true
		}
	}
};

export const dividerAccordionItems: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=14442:15841'],
	props: accordionItemProps
};

export const cardAccordionItems: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=14442:15919'],
	props: accordionItemProps
};
