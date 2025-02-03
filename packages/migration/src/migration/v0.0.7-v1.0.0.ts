import type { ReplaceInFileConfig } from 'replace-in-file';

export const v007_v100: ReplaceInFileConfig[] = [
	{
		files: '',
		from: /container-color/g,
		to: 'color'
	},
	{
		files: '',
		from: /color-scheme/g,
		to: 'mode'
	}
];
