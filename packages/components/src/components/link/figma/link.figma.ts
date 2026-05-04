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
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12313',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12320',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12327',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12334',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12342',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12349',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12356',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12363',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12370',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12378'
	],
	props: linkProps
};

export const internalBrandLinks: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12459',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12466',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12473',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12480',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12488',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12495',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12502',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12509',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12516',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12524'
	],
	props: linkProps
};

export const externalAdaptiveLinks: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12386',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12393',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12400',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12407',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12415',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12422',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12429',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12436',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12443',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12451'
	],
	props: linkProps
};

export const externalBrandLinks: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12532',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12539',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12546',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12553',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12561',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12568',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12575',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12582',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12589',
		'https://www.figma.com/design/FIGMA_FILE?node-id=14436:12597'
	],
	props: linkProps
};
