import type { ReplaceInFileConfig } from 'replace-in-file';

export const v100_v200: ReplaceInFileConfig[] = [
	{
		files: '',
		from: /border-height/g,
		to: 'border-width'
	}
];
