import type { ReplaceInFileConfig } from 'replace-in-file';

export const v300_v400: ReplaceInFileConfig[] = [
	{
		files: '',
		from: /ariaListLabel/g,
		to: 'listLabel'
	},
	{
		files: '',
		from: /aria-list-label/g,
		to: 'list-label'
	}
];
