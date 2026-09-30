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
 *
 * Stencil note: the `onValueChange` / `onIndexChange` callback props are not
 * wired up by the Stencil JSX runtime - on a web component it emits the
 * `valueChange` / `indexChange` DOM CustomEvent (via Stencil EventEmitter)
 * instead. So for Stencil we attach the listeners on the host ref in onMount
 * and read the payload from `event.detail`, while React, Vue and Angular keep
 * using the callback prop directly (Angular binds it to the same output).
 */
export default function TabsInteraction() {
	const valueTabsRef = useRef<any>(null);
	const noValueTabsRef = useRef<any>(null);
	const nestedTabsRef = useRef<any>(null);

	const state = useStore({
		selectedValue: 'initial',
		noValueSelected: 'initial',
		nestedActiveIndex: 'initial',
		handleValueChange(value: any) {
			state.selectedValue = value ?? 'undefined';
		},
		handleNoValueChange(value: any) {
			state.noValueSelected = value ?? 'undefined';
		},
		handleNestedIndexChange(index: any) {
			state.nestedActiveIndex = String(index);
		}
	});

	onMount(() => {
		useTarget({
			stencil: () => {
				if (valueTabsRef) {
					valueTabsRef.addEventListener('valueChange', (event: any) =>
						state.handleValueChange(event?.detail)
					);
				}

				if (noValueTabsRef) {
					noValueTabsRef.addEventListener(
						'valueChange',
						(event: any) => state.handleNoValueChange(event?.detail)
					);
				}

				if (nestedTabsRef) {
					nestedTabsRef.addEventListener(
						'indexChange',
						(event: any) =>
							state.handleNestedIndexChange(event?.detail)
					);
				}
			}
		});
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

			<div
				class="fit-content-container"
				data-testid="value-tabs"
				data-sb-ignore="true">
				<DBTabs
					ref={valueTabsRef}
					onValueChange={(value: any) =>
						state.handleValueChange(value)
					}>
					<DBTabList>
						<DBTabItem value="tab-a">Tab A</DBTabItem>
						<DBTabItem value="tab-b">Tab B</DBTabItem>
					</DBTabList>
					<DBTabPanel>Panel A</DBTabPanel>
					<DBTabPanel>Panel B</DBTabPanel>
				</DBTabs>
				<span data-testid="value-result" data-sb-replace="initial">
					{state.selectedValue}
				</span>
			</div>

			<div
				class="fit-content-container"
				data-testid="no-value-tabs"
				data-sb-ignore="true">
				<DBTabs
					ref={noValueTabsRef}
					onValueChange={(value: any) =>
						state.handleNoValueChange(value)
					}>
					<DBTabList>
						<DBTabItem>Tab 1</DBTabItem>
						<DBTabItem>Tab 2</DBTabItem>
					</DBTabList>
					<DBTabPanel>Panel 1</DBTabPanel>
					<DBTabPanel>Panel 2</DBTabPanel>
				</DBTabs>
				<span data-testid="no-value-result" data-sb-replace="initial">
					{state.noValueSelected}
				</span>
			</div>

			<div
				class="fit-content-container"
				data-testid="nested-tabs"
				data-sb-ignore="true">
				<DBTabs
					ref={nestedTabsRef}
					onIndexChange={(index: any) =>
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
				<span data-testid="nested-result" data-sb-replace="initial">
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
