import type { ReplaceInFileConfig } from 'replace-in-file';

export const v006_v007: ReplaceInFileConfig[] = [
	{
		files: '',
		from: /db-ux-42-/g,
		to: ''
	},
	{
		files: '',
		from: /db-ux-42/g,
		to: 'relative'
	},
	{
		files: '',
		from: /db-ux-foundations-/g,
		to: ''
	},
	{
		files: '',
		from: /db-ux-foundations/g,
		to: 'relative'
	},
	{
		files: '',
		from: /foundations\/build\/css/g,
		to: 'foundations/build/styles'
	},
	{
		files: '',
		from: /foundations\/build\/scss/g,
		to: 'foundations/build/styles'
	}
];
