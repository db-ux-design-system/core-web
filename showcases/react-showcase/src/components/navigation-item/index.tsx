import { DBNavigationItem, DBButton } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/navigation-item.json';
import type { DBNavigationItemProps } from '../../../../../output/react/src/components/navigation-item/model';
import { getVariants } from '../data';

const getNavigationItem = ({
	children,
	icon,
	disabled,
	active,
	width
}: DBNavigationItemProps) => (
	<DBNavigationItem
		icon={icon}
		disabled={disabled}
		active={active}
		width={width}
		onClick={() => {
			// eslint-disable-next-line no-alert
			alert(children.toString());
		}}>
		{children}
	</DBNavigationItem>
);

const NavigationItemComponent = () => {
	return (
		<DefaultComponent
			title="DBNavigationItem"
			variants={getVariants(
				defaultComponentVariants,
				getNavigationItem
			)}></DefaultComponent>
	);
};

export default NavigationItemComponent;
