import { type DefaultComponentVariants } from './default-component-data';

const defaultComponentVariants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Adaptive'
			},
			{
				name: 'Primary'
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
				name: 'Disabled'
			}
		]
	},
	{
		name: 'Size',
		examples: [
			{
				name: '(Default) Medium'
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
				name: '(Default) Internal'
			},
			{
				name: 'External'
			}
		]
	}
];

export default defaultComponentVariants;
