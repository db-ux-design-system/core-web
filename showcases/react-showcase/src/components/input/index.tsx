import { DBInput } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/input';
import { type DBInputProps } from '../../../../../output/react/src/components/input/model';

const getInput = ({
	variant,
	value,
	type,
	minLength,
	required,
	disabled,
	iconAfter,
	iconBefore
}: DBInputProps) => (
	<DBInput
		label="Label"
		description="Description"
		variant={variant}
		value={value}
		type={type}
		minLength={minLength}
		required={required}
		disabled={disabled}
		iconAfter={iconAfter}
		iconBefore={iconBefore}
	/>
);

const exampleMatrix: DefaultComponentExample[][] = [
	[
		{
			example: getInput({}),
			code: '<DBInput label="Label" description="Description" />'
		},
		{
			example: getInput({ variant: 'informational' }),
			code: '<DBInput label="Label" description="Description" variant="informational"/>'
		},
		{
			example: getInput({ variant: 'warning' }),
			code: '<DBInput label="Label" description="Description" variant="warning"/>'
		},
		{
			example: getInput({ variant: 'critical' }),
			code: '<DBInput label="Label" description="Description" variant="critical"/>'
		},
		{
			example: getInput({ variant: 'successful' }),
			code: '<DBInput label="Label" description="Description" variant="successful"/>'
		}
	],
	[
		{
			example: getInput({}),
			code: '<DBInput label="Label" description="Description" />'
		},
		{
			example: getInput({ value: 'Input Text' }),
			code: '<DBInput label="Label" value="Input Text"/>'
		},
		{
			example: getInput({ value: '123456', type: 'number' }),
			code: '<DBInput label="Label" value="123456" type="number"/>'
		},
		{
			example: getInput({ minLength: 5, required: true }),
			code: '<DBInput label="Label" minLength={5} required description="minLength=5"/>'
		},
		{
			example: getInput({ disabled: true }),
			code: '<DBInput label="Label" disabled/>'
		},
		{
			example: getInput({ disabled: true, value: 'Input Text' }),
			code: '<DBInput label="Label" value="Input Text" disabled/>'
		},
		{
			example: getInput({ required: true, value: 'Input Text' }),
			code: '<DBInput label="Label" value="Input Text" disabled required/>'
		}
	],
	[
		{
			example: getInput({}),
			code: '<DBInput label="Label"/>'
		},
		{
			example: getInput({ icon: 'account' }),
			code: '<DBInput iconBefore="account" label="Label"/>'
		},
		{
			example: getInput({ icon: 'account', iconAfter: 'edit' }),
			code: '<DBInput iconBefore="account" label="Label" iconAfter="edit"/>'
		},
		{
			example: getInput({ iconAfter: 'edit' }),
			code: '<DBInput label="Label" iconAfter="edit"/>'
		},
		{
			example: getInput({ iconAfter: 'edit', variant: 'successful' }),
			code: '<DBInput label="Label" iconAfter="edit" variant="successful"/>'
		}
	]
];

const variants = defaultComponentVariants.map((variant, index) => ({
	...variant,
	examples: variant.examples.map((example, exampleIndex) => ({
		...example,
		...exampleMatrix[index][exampleIndex]
	}))
}));

const InputComponent = () => {
	return (
		<DefaultComponent
			title={'DBInput'}
			variants={variants}></DefaultComponent>
	);
};

export default InputComponent;
