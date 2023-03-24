import { DBRadio } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { getVariants } from '../data';
import defaultComponentVariants from '../../../../shared/radio.json';
import { type DBRadioProps } from '../../../../../output/react/src/components/radio/model';
import type { DefaultComponentExample } from '../../../../shared/default-component-data';

const getRadio = ({
	label,
	size,
	name,
	checked,
	invalid,
	required,
	children,
	disabled
}: DBRadioProps) => (
	<DBRadio
		label={label}
		size={size}
		name={name}
		checked={checked}
		invalid={invalid}
		required={required}
		disabled={disabled}>
		{children}
	</DBRadio>
);

const getExampleMatrix = (exampleName: string): DefaultComponentExample[][] => [
	[
		{
			example: getRadio({ children: exampleName, name: 'States' })
		},
		{
			example: getRadio({
				children: exampleName,
				disabled: true,
				name: 'States'
			})
		},
		{
			example: getRadio({
				children: exampleName,
				disabled: true,
				checked: true,
				name: 'SpecialState'
			})
		},
		{
			example: getRadio({
				children: exampleName,
				required: true,
				name: 'States'
			})
		},
		{
			example: getRadio({
				children: exampleName,
				checked: true,
				name: 'States'
			})
		},
		{
			example: getRadio({
				children: exampleName,
				invalid: true,
				name: 'States'
			})
		}
	],
	[
		{
			example: getRadio({ children: exampleName, name: 'Size' })
		},
		{
			example: getRadio({
				children: exampleName,
				name: 'Size',
				size: 'small'
			})
		}
	]
];

const RadioComponent = () => {
	return (
		<DefaultComponent
			title={'DBRadio'}
			variants={getVariants(
				defaultComponentVariants,
				getExampleMatrix
			)}></DefaultComponent>
	);
};

export default RadioComponent;
