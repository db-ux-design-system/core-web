import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';
import type { DBHeadingBaseProps } from '../model';

export type FigmaHeadingProps = Pick<
	DBHeadingBaseProps,
	'size' | 'fontWeight' | 'alignment' | 'paragraphSpacing'
> & {
	text?: string;
};

export type FigmaCustomHeadingProps = FigmaHeadingProps;

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
 * DBCustomHeading mirrors the Heading styling API, so it maps the same
 * properties. They all sit on the wrapper root, which is what the generator can
 * resolve — the nested `h2` only carries the text content.
 *
 * `startSlot` and `endSlot` are deliberately not mapped: a `children` prop needs
 * the Figma property key of the slot to call `getSlot()` on, and the Figma library
 * for Heading is still being restructured. A guessed key produces a connection
 * that silently resolves to nothing in Figma, so the slots stay out until the
 * keys are final.
 */
// Spread instead of a plain alias: the `useMetadata` resolver does not follow a
// chained identifier reference, which would silently skip the prop injection and
// leave literal `props.size` in the generated snippet.
const customHeadingProps: Record<string, FigmaProp> = { ...headingProps };

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
