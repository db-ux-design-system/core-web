import { DBLink } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/link';
import { type DBLinkProps } from '../../../../../output/react/src/components/link/model';
import { getVariants } from '../../utils';

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
			example: getLink({ children: exampleName }),
			code: '<DBLink href="#">Link</DBLink>'
		},
		{
			example: getLink({ children: exampleName, variant: 'primary' }),
			code: '<DBLink href="#" variant="primary">Link</DBLink>'
		}
	],
	[
		{
			example: getLink({ children: exampleName }),
			code: '<DBLink href="#">Link</DBLink>'
		},
		{
			example: getLink({ children: exampleName, disabled: true }),
			code: '<DBLink href="#" disabled>Link</DBLink>'
		}
	],
	[
		{
			example: getLink({ children: exampleName }),
			code: '<DBLink href="#">Link</DBLink>'
		},
		{
			example: getLink({ children: exampleName, size: 'small' }),
			code: '<DBLink href="#" size="small">Link</DBLink>'
		}
	],
	[
		{
			example: getLink({ children: exampleName }),
			code: '<DBLink href="#">Link</DBLink>'
		},
		{
			example: getLink({ children: exampleName, content: 'external' }),
			code: '<DBLink href="#" content="external">Link</DBLink>'
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
