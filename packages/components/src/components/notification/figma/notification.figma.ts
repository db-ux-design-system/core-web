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
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=2:3566'],
	props: notificationProps
};

export const standaloneNotifications: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=2:3812'],
	props: notificationProps
};

export const overlayNotifications: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=2:2727'],
	props: notificationProps
};
