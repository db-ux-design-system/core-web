import { DBLink } from '../../../../../output/react/src';
import { type DBLinkProps } from '../../../../../output/react/src/components/link/model';
import defaultComponentVariants from '../../../../shared/link.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getLink = ({
	href,
	variant,
	disabled,
	size,
	content,
	children,
	showIcon,
	wrap
}: DBLinkProps) => (
	<DBLink
		href={href}
		variant={variant}
		disabled={disabled}
		size={size}
		content={content}
		showIcon={showIcon}
		wrap={wrap}>
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
