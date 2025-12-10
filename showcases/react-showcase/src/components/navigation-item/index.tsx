import { DBNavigationItem, DBNavigationItemGroup } from '@components';
import type { DBNavigationItemProps } from '@components/src/components/navigation-item/model';
import defaultComponentVariants from '../../../../shared/navigation-item.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getNavigationItem = ({
	children,
	icon,
	disabled,
	active,
	areaPopup,
	showIcon
}: DBNavigationItemProps & { areaPopup: boolean }) => (
	<ul className="nav-item-list">
		{areaPopup ? (
			<DBNavigationItemGroup
				icon={icon}
				showIcon={showIcon}
				text="Also a navigation item with longer label">
				<DBNavigationItem icon={icon} showIcon={showIcon}>
					<a href="#">Navigation-Item 1</a>
				</DBNavigationItem>
				<DBNavigationItem icon={icon} showIcon={showIcon}>
					<a href="#">Navigation-Item 2</a>
				</DBNavigationItem>
			</DBNavigationItemGroup>
		) : (
			<DBNavigationItem
				icon={icon}
				disabled={disabled}
				active={active}
				onClick={() => {
					// eslint-disable-next-line no-alert
					alert(children.toString());
				}}
				showIcon={showIcon}>
				{areaPopup ? children : <a href="#">{children}</a>}
			</DBNavigationItem>
		)}
	</ul>
);

const NavigationItemComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBNavigationItem"
			isSubComponent={props.isSubComponent}
			componentName={props.componentName}
			variants={getVariants(
				defaultComponentVariants,
				getNavigationItem,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default NavigationItemComponent;
