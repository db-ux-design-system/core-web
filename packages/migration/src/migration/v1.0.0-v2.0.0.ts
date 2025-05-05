import type { ReplaceInFileConfig } from 'replace-in-file';

export const v100_v200: ReplaceInFileConfig[] = [
	{
		files: '',
		from: /emphasis="origin"/g,
		to: 'emphasis="strong"'
	},
	{
		files: '',
		from: /border-height/g,
		to: 'border-width'
	},
	/* Font changes */
	{
		files: '',
		from: /db-type-body-line-height-(3xs|2xs|xs|sm|md|lg|xl|2xl|3xl)/g,
		to: '/* TODO: Use `font: db-type-body-xx` for font-size and line-height instead */'
	},
	{
		files: '',
		from: /db-type-body-font-size-(3xs|2xs|xs|sm|md|lg|xl|2xl|3xl)/g,
		to: '/* TODO: Use `font: db-type-body-xx` for font-size and line-height instead */'
	},
	{
		files: '',
		from: /db-type-headline-line-height-(3xs|2xs|xs|sm|md|lg|xl|2xl|3xl)/g,
		to: '/* TODO: Use `font: db-type-headline-xx` for font-size and line-height instead */'
	},
	{
		files: '',
		from: /db-type-headline-font-size-(3xs|2xs|xs|sm|md|lg|xl|2xl|3xl)/g,
		to: '/* TODO: Use `font: db-type-headline-xx` for font-size and line-height instead */'
	},
	/* Angular changes */
	{
		files: '',
		from: /\(onClick\)/g,
		to: '(click)'
	},
	{
		files: '',
		from: /\(onChange\)/g,
		to: '(change)'
	},
	{
		files: '',
		from: /\(onFocus\)/g,
		to: '(focus)'
	},
	{
		files: '',
		from: /\(onBlur\)/g,
		to: '(blur)'
	},
	{
		files: '',
		from: /\(onInput\)/g,
		to: '(input)'
	},
	{
		files: '',
		from: /\(onRemove\)/g,
		to: '(remove)'
	},
	{
		files: '',
		from: /\(onSelect\)/g,
		to: '(select)'
	},
	{
		files: '',
		from: /\(onToggle\)/g,
		to: '(toggle)'
	},
	{
		files: '',
		from: /\(onClose\)/g,
		to: '(close)'
	},
	{
		files: '',
		from: /\(onTabSelect\)/g,
		to: '(tabSelect)'
	},
	{
		files: '',
		from: /\(onIndexChange\)/g,
		to: '(indexChange)'
	}
];
