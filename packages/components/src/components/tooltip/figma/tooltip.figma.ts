import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaTooltipProps = {
	label?: string;
	emphasis?: string;
	placement?: string;
	variant?: string;
	width?: string;
	showArrow?: boolean;
	animation?: boolean;
	delay?: string;
	gap?: boolean;
};

const tooltipProps: Record<string, FigmaProp> = {
	label: { type: 'textContent', key: '✏️ Label' },
	emphasis: {
		type: 'enum',
		key: 'Emphasis',
		value: { '(Def) Weak': 'weak', Strong: 'strong' }
	},
	placement: {
		type: 'enum',
		key: 'Placement',
		value: {
			Bottom: 'bottom',
			Top: 'top',
			Left: 'left',
			Right: 'right',
			'Bottom-start': 'bottom-start',
			'Bottom-end': 'bottom-end',
			'Top-start': 'top-start',
			'Top-end': 'top-end',
			'Left-start': 'left-start',
			'Left-end': 'left-end',
			'Right-start': 'right-start',
			'Right-end': 'right-end'
		}
	},
	variant: {
		type: 'enum',
		key: 'Variant',
		value: { Description: 'description', Label: 'label' }
	},
	width: {
		type: 'enum',
		key: 'Width',
		value: { '(Def) Auto': 'auto', Fixed: 'fixed' }
	},
	showArrow: { type: 'boolean', key: 'Show Arrow' },
	animation: { type: 'boolean', key: 'Animation' },
	delay: {
		type: 'enum',
		key: 'Delay',
		value: { '(Def) None': 'none', Slow: 'slow', Fast: 'fast' }
	},
	gap: { type: 'boolean', key: 'Gap' }
};

export const tooltips: FigmaCodeConnect = {
	urls: [
		// Bottom
		'https://www.figma.com/design/mlJ6R0GkfR15a93KSlqXtB?node-id=8:54892',
		// Top
		'https://www.figma.com/design/mlJ6R0GkfR15a93KSlqXtB?node-id=8:55540',
		// Left
		'https://www.figma.com/design/mlJ6R0GkfR15a93KSlqXtB?node-id=8:55669',
		// Right
		'https://www.figma.com/design/mlJ6R0GkfR15a93KSlqXtB?node-id=8:55798'
	],
	props: tooltipProps
};
