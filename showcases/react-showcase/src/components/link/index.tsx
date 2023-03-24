import { DBLink } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/link.json';
import { type DBLinkProps } from '../../../../../output/react/src/components/link/model';
import { getVariants } from '../data';

const getLink = ({
	variant,
	disabled,
	size,
	content,
	children
}: DBLinkProps) => (
	<DBLink
		href="#"
		variant={variant}
		disabled={disabled}
		size={size}
		content={content}>
		{children}
	</DBLink>
);

const getExampleMatrix = (exampleName: string): DefaultComponentExample[][] => [
	[
		{
			example: getLink({ children: exampleName })
		},
		{
			example: getLink({ children: exampleName, variant: 'primary' })
		}
	],
	[
		{
			example: getLink({ children: exampleName })
		},
		{
			example: getLink({ children: exampleName, disabled: true })
		}
	],
	[
		{
			example: getLink({ children: exampleName })
		},
		{
			example: getLink({ children: exampleName, size: 'small' })
		}
	],
	[
		{
			example: getLink({ children: exampleName })
		},
		{
			example: getLink({ children: exampleName, content: 'external' })
		}
	]
];

const LinkComponent = () => {
	return (
		<DefaultComponent
			title={'DBLink'}
			variants={getVariants(
				defaultComponentVariants,
				getExampleMatrix
			)}></DefaultComponent>
	);
};

export default LinkComponent;
