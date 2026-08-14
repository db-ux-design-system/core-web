import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';
import type { DBHeadingBaseProps } from '../model';

export type FigmaHeadingProps = Pick<
	DBHeadingBaseProps,
	'size' | 'fontWeight' | 'alignment' | 'paragraphSpacing'
> & {
	level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	text?: string;
};

const headingProps: Record<string, FigmaProp> = {
	level: {
		type: 'enum',
		key: 'As',
		value: { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6' }
	},
	size: {
		type: 'enum',
		key: 'Size',
		value: {
			'Default Mapping': 'undefined',
			'3xl': '3xl',
			'2xl': '2xl',
			xl: 'xl',
			lg: 'lg',
			md: 'md',
			sm: 'sm',
			xs: 'xs',
			'2xs': '2xs',
			'3xs': '3xs'
		}
	},
	fontWeight: {
		type: 'enum',
		key: 'Font Weight',
		value: { Black: 'black', Light: 'light' }
	},
	alignment: {
		type: 'enum',
		key: 'Text Align',
		value: { Left: 'start', Center: 'center', Right: 'end' }
	},
	paragraphSpacing: { type: 'boolean', key: 'Paragraph Spacing' },
	text: { type: 'textContent', key: 'Text' }
};

export const headings: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=13340:1012'],
	props: headingProps
};
