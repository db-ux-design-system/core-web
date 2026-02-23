import {
	DBInfotext,
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs
} from '@components';
import type { DBTabsProps } from '@components/src/components/tabs/model';
import defaultComponentVariants from '../../../../shared/tabs.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getTabs = ({
	children,
	orientation,
	width,
	contentAlignment,
	overflow,
	behavior,
	initialSelectedMode,
	initialSelectedIndex
}: DBTabsProps & { overflow: boolean }) => (
	<div className="w-full">
		<DBInfotext icon="none" size="small" semantic="informational">
			{children}:
		</DBInfotext>
		<DBTabs
			name={children?.toString()}
			orientation={orientation}
			width={width}
			contentAlignment={contentAlignment}
			behavior={behavior}
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
			<DBTabPanel ariaLabel={`${children?.toString()} Tab Panel 1`}>Tab Panel 1</DBTabPanel>
			<DBTabPanel ariaLabel={`${children?.toString()} Tab Panel 2`}>Tab Panel 2</DBTabPanel>
			<DBTabPanel ariaLabel={`${children?.toString()} Tab Panel 3`}>Tab Panel 3</DBTabPanel>
			{overflow && (
				<>
					<DBTabPanel ariaLabel={`${children?.toString()} Tab Panel 4`}>Tab Panel 4</DBTabPanel>
					<DBTabPanel ariaLabel={`${children?.toString()} Tab Panel 5`}>Tab Panel 5</DBTabPanel>
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
