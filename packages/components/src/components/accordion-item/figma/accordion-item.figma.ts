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
	disabled: { type: 'boolean', key: 'Disabled' },
	defaultOpen: { type: 'boolean', key: 'Open' }
};

export const accordionItems: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15841',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15919'
	],
	props: accordionItemProps
};
