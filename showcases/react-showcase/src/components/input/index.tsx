import { DBInput } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/input';
import { type DBInputProps } from '../../../../../output/react/src/components/input/model';
import { getVariants } from '../../utils';

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
			example: getInput({ children: exampleName }),
			code: '<DBInput label="Label" description="Description" />'
		},
		{
			example: getInput({
				children: exampleName,
				variant: 'informational'
			}),
			code: '<DBInput label="Label" description="Description" variant="informational"/>'
		},
		{
			example: getInput({ children: exampleName, variant: 'warning' }),
			code: '<DBInput label="Label" description="Description" variant="warning"/>'
		},
		{
			example: getInput({ children: exampleName, variant: 'critical' }),
			code: '<DBInput label="Label" description="Description" variant="critical"/>'
		},
		{
			example: getInput({ children: exampleName, variant: 'successful' }),
			code: '<DBInput label="Label" description="Description" variant="successful"/>'
		}
	],
	[
		{
			example: getInput({ children: exampleName }),
			code: '<DBInput label="Label" description="Description" />'
		},
		{
			example: getInput({ children: exampleName, value: 'Input Text' }),
			code: '<DBInput label="Label" value="Input Text"/>'
		},
		{
			example: getInput({
				children: exampleName,
				value: '123456',
				type: 'number'
			}),
			code: '<DBInput label="Label" value="123456" type="number"/>'
		},
		{
			example: getInput({
				children: exampleName,
				minLength: 5,
				required: true
			}),
			code: '<DBInput label="Label" minLength={5} required description="minLength=5"/>'
		},
		{
			example: getInput({ children: exampleName, disabled: true }),
			code: '<DBInput label="Label" disabled/>'
		},
		{
			example: getInput({
				children: exampleName,
				disabled: true,
				value: 'Input Text'
			}),
			code: '<DBInput label="Label" value="Input Text" disabled/>'
		},
		{
			example: getInput({
				children: exampleName,
				required: true,
				value: 'Input Text'
			}),
			code: '<DBInput label="Label" value="Input Text" disabled required/>'
		}
	],
	[
		{
			example: getInput({ children: exampleName }),
			code: '<DBInput label="Label"/>'
		},
		{
			example: getInput({ children: exampleName, icon: 'account' }),
			code: '<DBInput icon="account" label="Label"/>'
		},
		{
			example: getInput({
				children: exampleName,
				icon: 'account',
				iconAfter: 'edit'
			}),
			code: '<DBInput icon="account" label="Label" iconAfter="edit"/>'
		},
		{
			example: getInput({ children: exampleName, iconAfter: 'edit' }),
			code: '<DBInput label="Label" iconAfter="edit"/>'
		},
		{
			example: getInput({
				children: exampleName,
				iconAfter: 'edit',
				variant: 'successful'
			}),
			code: '<DBInput label="Label" iconAfter="edit" variant="successful"/>'
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
