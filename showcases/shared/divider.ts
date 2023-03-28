import { type DefaultComponentVariants } from './default-component-data';

const defaultComponentVariants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Adaptive – Horizontal',
				style: { width: '100%' }
			},
			{
				name: 'Adaptive – Vertical',
				style: {
					height: '100px',
					display: 'flex',
					gap: '1rem'
				}
			}
		]
	}
];

export default defaultComponentVariants;
