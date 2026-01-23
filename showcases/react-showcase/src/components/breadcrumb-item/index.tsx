import { DBBreadcrumbItem } from '@components';
import type { DBBreadcrumbItemProps } from '@components/src/components/breadcrumb-item/model';
import defaultComponentVariants from '../../../../shared/breadcrumb-item.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getBreadcrumbItem = ({
	href,
	text,
	icon,
	ariaCurrent,
	disabled,
	className,
	id
}: DBBreadcrumbItemProps) => (
	<nav className="db-breadcrumb" aria-label="Breadcrumb">
		<ol>
			<DBBreadcrumbItem
				href={href}
				text={text}
				icon={icon}
				ariaCurrent={ariaCurrent}
				disabled={disabled}
				className={className}
				id={id}
			/>
		</ol>
	</nav>
);

const BreadcrumbItemComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBBreadcrumbItem"
			isSubComponent={props.isSubComponent}
			componentName={props.componentName}
			variants={getVariants(
				defaultComponentVariants,
				getBreadcrumbItem,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default BreadcrumbItemComponent;
