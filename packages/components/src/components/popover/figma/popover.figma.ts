import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaPopoverProps = {
	placement?: string;
	spacing?: string;
	_children?: string;
};

const popoverProps: Record<string, FigmaProp> = {
	placement: {
		type: 'enum',
		key: 'Placement',
		value: {
			Default: 'auto',
			Top: 'top',
			Right: 'right',
			Bottom: 'bottom',
			Left: 'left'
		}
	},
	spacing: {
		type: 'enum',
		key: 'Spacing',
		value: {
			'(Def) Small': 'small',
			Medium: 'medium',
			Large: 'large',
			None: 'none'
		}
	},
	_children: { type: 'nestedConnectedInstances' }
};

export const popovers: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=32604:5594'],
	props: popoverProps
};
