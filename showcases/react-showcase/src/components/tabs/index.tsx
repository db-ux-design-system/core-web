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

type ChildDefinition = {
	name: string;
	content?: string;
	props?: Record<string, any>;
	children?: ChildDefinition[];
};

/** Renders DBTabs from the JSON child definition (tabs.json `children`). */
const getTabsFromChildren = (
	tabsDef: ChildDefinition[],
	tabsProps: DBTabsProps
) => {
	const tabList = tabsDef.find((c) => c.name === 'tab-list');
	const panels = tabsDef.filter((c) => c.name === 'tab-panel');
	const tabItems = tabList?.children ?? [];

	return (
		<DBTabs {...tabsProps}>
			<DBTabList>
				{tabItems.map((item, i) => (
					<DBTabItem key={i} {...(item.props ?? {})}>
						{item.content}
					</DBTabItem>
				))}
			</DBTabList>
			{panels.map((panel, i) => (
				<DBTabPanel key={i}>{panel.content}</DBTabPanel>
			))}
		</DBTabs>
	);
};

/** Fallback hardcoded template for examples without explicit children. */
const getTabsFallback = ({
	children,
	orientation,
	tabItemWidth,
	tabItemAlignment,
	overflow,
	behavior,
	initialSelectedMode,
	initialSelectedIndex,
	arrowScrollDistance
}: DBTabsProps & { overflow: boolean }) => {
	const isTruncationExample = children?.toString().includes('truncation');
	const tabLabels = isTruncationExample
		? [
				'Very Long Tab Label That Should Be Truncated',
				'Another Long Label',
				'Short'
			]
		: ['Test 1', 'Test 2', 'Test 3'];

	return (
		<div className="w-full">
			<DBInfotext icon="none" size="small" semantic="informational">
				{children}:
			</DBInfotext>
			<DBTabs
				label={children?.toString()}
				orientation={orientation}
				tabItemWidth={tabItemWidth}
				tabItemAlignment={tabItemAlignment}
				behavior={behavior}
				initialSelectedIndex={initialSelectedIndex}
				initialSelectedMode={initialSelectedMode}
				arrowScrollDistance={arrowScrollDistance ?? 75}>
				<DBTabList>
					<DBTabItem>{tabLabels[0]}</DBTabItem>
					<DBTabItem>{tabLabels[1]}</DBTabItem>
					<DBTabItem>{tabLabels[2]}</DBTabItem>
					{overflow && (
						<>
							<DBTabItem>Test 4</DBTabItem>
							<DBTabItem>Test 5</DBTabItem>
						</>
					)}
				</DBTabList>
				<DBTabPanel ariaLabel={`${children?.toString()} Tab Panel 1`}>
					Tab Panel 1
				</DBTabPanel>
				<DBTabPanel ariaLabel={`${children?.toString()} Tab Panel 2`}>
					Tab Panel 2
				</DBTabPanel>
				<DBTabPanel ariaLabel={`${children?.toString()} Tab Panel 3`}>
					Tab Panel 3
				</DBTabPanel>
				{overflow && (
					<>
						<DBTabPanel
							ariaLabel={`${children?.toString()} Tab Panel 4`}>
							Tab Panel 4
						</DBTabPanel>
						<DBTabPanel
							ariaLabel={`${children?.toString()} Tab Panel 5`}>
							Tab Panel 5
						</DBTabPanel>
					</>
				)}
			</DBTabs>
		</div>
	);
};

const getTabs = (exampleProps: any) => {
	if (exampleProps._children && Array.isArray(exampleProps._children)) {
		const { _children, style, ...tabsProps } = exampleProps;
		return (
			<div className="w-full" style={style}>
				<DBInfotext icon="none" size="small" semantic="informational">
					{exampleProps.id}:
				</DBInfotext>
				{getTabsFromChildren(_children, tabsProps)}
			</div>
		);
	}

	return getTabsFallback(exampleProps);
};

const TabsComponent = (props: BaseComponentProps) => {
	const enrichedVariants = defaultComponentVariants.map((variant: any) => ({
		...variant,
		examples: variant.examples.map((example: any) => ({
			...example,
			props: {
				...example.props,
				...(variant.children ? { _children: variant.children } : {})
			}
		}))
	}));

	return (
		<DefaultComponent
			title="DBTabs"
			subComponent={props.subComponent}
			variants={getVariants(enrichedVariants, getTabs, props.slotCode)}
		/>
	);
};

export default TabsComponent;
