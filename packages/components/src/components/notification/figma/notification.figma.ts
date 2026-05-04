import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaNotificationProps = {
	semantic?: string;
	showHeadline?: boolean;
};

const notificationProps: Record<string, FigmaProp> = {
	semantic: {
		type: 'enum',
		key: 'Semantic',
		value: {
			'(Def) Adaptive': 'adaptive',
			Critical: 'critical',
			Informational: 'informational',
			Successful: 'successful',
			Warning: 'warning'
		}
	},
	showHeadline: {
		type: 'enum',
		key: 'Show Headline',
		value: {
			True: true,
			False: false
		}
	}
};

export const dockedNotifications: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:3567',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:3599',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:3631',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:3663',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:3695',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12396:28545',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12396:28558',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12396:28571',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12396:28584',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12396:28597',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:9993',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:10006',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:10019',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:10032',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:10045',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:10058',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:10068',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:10078',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:10088',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:10098'
	],
	props: notificationProps
};

export const standaloneNotifications: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:3823',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:3855',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:3887',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:3919',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:3951',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12396:28206',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12396:28219',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12396:28232',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12396:28245',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12396:28258',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:11392',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:11405',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:11418',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:11431',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:11444',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:11457',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:11467',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:11477',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:11487',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:11497'
	],
	props: notificationProps
};

export const overlayNotifications: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:2748',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:2780',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:2812',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:2844',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:2876',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12384:27674',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12384:27688',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12384:27702',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12384:27716',
		'https://www.figma.com/design/FIGMA_FILE?node-id=12384:27730',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:13660',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:13674',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:13688',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:13702',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:13716',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:13730',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:13741',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:13752',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:13763',
		'https://www.figma.com/design/FIGMA_FILE?node-id=25876:13774'
	],
	props: notificationProps
};
