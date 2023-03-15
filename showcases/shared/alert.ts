import { type DefaultComponentVariants } from './default-component-data';

const defaultComponentVariants: DefaultComponentVariants[] = [
	{
		name: 'Type',
		examples: [
			{
				name: '(Default) Alert',
				style: { width: '100%' }
			},
			{
				name: 'Inline',
				style: { width: '100%' }
			}
		]
	},
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Adaptive',
				style: { width: '100%' }
			},
			{
				name: 'Critical',
				style: { width: '100%' }
			},
			{
				name: 'Informational',
				style: { width: '100%' }
			},
			{
				name: 'Successful',
				style: { width: '100%' }
			},
			{
				name: 'Warning',
				style: { width: '100%' }
			}
		]
	},
	{
		name: 'Content',
		examples: [
			{
				name: 'Headline & Text & Link & Icon',
				style: { width: '100%' }
			},
			{
				name: 'Headline & Text & Link',
				style: { width: '100%' }
			},
			{
				name: 'Text & Link',
				style: { width: '100%' }
			},
			{
				name: 'Text',
				style: { width: '100%' }
			}
		]
	},
	{
		name: 'Behaviour',
		examples: [
			{
				name: 'Closable',
				style: { width: '100%' }
			},
			{
				name: 'Permanent',
				style: { width: '100%' }
			}
		]
	}
];

export default defaultComponentVariants;
