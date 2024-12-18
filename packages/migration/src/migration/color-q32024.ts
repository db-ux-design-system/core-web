import type { ReplaceInFileConfig } from 'replace-in-file';

export const colorQ32024: ReplaceInFileConfig[] = [
	// Basic backgrounds
	{
		files: '',
		from: /bg-lvl-1/g,
		to: 'bg-basic-level-1'
	},
	{
		files: '',
		from: /bg-lvl-2/g,
		to: 'bg-basic-level-2'
	},
	{
		files: '',
		from: /bg-lvl-3/g,
		to: 'bg-basic-level-3'
	},
	{
		files: '',
		from: /bg-transparent-full/g,
		to: 'bg-basic-transparent-full'
	},
	{
		files: '',
		from: /bg-transparent-semi/g,
		to: 'bg-basic-transparent-semi'
	},
	{
		files: '',
		from: /bg-transparent-hover/g,
		to: 'bg-basic-transparent-hovered'
	},
	{
		files: '',
		from: /bg-transparent-pressed/g,
		to: 'bg-basic-transparent-pressed'
	},
	{
		files: '',
		from: /on-bg-enabled/g,
		to: 'on-bg-basic-emphasis-100-default'
	},
	{
		files: '',
		from: /on-bg-hover/g,
		to: 'on-bg-basic-emphasis-100-hovered'
	},
	{
		files: '',
		from: /on-bg-pressed/g,
		to: 'on-bg-basic-emphasis-100-pressed'
	},
	{
		files: '',
		from: /on-bg-weak-enabled/g,
		to: 'on-bg-basic-emphasis-90-default'
	},
	{
		files: '',
		from: /on-bg-weak-hover/g,
		to: 'on-bg-basic-emphasis-90-hovered'
	},
	{
		files: '',
		from: /on-bg-weak-pressed/g,
		to: 'on-bg-basic-emphasis-90-pressed'
	},
	{
		files: '',
		from: /contrast-low-enabled/g,
		to: 'on-bg-basic-emphasis-70-default'
	},
	{
		files: '',
		from: /color-border/g,
		// We will replace adaptive-color afterward
		to: 'color-on-bg-basic-emphasis-60-default'
	},

	// Contrast -> inverted
	{
		files: '',
		from: /on-contrast-enabled/g,
		to: 'on-bg-inverted-default'
	},
	{
		files: '',
		from: /on-contrast-hover/g,
		to: 'on-bg-inverted-hovered'
	},
	{
		files: '',
		from: /on-contrast-pressed/g,
		to: 'on-bg-inverted-pressed'
	},
	{
		files: '',
		from: /contrast-high-enabled/g,
		to: 'bg-inverted-contrast-high-default'
	},
	{
		files: '',
		from: /contrast-high-hover/g,
		to: 'bg-inverted-contrast-high-hovered'
	},
	{
		files: '',
		from: /contrast-high-pressed/g,
		to: 'bg-inverted-contrast-high-pressed'
	},
	{
		files: '',
		from: /contrast-low-hover/g,
		to: 'bg-inverted-contrast-low-hovered'
	},
	{
		files: '',
		from: /contrast-low-pressed/g,
		to: 'bg-inverted-contrast-low-pressed'
	},

	// Rest
	{
		files: '',
		from: /-enabled/g,
		to: '-default'
	},
	{
		files: '',
		// Fix issues with double hovered
		from: /-hovereded/g,
		to: '-hovered'
	},
	{
		files: '',
		// Fix all old hover
		from: /-hover/g,
		to: '-hovered'
	},
	{
		files: '',
		// Fix issues with double hovered again
		from: /-hovereded/g,
		to: '-hovered'
	},
	{
		files: '',
		from: /current-color/g,
		to: 'adaptive'
	},
	{
		files: '',
		// Fix issues with current color mixin
		from: /set-adaptives/g,
		to: 'set-current-colors'
	}
];
