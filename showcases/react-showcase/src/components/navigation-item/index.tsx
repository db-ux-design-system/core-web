import { DBNavigationItem, DBButton } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/navigation-item.json';
import type { DBNavigationItemProps } from '../../../../../output/react/src/components/navigation-item/model';
import { getVariants } from '../data';
import type { PatternhubComponentProps } from '../../../../shared/default-component-data';

const getNavigationItem = ({
	children,
	icon,
	disabled,
	active,
	width,
	areaPopup
}: DBNavigationItemProps) => (
	<DBNavigationItem
		icon={icon}
		disabled={disabled}
		active={active}
		width={width}
		areaPopup={areaPopup}
		onClick={() => {
			// eslint-disable-next-line no-alert
			alert(children.toString());
		}}
		subNavigation={
			areaPopup && (
				<>
					<DBNavigationItem>
						<a href="#">Test1</a>
					</DBNavigationItem>
					<DBNavigationItem>
						<a href="#">Test2</a>
					</DBNavigationItem>
				</>
			)
		}>
		{areaPopup ? children : <a href="#">{children}</a>}
	</DBNavigationItem>
);

const NavigationItemComponent = (props: PatternhubComponentProps) => {
	return (
		<DefaultComponent
			title="DBNavigationItem"
			// Patternhub:isSubComponent={props.isSubComponent}
			// Patternhub:componentName={props.componentName}
			variants={getVariants(
				defaultComponentVariants,
				getNavigationItem
			)}></DefaultComponent>
	);
};

export default NavigationItemComponent;
