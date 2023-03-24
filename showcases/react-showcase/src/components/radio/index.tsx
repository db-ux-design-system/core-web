import { DBRadio } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { getVariants } from '../../utils';
import defaultComponentVariants from '../../../../shared/radio';
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
			example: getRadio({ children: exampleName, name: 'States' }),
			code: '<DBRadio name="States">Label</DBRadio>'
		},
		{
			example: getRadio({
				children: exampleName,
				disabled: true,
				name: 'States'
			}),
			code: '<DBRadio disabled name="States">Label</DBRadio>'
		},
		{
			example: getRadio({
				children: exampleName,
				disabled: true,
				checked: true,
				name: 'SpecialState'
			}),
			code: '<DBRadio disabled checked name="SpecialState">Label</DBRadio>'
		},
		{
			example: getRadio({
				children: exampleName,
				required: true,
				name: 'States'
			}),
			code: '<DBRadio required name="States">Label</DBRadio>'
		},
		{
			example: getRadio({
				children: exampleName,
				checked: true,
				name: 'States'
			}),
			code: '<DBRadio checked name="States">Label</DBRadio>'
		},
		{
			example: getRadio({
				children: exampleName,
				invalid: true,
				name: 'States'
			}),
			code: '<DBRadio invalid name="States">Label</DBRadio>'
		}
	],
	[
		{
			example: getRadio({ children: exampleName, name: 'Size' }),
			code: '<DBRadio name="Size">Label</DBRadio>'
		},
		{
			example: getRadio({
				children: exampleName,
				name: 'Size',
				size: 'small'
			}),
			code: '<DBRadio size="small" name="Size">Label</DBRadio>'
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
