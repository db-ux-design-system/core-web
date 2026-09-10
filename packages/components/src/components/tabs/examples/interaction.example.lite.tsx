import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBTabItem from '../../tab-item/tab-item.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabPanel from '../../tab-panel/tab-panel.lite';
import DBTabs from '../tabs.lite';
import { StorybookTabsArgTypes } from './_tabs.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookTabsArgTypes
});

/**
 * Fixtures for the cross-framework interaction e2e tests
 * (see showcases/e2e/tabs/tabs-interaction.spec.ts).
 *
 * Each block is a self-contained scenario ported from the removed component
 * test:
 * - "click" verifies clicking a tab updates `aria-selected`.
 * - "value" / "no-value" verify `onValueChange` fires with the tab's `value`
 *   prop, or `undefined` when tabs have no `value` prop, reflected into a
 *   readout so the callback can be verified without reading a JS variable.
 * - "nested" verifies bubbled `input`/`change` events from a nested control
 *   inside a tab panel do not change the active tab (regression).
 * - "alignment" verifies the `tabItemAlignment` prop forwards to the root.
 */
export default function TabsInteraction() {
	const state = useStore({
		selectedValue: 'initial',
		nestedActiveIndex: 'initial',
		handleValueChange(value: string | undefined) {
			state.selectedValue = value ?? 'undefined';
		},
		handleNestedIndexChange(index: number) {
			state.nestedActiveIndex = String(index);
		}
	});

	return (
		<Fragment>
			<div class="fit-content-container" data-testid="click-tabs">
				<DBTabs>
					<DBTabList>
						<DBTabItem>Test 1</DBTabItem>
						<DBTabItem>Test 2</DBTabItem>
					</DBTabList>
					<DBTabPanel>Panel 1</DBTabPanel>
					<DBTabPanel>Panel 2</DBTabPanel>
				</DBTabs>
			</div>

			<div class="fit-content-container" data-testid="value-tabs">
				<DBTabs
					onValueChange={(value: string | undefined) =>
						state.handleValueChange(value)
					}>
					<DBTabList>
						<DBTabItem value="tab-a">Tab A</DBTabItem>
						<DBTabItem value="tab-b">Tab B</DBTabItem>
					</DBTabList>
					<DBTabPanel>Panel A</DBTabPanel>
					<DBTabPanel>Panel B</DBTabPanel>
				</DBTabs>
				<span data-testid="value-result">{state.selectedValue}</span>
			</div>

			<div class="fit-content-container" data-testid="nested-tabs">
				<DBTabs
					onIndexChange={(index: number) =>
						state.handleNestedIndexChange(index)
					}>
					<DBTabList>
						<DBTabItem>Tab 1</DBTabItem>
						<DBTabItem>Tab 2</DBTabItem>
					</DBTabList>
					<DBTabPanel>
						<label>
							<input
								data-testid="nested-checkbox"
								type="checkbox"
							/>
							Nested control
						</label>
					</DBTabPanel>
					<DBTabPanel>Panel 2</DBTabPanel>
				</DBTabs>
				<span data-testid="nested-result">
					{state.nestedActiveIndex}
				</span>
			</div>

			<div class="fit-content-container">
				<DBTabs data-testid="alignment-tabs" tabItemAlignment="center">
					<DBTabList>
						<DBTabItem>Test 1</DBTabItem>
					</DBTabList>
					<DBTabPanel>Content 1</DBTabPanel>
				</DBTabs>
			</div>

			{/* Regression guard for
			https://github.com/db-ux-design-system/core-web/issues/7405:
			tab items must not be clipped by a global maximum width. */}
			<div style={{ width: '100%' }} class="fit-content-container">
				<DBTabs data-testid="auto-width-tabs" tabItemWidth="auto">
					<DBTabList>
						<DBTabItem icon="x_placeholder">
							Tab item with a very long label that must not be cut
							off
						</DBTabItem>
						<DBTabItem>Short</DBTabItem>
					</DBTabList>
					<DBTabPanel>Panel 1</DBTabPanel>
					<DBTabPanel>Panel 2</DBTabPanel>
				</DBTabs>
			</div>
			<div style={{ width: '100%' }} class="fit-content-container">
				<DBTabs
					data-testid="vertical-width-tabs"
					orientation="vertical"
					tabItemWidth="auto">
					<DBTabList>
						<DBTabItem>
							Very long vertical tab label that definitely gets
							truncated
						</DBTabItem>
						<DBTabItem>Short</DBTabItem>
					</DBTabList>
					<DBTabPanel>Panel 1</DBTabPanel>
					<DBTabPanel>Panel 2</DBTabPanel>
				</DBTabs>
			</div>
			<div style={{ width: '100%' }} class="fit-content-container">
				<DBTabs data-testid="full-width-tabs" tabItemWidth="full">
					<DBTabList>
						<DBTabItem>Short</DBTabItem>
						<DBTabItem>
							A considerably longer full-width tab item label
						</DBTabItem>
					</DBTabList>
					<DBTabPanel>Panel 1</DBTabPanel>
					<DBTabPanel>Panel 2</DBTabPanel>
				</DBTabs>
			</div>
		</Fragment>
	);
}
