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
	[{ example: getLink({}) }, { example: getLink({ variant: 'primary' }) }],
	[{ example: getLink({}) }, { example: getLink({ disabled: true }) }],
	[{ example: getLink({}) }, { example: getLink({ size: 'small' }) }],
	[{ example: getLink({}) }, { example: getLink({ content: 'external' }) }]
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
