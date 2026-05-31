import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaBadgeProps = {
	text?: string;
	size?: string;
	semantic?: string;
	emphasis?: string;
	placement?: string;
	icon?: string;
	label?: string;
};

const sizeProp: FigmaProp = {
	type: 'enum',
	key: 'Size',
	value: {
		'(Def) Small': 'small',
		Medium: 'medium'
	}
};

const semanticProp: FigmaProp = {
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
};

const emphasisProp: FigmaProp = {
	type: 'enum',
	key: 'Emphasis',
	value: {
		'(Def) Weak': 'weak',
		Strong: 'strong'
	}
};

const textProp: FigmaProp = { type: 'textContent', key: 'Text' };

const placementProp: FigmaProp = {
	type: 'enum',
	key: 'Placement',
	value: {
		inline: 'inline',
		'corner-top-left': 'corner-top-left',
		'corner-top-right': 'corner-top-right',
		'corner-center-left': 'corner-center-left',
		'corner-center-right': 'corner-center-right',
		'corner-bottom-left': 'corner-bottom-left',
		'corner-bottom-right': 'corner-bottom-right'
	}
};

const baseBadgeProps: Record<string, FigmaProp> = {
	size: sizeProp,
	semantic: semanticProp,
	emphasis: emphasisProp,
	placement: placementProp,
	text: textProp,
	icon: {
		type: 'enum',
		key: 'Size',
		value: {
			'(Def) Small': { type: 'iconSwap', key: 'Icon Small' },
			Medium: { type: 'iconSwap', key: 'Icon Medium' }
		}
	}
};

export const badges: FigmaCodeConnect = {
	urls: [
		'https://www.figma.com/design/FIGMA_FILE?node-id=1:29568',
		'https://www.figma.com/design/FIGMA_FILE?node-id=4184:18686'
	],
	props: baseBadgeProps
};

const dotBadgeProps: Record<string, FigmaProp> = {
	size: sizeProp,
	semantic: semanticProp,
	emphasis: emphasisProp,
	placement: placementProp,
	label: { type: 'string', key: 'Text' }
};

export const dotBadges: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=1:31013'],
	props: dotBadgeProps
};
