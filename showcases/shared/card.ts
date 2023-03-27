import { type DefaultComponentVariants } from './default-component-data';

const defaultComponentVariants: DefaultComponentVariants[] = [
	{
		name: 'ColorVariant',
		examples: [
			{
				name: '(Default) neutral-0'
			},
			{
				name: 'neutral-1'
			},
			{
				name: 'neutral-3'
			},
			{
				name: 'neutral-4'
			},
			{
				name: 'primary'
			},
			{
				name: 'secondary'
			},
			{
				name: 'critical'
			},
			{
				name: 'successful'
			},
			{
				name: 'warning'
			},
			{
				name: 'informational'
			}
		]
	},
	{
		name: 'Spacing',
		examples: [
			{
				name: '(Default) No Spacing'
			},
			{
				name: 'Medium'
			},
			{
				name: 'Small'
			}
		]
	},
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Non interactive'
			},
			{
				name: 'Interactive'
			}
		]
	}
];

export default defaultComponentVariants;
