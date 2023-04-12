import { DBLink } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/link.json';
import { type DBLinkProps } from '../../../../../output/react/src/components/link/model';
import { getVariants } from '../data';

const getLink = ({
	href,
	variant,
	disabled,
	size,
	content,
	children
}: DBLinkProps) => (
	<DBLink
		href={href}
		variant={variant}
		disabled={disabled}
		size={size}
		content={content}>
		{children}
	</DBLink>
);

const LinkComponent = () => {
	return (
		<DefaultComponent
			title={'DBLink'}
			variants={getVariants(
				defaultComponentVariants,
				getLink
			)}></DefaultComponent>
	);
};

export default LinkComponent;
