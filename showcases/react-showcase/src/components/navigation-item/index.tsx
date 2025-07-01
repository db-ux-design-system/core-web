import { DBNavigationItem } from '../../../../../output/react/src';
import type { DBNavigationItemProps } from '../../../../../output/react/src/components/navigation-item/model';
import defaultComponentVariants from '../../../../shared/navigation-item.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

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
				areaPopup && (
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
				)
			}>
			{areaPopup ? children : <a href="#">{children}</a>}
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
