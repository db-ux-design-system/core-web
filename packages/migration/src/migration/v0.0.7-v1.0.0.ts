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
	},
	{
		files: '',
		from: /"@db-ui\/migration": "0.7.4"/g,
		to: '"@db-ux/core-migration": "1.0.0"'
	},
	{
		files: '',
		from: /@db-ui\/migration/g,
		to: '@db-ux/core-migration'
	},
	{
		files: '',
		from: /"@db-ui\/stylelint": "0.7.4"/g,
		to: '"@db-ux/core-stylelint": "1.0.0"'
	},
	{
		files: '',
		from: /@db-ui\/stylelint/g,
		to: '@db-ux/core-stylelint'
	},
	{
		files: '',
		from: /"@db-ui\/foundations": "0.7.4"/g,
		to: '"@db-ux/core-foundations": "1.0.0"'
	},
	{
		files: '',
		from: /@db-ui\/foundations/g,
		to: '@db-ux/core-foundations'
	},
	{
		files: '',
		from: /"@db-ui\/components": "0.7.4"/g,
		to: '"@db-ux/core-components": "1.0.0"'
	},
	{
		files: '',
		from: /@db-ui\/components/g,
		to: '@db-ux/core-components'
	},
	{
		files: '',
		from: /"@db-ui\/ngx-components": "0.7.4"/g,
		to: '"@db-ux/ngx-core-components": "1.0.0"'
	},
	{
		files: '',
		from: /@db-ui\/ngx-components/g,
		to: '@db-ux/ngx-core-components'
	},
	{
		files: '',
		from: /"@db-ui\/react-components": "0.7.4"/g,
		to: '"@db-ux/react-core-components": "1.0.0"'
	},
	{
		files: '',
		from: /@db-ui\/react-components/g,
		to: '@db-ux/react-core-components'
	},
	{
		files: '',
		from: /"@db-ui\/v-components": "0.7.4"/g,
		to: '"@db-ux/v-core-components": "1.0.0"'
	},
	{
		files: '',
		from: /@db-ui\/v-components/g,
		to: '@db-ux/v-core-components'
	},
	{
		files: '',
		from: /"@db-ui\/web-components": "0.7.4"/g,
		to: '"@db-ux/wc-core-components": "1.0.0"'
	},
	{
		files: '',
		from: /@db-ui\/web-components/g,
		to: '@db-ux/wc-core-components'
	}
];
