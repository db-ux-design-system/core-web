import { DBTabItem, DBTabList } from '../../../../../output/react/src';
import type { DBTabItemProps } from '../../../../../output/react/src/components/tab-item/model';
import defaultComponentVariants from '../../../../shared/tab-item.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getTab = ({
	children,
	active,
	noText,
	icon,
	iconAfter,
	disabled
}: DBTabItemProps) => (
	<DBTabList>
		<DBTabItem
			active={active}
			noText={noText}
			icon={icon}
			iconAfter={iconAfter}
			disabled={disabled}>
			{children}
		</DBTabItem>
	</DBTabList>
);

const TabItemComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBTabItem"
			isSubComponent={props.isSubComponent}
			componentName={props.componentName}
			variants={getVariants(
				defaultComponentVariants,
				getTab,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default TabItemComponent;
