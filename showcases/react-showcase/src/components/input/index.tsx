import { DBInput } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/input.json';
import { type DBInputProps } from '../../../../../output/react/src/components/input/model';
import { getVariants } from '../data';

const getInput = ({
	variant,
	value,
	type,
	minLength,
	required,
	disabled,
	iconAfter,
	icon,
	children
}: DBInputProps) => (
	<DBInput
		label="Label"
		description={children}
		variant={variant}
		value={value}
		type={type}
		minLength={minLength}
		required={required}
		disabled={disabled}
		iconAfter={iconAfter}
		icon={icon}
	/>
);

const getExampleMatrix = (exampleName: string): DefaultComponentExample[][] => [
	[
		{
			example: getInput({ children: exampleName })
		},
		{
			example: getInput({
				children: exampleName,
				variant: 'informational'
			})
		},
		{
			example: getInput({ children: exampleName, variant: 'warning' })
		},
		{
			example: getInput({ children: exampleName, variant: 'critical' })
		},
		{
			example: getInput({ children: exampleName, variant: 'successful' })
		}
	],
	[
		{
			example: getInput({ children: exampleName })
		},
		{
			example: getInput({ children: exampleName, value: 'Input Text' })
		},
		{
			example: getInput({
				children: exampleName,
				value: '123456',
				type: 'number'
			})
		},
		{
			example: getInput({
				children: exampleName,
				minLength: 5,
				required: true
			})
		},
		{
			example: getInput({ children: exampleName, disabled: true })
		},
		{
			example: getInput({
				children: exampleName,
				disabled: true,
				value: 'Input Text'
			})
		},
		{
			example: getInput({
				children: exampleName,
				required: true,
				value: 'Input Text'
			})
		}
	],
	[
		{
			example: getInput({ children: exampleName })
		},
		{
			example: getInput({ children: exampleName, icon: 'account' })
		},
		{
			example: getInput({
				children: exampleName,
				icon: 'account',
				iconAfter: 'edit'
			})
		},
		{
			example: getInput({ children: exampleName, iconAfter: 'edit' })
		},
		{
			example: getInput({
				children: exampleName,
				iconAfter: 'edit',
				variant: 'successful'
			})
		}
	]
];

const InputComponent = () => {
	return (
		<DefaultComponent
			title={'DBInput'}
			variants={getVariants(
				defaultComponentVariants,
				getExampleMatrix
			)}></DefaultComponent>
	);
};

export default InputComponent;
