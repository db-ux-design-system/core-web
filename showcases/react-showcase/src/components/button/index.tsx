import { DBButton } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/button';
import { DefaultComponentExample } from '../../../../shared/default-component-data';
import { DBButtonProps } from '../../../../../output/react/src/components/button/model';
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
		{ example: getButton({}) },
		{ example: getButton({ variant: 'primary' }) },
		{ example: getButton({ variant: 'transparent' }) },
		{ example: getButton({ variant: 'semi-transparent' }) }
	],
	[{ example: getButton({}) }, { example: getButton({ state: 'loading' }) }],
	[{ example: getButton({}) }, { example: getButton({ size: 'small' }) }],
	[
		{ example: getButton({}) },
		{
			example: getButton({ icon: 'account', icntxt: true })
		},
		{ example: getButton({ icon: 'account' }) }
	],
	[{ example: getButton({}) }, { example: getButton({ width: 'full' }) }]
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
