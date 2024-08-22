import {
	DBTabs,
	DBTabList,
	DBTabItem,
	DBTabPanel,
	DBInfotext
} from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/tabs.json';
import type { DBTabsProps } from '../../../../../output/react/src/components/tabs/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getTabs = ({
	children,
	orientation,
	width,
	alignment,
	overflow,
	behaviour,
	initialSelectedMode,
	initialSelectedIndex
}: DBTabsProps & { overflow: boolean }) => (
	<div className="w-full">
		<DBInfotext icon="none" size="small" semantic="informational">
			{children}:
		</DBInfotext>
		<DBTabs
			orientation={orientation}
			width={width}
			alignment={alignment}
			behaviour={behaviour}
			initialSelectedIndex={initialSelectedIndex}
			initialSelectedMode={initialSelectedMode}
			arrowScrollDistance={75}>
			<DBTabList>
				<DBTabItem>Test 1</DBTabItem>
				<DBTabItem>Test 2</DBTabItem>
				<DBTabItem>Test 3</DBTabItem>
				{overflow && (
					<>
						<DBTabItem>Test 4</DBTabItem>
						<DBTabItem>Test 5</DBTabItem>
					</>
				)}
			</DBTabList>
			<DBTabPanel>Tab Panel 1</DBTabPanel>
			<DBTabPanel>Tab Panel 2</DBTabPanel>
			<DBTabPanel>Tab Panel 3</DBTabPanel>
			{overflow && (
				<>
					<DBTabPanel>Tab Panel 4</DBTabPanel>
					<DBTabPanel>Tab Panel 5</DBTabPanel>
				</>
			)}
		</DBTabs>
	</div>
);

const TabsComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBTabs"
			subComponent={props.subComponent}
			variants={getVariants(
				defaultComponentVariants,
				getTabs,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default TabsComponent;
