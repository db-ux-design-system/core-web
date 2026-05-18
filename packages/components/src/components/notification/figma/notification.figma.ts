import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaNotificationProps = {
	variant?: string;
	semantic?: string;
	headline?: string;
	showHeadline?: boolean;
	showIcon?: boolean;
	closeable?: boolean;
	linkVariant?: string;
	text?: string;
	link?: string;
	timestamp?: string;
};

const notificationProps: Record<string, FigmaProp> = {
	variant: {
		type: 'enum',
		key: 'Variant',
		value: {
			Docked: 'docked',
			Standalone: 'standalone',
			Overlay: 'overlay'
		}
	},
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
	headline: { type: 'string', key: 'Headline' },
	showHeadline: { type: 'boolean', key: 'Show Headline' },
	showIcon: { type: 'boolean', key: 'Show Icon' },
	closeable: { type: 'boolean', key: 'Closeable' },
	linkVariant: {
		type: 'enum',
		key: '(Def) Link Variant: Block',
		value: { False: 'block', True: 'inline' }
	},
	text: { type: 'textContent', key: 'Text' },
	link: { type: 'string', key: 'Link' },
	timestamp: { type: 'string', key: 'Timestamp' }
};

export const notifications: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:3566',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:3812',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:2727'
	],
	props: notificationProps
};
