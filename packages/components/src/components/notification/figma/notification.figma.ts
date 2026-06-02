import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaNotificationProps = {
	variant?: string;
	semantic?: string;
	headline?: string;
	showTimestamp?: boolean;
	showHeadline?: boolean;
	closeable?: boolean;
	text?: string;
	link?: string;
	timestamp?: string;
	linkVariant?: 'block' | 'inline';
	_children?: any;
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
	headline: { type: 'string', key: 'Headline', guardKeys: ['Show Headline'] },
	showHeadline: { type: 'boolean', key: 'Show Headline' },
	showIcon: { type: 'boolean', key: 'Show Icon' },
	showTimestamp: { type: 'boolean', key: 'Show Timestamp' },
	closeable: { type: 'boolean', key: 'Closeable' },
	text: { type: 'textContent', key: 'Text' },
	link: {
		type: 'string',
		key: 'Link',
		guardKeys: ['(Def) Link Variant: Block', '↳ OR Link Variant: Inline']
	},
	timestamp: {
		type: 'string',
		key: 'Timestamp',
		guardKeys: ['Show Timestamp']
	},
	linkVariant: {
		type: 'booleanToEnum',
		map: [
			{ key: '(Def) Link Variant: Block', value: 'block' },
			{ key: '↳ OR Link Variant: Inline', value: 'inline' }
		]
	},
	_children: {
		type: 'children',
		key: 'Children',
		guardKeys: ['Show Children Slot']
	}
};

export const notifications: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:3566',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:3812',
		'https://www.figma.com/design/FIGMA_FILE?node-id=2:2727'
	],
	props: notificationProps
};
