import { type DefaultComponentVariants } from './default-component-data';

const defaultComponentVariants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Adaptive Outline'
			},
			{
				name: 'Primary'
			},
			{
				name: 'Transparent'
			},
			{
				name: 'Semi-Transparent'
			}
		]
	},
	{
		name: 'State',
		examples: [
			{
				name: 'Default: (Enabled, Hover, Pressed)'
			},
			{
				name: 'Loading'
			}
		]
	},
	{
		name: 'Size',
		examples: [
			{
				name: 'Default: Medium'
			},
			{
				name: 'Small'
			}
		]
	},
	{
		name: 'Content',
		examples: [
			{
				name: 'Default: Text'
			},
			{
				name: 'Icon & Text'
			},
			{
				name: 'Icon'
			}
		]
	},
	{
		name: 'Behaviour',
		examples: [
			{
				name: 'Default: Auto Width'
			},
			{
				name: 'Width full',
				style: { width: '500px' }
			}
		]
	}
];

export default defaultComponentVariants;
