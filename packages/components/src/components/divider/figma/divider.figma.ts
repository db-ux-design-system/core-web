import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';

export type FigmaDividerProps = {
	variant?: string;
	emphasis?: string;
};

const dividerProps: Record<string, FigmaProp> = {
	variant: {
		type: 'enum',
		key: 'Variant',
		value: {
			'(Def) Horizontal': 'horizontal',
			Vertical: 'vertical'
		}
	},
	emphasis: {
		type: 'enum',
		key: 'Emphasis',
		value: {
			'(Def) Weak': 'weak',
			Strong: 'strong'
		}
	}
};

export const dividers: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=1:21536'],
	props: dividerProps
};
