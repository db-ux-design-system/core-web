import type { ReplaceInFileConfig } from 'replace-in-file';

export const v200_v300: ReplaceInFileConfig[] = [
	{
		files: '',
		from: /icon-before/g,
		to: 'icon-leading'
	},
	{
		files: '',
		from: /icon-after/g,
		to: 'icon-trailing'
	},
	{
		files: '',
		from: /iconBefore/g,
		to: 'iconLeading'
	},
	{
		files: '',
		from: /iconAfter/g,
		to: 'iconTrailing'
	},
	{
		files: '',
		from: /IconBefore/g,
		to: 'IconLeading'
	},
	{
		files: '',
		from: /IconAfter/g,
		to: 'IconTrailing'
	},
	{
		files: '',
		from: /labelledBy/g,
		to: 'aria-labelledby'
	},
	{
		files: '',
		from: /describedbyid/g,
		to: 'aria-describedby'
	},
	{
		files: '',
		from: /ariaexpanded/g,
		to: 'aria-expanded'
	},
	{
		files: '',
		from: /ariapressed/g,
		to: 'aria-pressed'
	},
	{
		files: '',
		from: /transparent-hovered/g,
		to: 'transparent-full-hovered'
	},
	{
		files: '',
		from: /transparent-pressed/g,
		to: 'transparent-full-pressed'
	}
];
