import type { Config } from 'stylelint';

export const defaultConfig: Config = {
	extends: ['stylelint-config-standard'],
	overrides: [
		{
			files: ['*.scss', '**/*.scss'],
			extends: ['stylelint-config-standard-scss']
		},
		{
			files: ['*.vue', '**/*.vue'],
			extends: [
				'stylelint-config-standard-scss',
				'stylelint-config-standard-vue/scss'
			]
		}
	]
};
