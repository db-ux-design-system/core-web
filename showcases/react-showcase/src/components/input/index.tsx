import { DBInput } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/input';
import { DBInputProps } from '../../../../../output/react/src/components/input/model';

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
		{ example: getInput({}) },
		{
			example: getInput({ variant: 'information' })
		},
		{
			example: getInput({ variant: 'warning' })
		},
		{
			example: getInput({ variant: 'critical' })
		},
		{
			example: getInput({ variant: 'success' })
		}
	],
	[
		{ example: getInput({}) },
		{
			example: getInput({ value: 'Input Text' })
		},
		{
			example: getInput({ value: '123456', type: 'number' })
		},
		{
			example: getInput({ minLength: 5, required: true })
		},
		{ example: getInput({ disabled: true }) },
		{ example: getInput({ disabled: true, value: 'Input Text' }) },
		{ example: getInput({ required: true, value: 'Input Text' }) }
	],
	[
		{ example: getInput({}) },
		{
			example: getInput({ iconBefore: 'account' })
		},
		{
			example: getInput({ iconBefore: 'account', iconAfter: 'edit' })
		},
		{
			example: getInput({ iconAfter: 'edit' })
		},
		{
			example: getInput({ iconAfter: 'edit', variant: 'success' })
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
