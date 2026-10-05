import { FigmaCodeConnect, FigmaProp } from '../../../shared/figma';
import type { DBHeadingBaseProps } from '../model';

export type FigmaHeadingProps = Pick<
	DBHeadingBaseProps,
	'visualSize' | 'fontWeight'
> & {
	text?: string;
};

export type FigmaCustomHeadingProps = FigmaHeadingProps;

const sizeProp: FigmaProp = {
	type: 'enum',
	key: 'Size',
	value: {
		h1: 'h1',
		h2: 'h2',
		h3: 'h3',
		h4: 'h4',
		h5: 'h5',
		h6: 'h6',
		'p-small': 'p-small',
		'p-medium': 'p-medium',
		'p-large': 'p-large',
		// DBHeadingH1 to DBHeadingH6 label their level default `(Def) <level>`.
		// It equals the CSS default mapping, so the attribute stays out of the
		// snippet. DBCustomHeading has no default and never hits these keys.
		'(Def) h1': 'undefined',
		'(Def) h2': 'undefined',
		'(Def) h3': 'undefined',
		'(Def) h4': 'undefined',
		'(Def) h5': 'undefined',
		'(Def) h6': 'undefined'
	}
};

const textProp: FigmaProp = { type: 'textContent', key: 'Text' };

const headingProps: Record<string, FigmaProp> = {
	visualSize: sizeProp,
	fontWeight: {
		type: 'enum',
		key: 'Font Weight',
		value: { '(Def) Black': 'black', Light: 'light' }
	},
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
// leave literal `props.visualSize` in the generated snippet.
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
