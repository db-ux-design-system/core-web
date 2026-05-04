import { FigmaCodeConnect } from '../../../shared/figma';

export type FigmaInputProps = {
	disabled?: boolean;
	validation?: string;
	showIconLeading?: boolean;
	showIconTrailing?: boolean;
};

export const aboveInputs: FigmaCodeConnect = {
	urls: [
		// Empty
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:4311',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:10056',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:10644',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:4328',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:4640',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:4659',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:10075',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:10663',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:4818',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:4797',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:10084',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:10672',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:4988',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:4969',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:10094',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:10682',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:5313',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:5397',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:5437',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:5481',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:5569',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:10114',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:10702',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:6023',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:10154',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:10742',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:6268',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:10173',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:10761',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:6506',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:10194',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:10782',
		// Active
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:16704',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:16859',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:16936',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:17008',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:17308',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:17534',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:17649',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:17758',
		// Filled
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:18549',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:18558',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12158:26997',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:18567',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:18576',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:18720',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:18710',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:18730',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:18795',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12158:27022',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:18806',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:18700',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:18784',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:18859',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:18869',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:18879',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12158:27034',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:18773',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12158:27050',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:18849',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19142',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19152',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19171',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19180',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19363',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19374',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19395',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19405',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:18994',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19473',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19485',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19508',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19519',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19037',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19587',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19598',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19058',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19619',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19629',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19079',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19132',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19162',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19341',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19385',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19438',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19497',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19542',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:19609'
	],
	props: {
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
				'No Validation': 'no-validation',
				Invalid: 'invalid',
				Valid: 'valid'
			}
		},
		showIconLeading: {
			type: 'boolean',
			key: 'Show Icon Leading'
		},
		showIconTrailing: {
			type: 'boolean',
			key: 'Show Icon Trailing'
		}
	}
};

export const floatingInputs: FigmaCodeConnect = {
	urls: [
		// Empty
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:8805',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:11441',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:11993',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:8822',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:9135',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:9154',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:11458',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:12010',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:9314',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:9293',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:11466',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:12018',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:9483',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:9464',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:11475',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:12027',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:9807',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:9892',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:9933',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:9976',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:10063',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:11493',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:12045',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:10518',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:11529',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:12081',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:10764',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:11546',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:12098',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:11001',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:11565',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4419:12117',
		// Active
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:22174',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:22360',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:22452',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:22540',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:22874',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:23118',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:23239',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:23354',
		// Filled
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:20428',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:20438',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12158:25451',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:20448',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:20458',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:20621',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:20610',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12158:25478',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:20710',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:20632',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:20643',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:20698',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12158:25491',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:20801',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:20722',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:20734',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:20790',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12158:25508',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:20812',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:20823',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:20968',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21011',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21032',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21053',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21105',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21116',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21127',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21138',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21148',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21158',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21333',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21355',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21367',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21379',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21390',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21401',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21437',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21471',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21484',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21497',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21509',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21521',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21546',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21591',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21603',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21615',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21626',
		'https://www.figma.com/design/FIGMA_FILE?node-id=3:21637'
	],
	props: {
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
				'No Validation': 'no-validation',
				Invalid: 'invalid',
				Valid: 'valid'
			}
		},
		showIconLeading: {
			type: 'boolean',
			key: 'Show Icon Leading'
		},
		showIconTrailing: {
			type: 'boolean',
			key: 'Show Icon Trailing'
		}
	}
};
