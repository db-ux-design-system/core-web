import { DBLink } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/link.json';
import { type DBLinkProps } from '../../../../../output/react/src/components/link/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getLink = ({
	href,
	variant,
	disabled,
	size,
	content,
	children,
	showIcon
}: DBLinkProps) => (
	<DBLink
		href={href}
		variant={variant}
		disabled={disabled}
		size={size}
		content={content}
		showIcon={showIcon}>
		{children}
	</DBLink>
);

const LinkComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title={'DBLink'}
			variants={getVariants(
				defaultComponentVariants,
				getLink,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default LinkComponent;
