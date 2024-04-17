import { DBTabItem } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/tab-item.json';
import type { DBTabItemProps } from '../../../../../output/react/src/components/tab-item/model';
import { getVariants } from '../data';
import type { PatternhubComponentProps } from '../../../../shared/default-component-data';

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

const TabItemComponent = (props: PatternhubComponentProps) => {
	return (
		<DefaultComponent
			title="DBTabItem"
			// Patternhub:isSubComponent={props.isSubComponent}
			// Patternhub:componentName={props.componentName}
			variants={getVariants(
				defaultComponentVariants,
				getTab
			)}></DefaultComponent>
	);
};

export default TabItemComponent;
