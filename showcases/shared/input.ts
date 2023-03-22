import { type DefaultComponentVariants } from './default-component-data';

const defaultComponentVariants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Basic'
			},
			{
				name: 'Informational'
			},
			{
				name: 'Warning'
			},
			{
				name: 'Critical'
			},
			{
				name: 'Successful'
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
				name: 'Text + Trailing Icon + Variant:Successful'
			}
		]
	}
];

export default defaultComponentVariants;
