import type { ReplaceInFileConfig } from 'replace-in-file';

export const v200_v300: ReplaceInFileConfig[] = [
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
	}
];
