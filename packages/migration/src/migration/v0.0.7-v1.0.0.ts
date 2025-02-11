import type { ReplaceInFileConfig } from 'replace-in-file';

export const v007_v100: ReplaceInFileConfig[] = [
	{
		files: '',
		from: /db-container-color/g,
		to: 'db-color'
	},
	{
		files: '',
		from: /data-container-color/g,
		to: 'data-color'
	},
	{
		files: '',
		from: /data-color-scheme/g,
		to: 'data-mode'
	},
	{
		files: '',
		from: /behaviour=/g,
		to: 'behavior='
	},
	{
		files: '',
		from: /behaviour":/g,
		to: 'behavior":'
	},
	{
		files: '',
		from: /behaviour:/g,
		to: 'behavior:'
	},
	{
		files: '',
		from: /variant="with arrow"/g,
		to: 'showArrow="true"'
	},
	{
		files: '',
		from: /variant="basic"/g,
		to: 'showArrow="false"'
	}
];
