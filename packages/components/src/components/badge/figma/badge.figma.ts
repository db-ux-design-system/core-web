import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaBadgeProps = {
	text?: string;
	size?: string;
	semantic?: string;
	emphasis?: string;
	placement?: string;
};

const defaultBadgeProps: Record<string, FigmaProp> = {
	size: {
		type: 'enum',
		key: 'Size',
		value: {
			'(Def) Small': 'small',
			Medium: 'medium'
		}
	},
	semantic: {
		type: 'enum',
		key: 'Semantic',
		value: {
			'(Def) Adaptive': 'adaptive',
			Critical: 'critical',
			Informational: 'informational',
			Neutral: 'neutral',
			Successful: 'successful',
			Warning: 'warning'
		}
	},
	emphasis: {
		type: 'enum',
		key: 'Emphasis',
		value: {
			'(Def) Weak': 'weak',
			Strong: 'strong'
		}
	},
	placement: {
		type: 'enum',
		key: '💻 Placement',
		value: {
			inline: 'inline',
			'corner-top-left': 'corner-top-left',
			'corner-top-right': 'corner-top-right',
			'corner-center-left': 'corner-center-left',
			'corner-center-right': 'corner-center-right',
			'corner-bottom-left': 'corner-bottom-left',
			'corner-bottom-right': 'corner-bottom-right'
		}
	},
	text: { type: 'textContent', key: '✏️ Text' }
};

export const textBadges: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29569',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29572',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29575',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29578',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29581',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29584',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29587',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29590',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29593',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29596',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29599',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29602',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29605',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29608',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29611',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29614',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29617',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29620',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29623',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29626',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29629',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29632',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29635',
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29638'
	],
	props: defaultBadgeProps
};
