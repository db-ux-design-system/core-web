import { DBSelect } from '../../../../../output/react/src';
import DefaultComponent, { type DefaultComponentVariants } from '../index';

const variants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default)',
				example: <DBSelect label="Label" />
			}
		]
	},
	{
		name: 'States',
		examples: [
			{ name: 'Default', example: <DBSelect label="Label" /> },
			{
				name: 'Disabled',
				example: <DBSelect label="Label" value="Select Text" disabled />
			},
			{
				name: 'Required',
				example: <DBSelect label="Label" value="Select Text" required />
			}
		]
	}
];

const SelectComponent = () => {
	return (
		<DefaultComponent
			title={'DBSelect'}
			variants={variants}></DefaultComponent>
	);
};

export default SelectComponent;
