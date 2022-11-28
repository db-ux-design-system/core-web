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
					pre: 'convertTabs(tabs) {',
					post: 'convertTabs( tabs:any ) {'
				},
				{ pre: '[key]="tab.name"', post: '' }
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
