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
		name: 'Direction',
		examples: [
			{
				name: '(Default) Column'
			},
			{
				name: 'Row'
			}
		]
	},
	{
		name: 'Variant',
		examples: [
			{
				name: 'Default: full-width'
			},
			{
				name: 'interactive'
			}
		]
	}
];

export default defaultComponentVariants;
