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
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=1:29568'],
	props: defaultBadgeProps
};
