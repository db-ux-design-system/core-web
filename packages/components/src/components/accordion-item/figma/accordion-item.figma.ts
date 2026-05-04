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
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15842',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15849',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15856',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15863',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15870',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15920',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15930',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15940',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15950',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15960'
	],
	props: accordionItemProps
};

export const cardAccordionItems: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15878',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15886',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15894',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15902',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15910',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15971',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15982',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:15993',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:16004',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14442:16015'
	],
	props: accordionItemProps
};
