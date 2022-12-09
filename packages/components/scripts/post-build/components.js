module.exports = [
	{
		name: 'divider',
		defaultStylePath: 'components/divider/divider.css'
	},

	{
		name: 'card',
		defaultStylePath: 'components/card/card.css'
	},

	{
		name: 'tab-bar',
		defaultStylePath: 'components/tab-bar/tab-bar.css',
		overwrites: {
			angular: [
				{
					from: 'convertTabs(tabs) {',
					to: 'convertTabs( tabs:any ) {'
				},
				{ from: '[key]="tab.name"', to: '' }
			],
			react: [
				{
					from: 'convertTabs(tabs) {',
					to: 'convertTabs( tabs:any ) {'
				},
				{
					from: 'convertTabs(props.tabs)?.map((tab)',
					to: 'convertTabs(props.tabs)?.map((tab:any)'
				},
				{
					from: 'import type { DBTabProps } from "../tab/model";',
					to: ''
				}
			]
		}
	},

	{
		name: 'tab',
		defaultStylePath: 'components/tab/tab.css'
	},

	{
		name: 'button',
		defaultStylePath: 'components/button/button.css'
	},
	{
		name: 'icon',
		defaultStylePath: 'base/css/icon/icons.css'
	}
];
