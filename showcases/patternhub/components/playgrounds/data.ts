export type PlaygroundCardProps = {
	type?: 'stackblitz' | 'codesandbox' | string;
	hrefPath?: string;
	asset?: string;
	headline?: string;
	description?: string;
};

export const plagrounds: PlaygroundCardProps[] = [
	{
		headline: 'React 18',
		hrefPath: 'react-example',
		asset: '/assets/images/react-showcase.svg',
		description: 'React app including `@db-ux/react-core-components`'
	},
	{
		headline: 'Vue 3',
		hrefPath: 'vue-example',
		asset: '/assets/images/vue-showcase.svg',
		description: 'Vue app including `@db-ux/v-core-components`'
	},
	{
		headline: 'Angular 17',
		hrefPath: 'angular17-example',
		asset: '/assets/images/angular-showcase.svg',
		description: 'Angular app including `@db-ux/ngx-core-components`'
	},
	{
		headline: 'React 18 + tailwind',
		hrefPath: 'react-tailwind-example',
		asset: '/assets/images/react-wind-showcase.svg',
		description:
			'React + tailwind app including `@db-ux/react-core-components`'
	},
	{},
	{
		headline: 'React Shell Documentation Example',
		hrefPath: 'shell-examples/react-documentation-example',
		asset: '/assets/images/react-showcase.svg',
		description: 'How to build a documentation app with new `DBShell`'
	},
	{
		headline: 'React Shell KPI Example',
		hrefPath: 'shell-examples/react-kpi-example',
		asset: '/assets/images/react-showcase.svg',
		description: 'How to build a KPI app with new `DBShell`'
	},
	{
		headline: 'React Shell Table Example',
		hrefPath: 'shell-examples/react-table-example',
		asset: '/assets/images/react-showcase.svg',
		description: 'How to build a Table app with new `DBShell`'
	}
];
