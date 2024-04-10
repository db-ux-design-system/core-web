import { DBTabItem } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/tab-item.json';
import type { DBTabItemProps } from '../../../../../output/react/src/components/tab-item/model';
import { getVariants } from '../data';

const getTab = ({
	children,
	active,
	noText,
	icon,
	iconAfter,
	disabled
}: DBTabItemProps) => (
	<DBTabItem
		active={active}
		noText={noText}
		icon={icon}
		iconAfter={iconAfter}
		disabled={disabled}>
		{children}
	</DBTabItem>
);

const TabItemComponent = () => {
	return (
		<DefaultComponent
			title="DBTabItem"
			variants={getVariants(
				defaultComponentVariants,
				getTab
			)}></DefaultComponent>
	);
};

export default TabItemComponent;
