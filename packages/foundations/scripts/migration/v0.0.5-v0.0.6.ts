import type { ReplaceInFileConfig } from 'replace-in-file';

export const v005_v006: ReplaceInFileConfig[] = [
	// Components
	{
		files: '',
		from: /behaviour="closable"/g,
		to: 'closable="true"'
	},
	{
		files: '',
		from: /variant="hidden"/g,
		to: 'showLabel="false"'
	},
	{
		files: '',
		from: /customValidity/g,
		to: 'validation'
	}
];
