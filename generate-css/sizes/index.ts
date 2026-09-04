import { readFileSync, readdirSync } from 'fs';

// --- Types ---

type TokenEntry = {
	$type: 'number' | 'string';
	$value: number | string;
	$description?: string;
	$extensions?: {
		'com.figma.codeSyntax'?: { WEB?: string };
		[key: string]: unknown;
	};
};

type SizeTokenFile = {
	[key: string]: TokenEntry | { 'com.figma.modeName'?: string };
};

type BaseTokenFile = {
	'db-base-size': Record<string, TokenEntry>;
	$extensions?: { 'com.figma.modeName'?: string };
};

// --- Constants ---

/** Numeric token properties that become CSS custom properties per size */
const SIZE_PROPS = [
	'component-height',
	'content-height',
	'content-padding-inline',
	'content-padding-block',
	'content-gap',
	'icon-size',
	'font-size',
	'line-height',
	'corner-radius'
] as const;

/** Map token names to CSS custom property names where they differ */
const PROP_CSS_NAME: Partial<Record<(typeof SIZE_PROPS)[number], string>> = {
	'corner-radius': 'border-radius',
	'content-gap': 'component-gap'
};

/** Ordered from smallest to largest */
const SIZE_ORDER = ['3XS', '2XS', 'XS', 'SM', 'MD', 'LG', 'XL', '2XL'] as const;

const DEFAULT_SIZE = 'md';

// --- Helpers ---

const tokensDir = new URL('../', import.meta.url);

const readTokenFile = (filename: string): SizeTokenFile =>
	JSON.parse(readFileSync(new URL(filename, tokensDir), 'utf-8'));

const formatPxValue = (value: number): string => {
	if (value === 0) return '0px';
	// Round fractional Figma values (e.g. 13.33) to 2 decimals
	const rounded = Math.round(value * 100) / 100;
	return `${rounded}px`;
};

// --- Generate CSS ---

const generateBaseTokensCss = (): string => {
	const base: BaseTokenFile = JSON.parse(
		readFileSync(new URL('base.tokens.json', tokensDir), 'utf-8')
	);

	const entries = Object.entries(base['db-base-size']);
	let css = ':is(:root,:host) {\n';
	for (const [key, token] of entries) {
		const value = (token as TokenEntry).$value as number;
		css += `\t--db-base-size-${key}: ${formatPxValue(value)};\n`;
	}
	css += '}\n\n';
	return css;
};

const generateSizeTokensCss = (): string => {
	let css = '';

	// Discover available size token files
	const files = readdirSync(tokensDir)
		.filter((f) => f.endsWith('.tokens.json') && f !== 'base.tokens.json')
		.sort((a, b) => {
			const nameA = a.replace('.tokens.json', '');
			const nameB = b.replace('.tokens.json', '');
			return (
				SIZE_ORDER.indexOf(nameA as (typeof SIZE_ORDER)[number]) -
				SIZE_ORDER.indexOf(nameB as (typeof SIZE_ORDER)[number])
			);
		});

	for (const file of files) {
		const tokens = readTokenFile(file);
		const sizeName = (
			(tokens['size-name'] as TokenEntry)?.$value?.toString() ??
			file.replace('.tokens.json', '')
		).toLowerCase();

		const isDefault = sizeName === DEFAULT_SIZE;

		// Compute component-padding-block and component-padding-inline
		const componentPadding = tokens['component-padding'] as
			TokenEntry | undefined;
		const rowPaddingInline = tokens['row-padding-inline'] as
			TokenEntry | undefined;
		const componentPaddingBlock =
			componentPadding?.$type === 'number'
				? (componentPadding.$value as number)
				: 0;
		const componentPaddingInline =
			componentPaddingBlock +
			(rowPaddingInline?.$type === 'number'
				? (rowPaddingInline.$value as number)
				: 0);

		let props = '';
		props += `\t--db-component-padding-block: ${formatPxValue(componentPaddingBlock)};\n`;
		props += `\t--db-component-padding-inline: ${formatPxValue(componentPaddingInline)};\n`;

		props += SIZE_PROPS.map((prop) => {
			const token = tokens[prop] as TokenEntry | undefined;
			if (!token || token.$type !== 'number') return '';
			const cssName = PROP_CSS_NAME[prop] ?? prop;
			// component-gap is derived from content-height at runtime so it
			// scales with the size, with a 2px floor.
			if (cssName === 'component-gap') {
				return `\t--db-${cssName}: max(2px, calc(0.25 * var(--db-content-height)));`;
			}
			return `\t--db-${cssName}: ${formatPxValue(token.$value as number)};`;
		})
			.filter(Boolean)
			.join('\n');

		// border-width: always the base-size 25 token (1px)
		props += `\n\t--db-border-width: 1px;`;

		// Also emit icon-size-name as a string token
		const iconSizeName = tokens['icon-size-name'] as TokenEntry | undefined;
		const iconSizeProp = iconSizeName
			? `\n\t--db-icon-size-name: "${iconSizeName.$value}";`
			: '';

		if (isDefault) {
			// Default size: apply to :root/:host without requiring data-size
			css += `:is(:root,:host) {\n${props}${iconSizeProp}\n}\n\n`;
			// Also match explicit data-size="MD"
			css += `[data-size="${sizeName}"] {\n${props}${iconSizeProp}\n}\n\n`;
		} else {
			css += `[data-size="${sizeName}"] {\n${props}${iconSizeProp}\n}\n\n`;
		}
	}

	return css;
};

// --- Public API ---

export const generateSizesCss = (): string => {
	let css = '';

	css += generateBaseTokensCss();
	css += generateSizeTokensCss();

	return css;
};
