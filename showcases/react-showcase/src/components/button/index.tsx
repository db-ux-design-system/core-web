import { DBButton } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/button';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import { type DBButtonProps } from '../../../../../output/react/src/components/button/model';
import { getVariants } from '../../utils';

const getButton = ({
	variant,
	state,
	size,
	icntxt,
	icon,
	width,
	text
}: DBButtonProps) => (
	<DBButton
		variant={variant}
		state={state}
		size={size}
		icntxt={icntxt}
		icon={icon}
		width={width}>
		{text}
	</DBButton>
);

const getExampleMatrix = (exampleName: string): DefaultComponentExample[][] => [
	[
		{
			example: getButton({ text: exampleName }),
			code: '<DBButton>Button</DBButton>'
		},
		{
			example: getButton({ text: exampleName, variant: 'primary' }),
			code: '<DBButton variant="primary">Button</DBButton>'
		},
		{
			example: getButton({ text: exampleName, variant: 'transparent' }),
			code: '<DBButton variant="transparent">Button</DBButton>'
		},
		{
			example: getButton({
				text: exampleName,
				variant: 'semi-transparent'
			}),
			code: '<DBButton variant="semi-transparent">Button</DBButton>'
		}
	],
	[
		{
			example: getButton({ text: exampleName }),
			code: '<DBButton>Button</DBButton>'
		},
		{
			example: getButton({ text: exampleName, state: 'loading' }),
			code: '<DBButton state="loading">Button</DBButton>'
		}
	],
	[
		{
			example: getButton({ text: exampleName }),
			code: '<DBButton>Button</DBButton>'
		},
		{
			example: getButton({ text: exampleName, size: 'small' }),
			code: '<DBButton size="small">Button</DBButton>'
		}
	],
	[
		{
			example: getButton({ text: exampleName }),
			code: '<DBButton>Button</DBButton>'
		},
		{
			example: getButton({
				text: exampleName,
				icon: 'account',
				icntxt: true
			}),
			code: '<DBButton icon="account" icntxt>Button</DBButton>'
		},
		{
			example: getButton({ text: exampleName, icon: 'account' }),
			code: '<DBButton icon="account">Button</DBButton>'
		}
	],
	[
		{
			example: getButton({ text: exampleName }),
			code: '<DBButton>Button</DBButton>'
		},
		{
			example: getButton({ text: exampleName, width: 'full' }),
			code: '<DBButton width="full">Button</DBButton>'
		}
	]
];

const ButtonComponent = () => {
	return (
		<DefaultComponent
			title="DBButton"
			variants={getVariants(
				defaultComponentVariants,
				getExampleMatrix
			)}></DefaultComponent>
	);
};

export default ButtonComponent;
