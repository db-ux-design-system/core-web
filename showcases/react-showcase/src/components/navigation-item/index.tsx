import { DBNavigationItem, DBButton } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/navigation-item.json';
import type { DBNavigationItemProps } from '../../../../../output/react/src/components/navigation-item/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getNavigationItem = ({
	children,
	icon,
	disabled,
	active,
	width,
	areaPopup,
	showIcon,
	wrap
}: DBNavigationItemProps & { areaPopup: boolean }) => (
	<ul className="nav-item-list">
		<DBNavigationItem
			icon={icon}
			disabled={disabled}
			active={active}
			width={width}
			onClick={() => {
				// eslint-disable-next-line no-alert
				alert(children.toString());
			}}
			showIcon={showIcon}
			wrap={wrap}
			subNavigation={
				<>
					<DBNavigationItem
						icon={icon}
						showIcon={showIcon}
						subNavigation={
							<>
								<DBNavigationItem
									icon={icon}
									showIcon={showIcon}>
									<a href="#">Navigation-Item 2</a>
								</DBNavigationItem>
							</>
						}>
						Also a navigation item with longer label
					</DBNavigationItem>
					<DBNavigationItem icon={icon} showIcon={showIcon}>
						<a href="#">Navigation-Item 1</a>
					</DBNavigationItem>
				</>
			}>
			{children}
		</DBNavigationItem>
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
