import { type DefaultComponentVariants } from './default-component-data';

const defaultComponentVariants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Full',
				style: { width: '100%' }
			},
			{
				name: 'Medium',
				style: { width: '100%' }
			},
			{
				name: 'Large',
				style: { width: '100%' }
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
				name: 'Large'
			},
			{
				name: 'Small'
			}
		]
	}
];

export default defaultComponentVariants;
