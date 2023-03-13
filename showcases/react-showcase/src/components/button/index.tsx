import { DBButton } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/button';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import { type DBButtonProps } from '../../../../../output/react/src/components/button/model';

const getButton = ({
	variant,
	state,
	size,
	icntxt,
	icon,
	width
}: DBButtonProps) => (
	<DBButton
		variant={variant}
		state={state}
		size={size}
		icntxt={icntxt}
		icon={icon}
		width={width}>
		Button
	</DBButton>
);

const exampleMatrix: DefaultComponentExample[][] = [
	[
		{ example: getButton({}), code: '<DBButton>Button</DBButton>' },
		{
			example: getButton({ variant: 'primary' }),
			code: '<DBButton variant="primary">Button</DBButton>'
		},
		{
			example: getButton({ variant: 'transparent' }),
			code: '<DBButton variant="transparent">Button</DBButton>'
		},
		{
			example: getButton({ variant: 'semi-transparent' }),
			code: '<DBButton variant="semi-transparent">Button</DBButton>'
		}
	],
	[
		{ example: getButton({}), code: '<DBButton>Button</DBButton>' },
		{
			example: getButton({ state: 'loading' }),
			code: '<DBButton state="loading">Button</DBButton>'
		}
	],
	[
		{ example: getButton({}), code: '<DBButton>Button</DBButton>' },
		{
			example: getButton({ size: 'small' }),
			code: '<DBButton size="small">Button</DBButton>'
		}
	],
	[
		{ example: getButton({}), code: '<DBButton>Button</DBButton>' },
		{
			example: getButton({ icon: 'account', icntxt: true }),
			code: '<DBButton icon="account" icntxt>Button</DBButton>'
		},
		{
			example: getButton({ icon: 'account' }),
			code: '<DBButton icon="account">Button</DBButton>'
		}
	],
	[
		{ example: getButton({}), code: '<DBButton>Button</DBButton>' },
		{
			example: getButton({ width: 'full' }),
			code: '<DBButton width="full">Button</DBButton>'
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

const ButtonComponent = () => {
	return (
		<DefaultComponent
			title="DBButton"
			variants={variants}></DefaultComponent>
	);
};

export default ButtonComponent;
