import { DBLink } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import { type DefaultComponentExample } from '../../../../shared/default-component-data';
import defaultComponentVariants from '../../../../shared/link';
import { type DBLinkProps } from '../../../../../output/react/src/components/link/model';

const getLink = ({ variant, disabled, size, content }: DBLinkProps) => (
	<DBLink
		href="#"
		variant={variant}
		disabled={disabled}
		size={size}
		content={content}>
		Type something
	</DBLink>
);

const exampleMatrix: DefaultComponentExample[][] = [
	[
		{
			example: getLink({}),
			code: '<DBLink href="#">Type Something</DBLink>'
		},
		{
			example: getLink({ variant: 'primary' }),
			code: '<DBLink href="#" variant="primary">Type Something</DBLink>'
		}
	],
	[
		{
			example: getLink({}),
			code: '<DBLink href="#">Type Something</DBLink>'
		},
		{
			example: getLink({ disabled: true }),
			code: '<DBLink href="#" disabled>Type Something</DBLink>'
		}
	],
	[
		{
			example: getLink({}),
			code: '<DBLink href="#">Type Something</DBLink>'
		},
		{
			example: getLink({ size: 'small' }),
			code: '<DBLink href="#" size="small">Type Something</DBLink>'
		}
	],
	[
		{
			example: getLink({}),
			code: '<DBLink href="#">Type Something</DBLink>'
		},
		{
			example: getLink({ content: 'external' }),
			code: '<DBLink href="#" content="external">Type Something</DBLink>'
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

const LinkComponent = () => {
	return (
		<DefaultComponent
			title={'DBLink'}
			variants={variants}></DefaultComponent>
	);
};

export default LinkComponent;
