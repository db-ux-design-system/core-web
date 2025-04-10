import type { ReplaceInFileConfig } from 'replace-in-file';

export const v100_v200: ReplaceInFileConfig[] = [
	{
		files: '',
		from: /border-height/g,
		to: 'border-width'
	},
	/* Angular changes */
	{
		files: '',
		from: /\(onClick\)/g,
		to: 'click'
	},
	{
		files: '',
		from: /\(onChange\)/g,
		to: 'change'
	},
	{
		files: '',
		from: /\(onFocus\)/g,
		to: 'focus'
	},
	{
		files: '',
		from: /\(onBlur\)/g,
		to: 'blur'
	},
	{
		files: '',
		from: /\(onInput\)/g,
		to: 'input'
	},
	{
		files: '',
		from: /\(onRemove\)/g,
		to: 'remove'
	},
	{
		files: '',
		from: /\(onSelect\)/g,
		to: 'select'
	},
	{
		files: '',
		from: /\(onToggle\)/g,
		to: 'toggle'
	},
	{
		files: '',
		from: /\(onClose\)/g,
		to: 'close'
	},
	{
		files: '',
		from: /\(onTabSelect\)/g,
		to: 'tabSelect'
	},
	{
		files: '',
		from: /\(onIndexChange\)/g,
		to: 'indexChange'
	}
];
