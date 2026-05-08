import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaAccordionItemProps = {
	headlinePlain?: string;
	disabled?: boolean;
	defaultOpen?: boolean;
	content?: string;
};

const accordionItemProps: Record<string, FigmaProp> = {
	headlinePlain: { type: 'string', key: '✏️ Headline' },
	content: { type: 'textContent', key: '✏️ Text' },
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

export const accordionItems: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15841',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15919'
	],
	props: accordionItemProps
};
