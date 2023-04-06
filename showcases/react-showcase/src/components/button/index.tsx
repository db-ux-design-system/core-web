import { DBButton } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/button.json';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import { type DBButtonProps } from '../../../../../output/react/src/components/button/model';
import { getVariants } from '../data';

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
			example: getButton({ text: exampleName })
		},
		{
			example: getButton({ text: exampleName, variant: 'primary' })
		},
		{
			example: getButton({ text: exampleName, variant: 'transparent' })
		},
		{
			example: getButton({
				text: exampleName,
				variant: 'semi-transparent'
			})
		}
	],
	[
		{
			example: getButton({ text: exampleName })
		},
		{
			example: getButton({ text: exampleName, size: 'small' })
		}
	],
	[
		{
			example: getButton({ text: exampleName })
		},
		{
			example: getButton({
				text: exampleName,
				icon: 'account',
				icntxt: true
			})
		},
		{
			example: getButton({ text: exampleName, icon: 'account' })
		}
	],
	[
		{
			example: getButton({ text: exampleName })
		},
		{
			example: getButton({ text: exampleName, width: 'full' })
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
