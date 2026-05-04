import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaSelectProps = {
	disabled?: boolean;
	validation?: string;
	showIcon?: boolean;
};

const selectProps: Record<string, FigmaProp> = {
	disabled: {
		type: 'enum',
		key: 'Disabled',
		value: {
			False: false,
			True: true
		}
	},
	validation: {
		type: 'enum',
		key: 'Validation',
		value: {
			'(Def) No Validation': 'no-validation',
			Valid: 'valid',
			Invalid: 'invalid'
		}
	},
	showIcon: {
		type: 'boolean',
		key: 'Show Icon'
	}
};

export const aboveSelects: FigmaCodeConnect = {
	urls: [
		// Empty
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:5129',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:5328',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:5187',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:5337',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:5203',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:5265',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:5219',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:25151',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:25265',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:25293',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:25274',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:25303',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:25283',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:25313',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42307',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42321',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42339',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42353',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42371',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42386',
		// Selected
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:25786',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:25946',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:25991',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:26000',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:26051',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:26060',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:26111',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:26120',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:26235',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:26263',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:26244',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:26273',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:26253',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3900:26283',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42484',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42498',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42516',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42530',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42548',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42563'
	],
	props: selectProps
};

export const floatingSelects: FigmaCodeConnect = {
	urls: [
		// Empty
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:4980',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5022',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5064',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5072',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5120',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5128',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5176',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5184',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5316',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5349',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5324',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5358',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5332',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5367',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42646',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42657',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42672',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42683',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42698',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42710',
		// Selected
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5651',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5814',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5862',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5872',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5926',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5936',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:5990',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:6000',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:6122',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:6153',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:6132',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:6164',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:6142',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3914:6175',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42790',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42803',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42820',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42833',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42850',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:42864'
	],
	props: selectProps
};
