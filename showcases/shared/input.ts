import { DefaultComponentVariants } from './default-component-data';

const defaultComponentVariants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Basic'
			},
			{
				name: 'Information'
			},
			{
				name: 'Warning'
			},
			{
				name: 'Critical'
			},
			{
				name: 'Success'
			}
		]
	},
	{
		name: 'States',
		examples: [
			{ name: 'Default' },
			{
				name: 'Filled'
			},
			{
				name: 'Filled Number'
			},
			{
				name: 'Invalid'
			},
			{
				name: 'Disabled'
			},
			{
				name: 'Disabled with value'
			},
			{
				name: 'Required'
			}
		]
	},
	{
		name: 'Content',
		examples: [
			{
				name: '(Default) Text'
			},
			{
				name: 'Leading Icon + Text'
			},
			{
				name: 'Leading Icon + Text + Trailing Icon'
			},
			{
				name: 'Text + Trailing Icon'
			},
			{
				name: 'Text + Trailing Icon + Variant:Success'
			}
		]
	}
];

export default defaultComponentVariants;
