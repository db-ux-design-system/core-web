import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaRadioProps = {
	disabled?: boolean;
	checked?: boolean;
	validation?: string;
};

const radioProps: Record<string, FigmaProp> = {
	disabled: {
		type: 'enum',
		key: 'Disabled',
		value: {
			False: false,
			True: true
		}
	},
	checked: {
		type: 'enum',
		key: 'Checked',
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
	}
};

export const mediumRadios: FigmaCodeConnect = {
	urls: [
		// Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4472',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4648',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4654',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4660',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4673',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4683',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4699',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4704',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4693',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4688',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4879',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2277:4610',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2277:4619',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2277:4796',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2277:4814',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2277:4821',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:44858',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:44865',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:44872',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:44879',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:44887',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45072',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45079',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45087',
		// Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21614',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21618',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21622',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21626',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21631',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21635',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21639',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21643',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21647',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21652',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21783',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21795',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21800',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21804',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21816',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21821',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45006',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45012',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45018',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45024',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45031',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45139',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45145',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45152'
	],
	props: radioProps
};

export const smallRadios: FigmaCodeConnect = {
	urls: [
		// Auto Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4823',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4828',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4833',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4838',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4844',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4849',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4854',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4859',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4864',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2242:4870',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2277:4691',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2277:4709',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2277:4716',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2277:4827',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2277:4845',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2277:4852',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:44894',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:44901',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:44908',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:44915',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:44923',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45094',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45101',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45109',
		// Full Width
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21656',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21660',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21664',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21668',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21673',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21677',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21681',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21685',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21689',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21694',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21825',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21837',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21842',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21846',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21858',
		'https://www.figma.com/design/FIGMA_FILE?node-id=10707:21863',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45037',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45043',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45049',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45055',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45062',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45120',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45126',
		'https://www.figma.com/design/FIGMA_FILE?node-id=22058:45133'
	],
	props: radioProps
};
