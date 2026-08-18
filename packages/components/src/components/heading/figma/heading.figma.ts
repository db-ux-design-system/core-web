import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';
import type { DBHeadingBaseProps } from '../model';

export type FigmaHeadingProps = Pick<
	DBHeadingBaseProps,
	'size' | 'fontWeight' | 'alignment' | 'paragraphSpacing'
> & {
	text?: string;
};

export type FigmaCustomHeadingProps = Pick<
	FigmaHeadingProps,
	'alignment' | 'text'
>;

const sizeProp: FigmaProp = {
	type: 'enum',
	key: 'Size',
	value: {
		'3xl': '3xl',
		'2xl': '2xl',
		xl: 'xl',
		lg: 'lg',
		md: 'md',
		sm: 'sm',
		xs: 'xs',
		'2xs': '2xs',
		'3xs': '3xs',
		// DBHeadingH1 to DBHeadingH6 label their level default `(Def) <size>`.
		// It equals the CSS default mapping, so the attribute stays out of the
		// snippet. DBCustomHeading has no default and never hits these keys.
		'(Def) xl': 'undefined',
		'(Def) lg': 'undefined',
		'(Def) md': 'undefined',
		'(Def) sm': 'undefined',
		'(Def) xs': 'undefined',
		'(Def) 2xs': 'undefined'
	}
};

const alignmentProp: FigmaProp = {
	type: 'enum',
	key: 'Alignment',
	value: { '(Def) Left': 'start', Center: 'center', Right: 'end' }
};

const textProp: FigmaProp = { type: 'textContent', key: 'Text' };

const headingProps: Record<string, FigmaProp> = {
	size: sizeProp,
	fontWeight: {
		type: 'enum',
		key: 'Font Weight',
		value: { '(Def) Black': 'black', Light: 'light' }
	},
	alignment: alignmentProp,
	paragraphSpacing: { type: 'boolean', key: 'Show Paragraph Spacing' },
	text: textProp
};

/*
 * DBCustomHeading is a layout wrapper, so only the properties it actually owns
 * are mapped. The generator resolves Figma values for root-level props only, so
 * mapping `Size`, `Font Weight` or `Show Paragraph Spacing` here would emit
 * literal `props.size` into the snippet instead of the selected value — those
 * belong to the nested heading's own component set.
 */
const customHeadingProps: Record<string, FigmaProp> = {
	alignment: alignmentProp,
	text: textProp
};

export const headingH1: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=38971:560'],
	props: headingProps
};

export const headingH2: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=38971:2765'],
	props: headingProps
};

export const headingH3: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=38971:5350'],
	props: headingProps
};

export const headingH4: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=38972:7522'],
	props: headingProps
};

export const headingH5: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=38972:9683'],
	props: headingProps
};

export const headingH6: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=38972:11844'],
	props: headingProps
};

export const customHeading: FigmaCodeConnect = {
	urls: ['https://www.figma.com/design/FIGMA_FILE?node-id=38972:14031'],
	props: customHeadingProps
};
