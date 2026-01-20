import {
	For,
	onMount,
	onUnMount,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, uuid } from '../../utils';
import DBButton from '../button/button.lite';
import DBTabItem from '../tab-item/tab-item.lite';
import DBTabList from '../tab-list/tab-list.lite';
import DBTabPanel from '../tab-panel/tab-panel.lite';
import { DBSimpleTabProps, DBTabsProps, DBTabsState } from './model';

useMetadata({});
useDefaultProps<DBTabsProps>({});

export default function DBTabs(props: DBTabsProps) {
	const _ref = useRef<HTMLDivElement | any>(null);

	// We need to use 'any' here because we are adding helper methods (like handleClick, initTabs)
	// to the state that are required for Angular and React for event delegation,
	// but strictly typing them with DBTabsState would fail the React build because they are not part of the data interface.
	const state = useStore<any>({
		_id: 'tabs-base-id',
		_name: 'tabs-base-name',

		activeTabIndex: 0,
		initialized: false,
		showScrollLeft: false,
		showScrollRight: false,
		scrollContainer: null,
		_resizeObserver: undefined,

		activateTab(index: number) {
			if (state.activeTabIndex !== index) {
				state.activeTabIndex = index;
				if (props.onIndexChange) {
					props.onIndexChange(index);
				}
				state.initTabs();
			}
		},

		handleClick(event: any) {
			const target = event.target as HTMLElement;
			const button = target.closest('[role="tab"]');
			if (!button || !_ref) return;

			const tabList = _ref.querySelector('[role="tablist"]');
			if (!tabList) return;
			const buttons = Array.from(tabList.querySelectorAll('[role="tab"]'));
			const index = buttons.indexOf(button as HTMLElement);

			if (index !== -1) {
				event.preventDefault();
				state.activateTab(index);
			}
		},

		isIndexActive(index: number | string) {
			return state.activeTabIndex === Number(index);
		},

		getTabItemTabIndex(index: number | string) {
			const i = Number(index);
			return state.activeTabIndex === i ||
				(state.activeTabIndex === -1 && i === 0)
				? 0
				: -1;
		},

		// Parses the tabs prop to ensure the correct data structure
		convertTabs(): DBSimpleTabProps[] {
			try {
				if (typeof props.tabs === 'string') {
					return JSON.parse(props.tabs as string);
				}
				return props.tabs as DBSimpleTabProps[];
			} catch (error) {
				console.error(error);
			}
			return [];
		},

		// Determines the visibility of scroll buttons based on the container's scroll position
		evaluateScrollButtons(tList: Element) {
			const needsScroll = tList.scrollWidth > tList.clientWidth;
			state.showScrollLeft = needsScroll && tList.scrollLeft > 1;
			state.showScrollRight =
				needsScroll &&
				tList.scrollLeft < tList.scrollWidth - tList.clientWidth;
		},

		// Scrolls the tab list container horizontally by a specified distance
		scroll(left?: boolean) {
			let step = Number(props.arrowScrollDistance) || 100;
			if (left) {
				step *= -1;
			}
			state.scrollContainer?.scrollBy({
				top: 0,
				left: step,
				behavior: 'smooth'
			});
		},

		// Initializes the tab list container with ARIA attributes and scroll behavior logic
		initTabList() {
			if (_ref) {
				const tabList = _ref.querySelector('.db-tab-list');
				if (tabList) {
					const container: HTMLElement | null =
						tabList.querySelector('[role="tablist"]');
					if (container) {
						container.setAttribute(
							'aria-orientation',
							props.orientation || 'horizontal'
						);

						container.setAttribute('tabindex', '0');

						if (props.behavior === 'arrows') {
							state.scrollContainer = container;
							state.evaluateScrollButtons(container);
							container.addEventListener('scroll', () => {
								state.evaluateScrollButtons(container);
							});
							if (!state._resizeObserver) {
								const observer = new ResizeObserver(() => {
									state.evaluateScrollButtons(container);
								});
								observer.observe(container);
								state._resizeObserver = observer;
							}
						}

						if (props.name) {
							container.setAttribute(
								'aria-label',
								props.name ?? ''
							);
						}
					}
				}
			}
		},

		// Initializes tab items and panels, setting up IDs, ARIA attributes and event listeners
		initTabs() {
			if (_ref) {
				const tabListEl = _ref.querySelector(
					'.db-tab-list > [role="tablist"]'
				);
				const panels = Array.from<HTMLElement>(
					_ref.querySelectorAll('[role="tabpanel"]')
				);

				if (!tabListEl) return;

				const buttons = Array.from<HTMLElement>(
					tabListEl.querySelectorAll('[role="tab"]')
				);

				buttons.forEach((button, index) => {
					const isSelected = state.activeTabIndex === index;
					const panel = panels[index];

					if (
						button.getAttribute('aria-selected') !==
						String(isSelected)
					) {
						button.setAttribute(
							'aria-selected',
							isSelected ? 'true' : 'false'
						);
					}
					if (
						button.getAttribute('tabindex') !==
						(isSelected ? '0' : '-1')
					) {
						button.setAttribute(
							'tabindex',
							isSelected ? '0' : '-1'
						);
					}

					if (panel) {
						if (isSelected) {
							if (panel.hasAttribute('hidden')) {
								panel.removeAttribute('hidden');
							}
							panel.hidden = false;
						} else {
							if (!panel.hasAttribute('hidden')) {
								panel.setAttribute('hidden', '');
							}
							panel.hidden = true;
						}
					}
				});
			}
		}
	});

	onMount(() => {
		state._id = props.id || 'tabs-' + uuid();
		state._name = 'tabs-' + (props.name || uuid());

		if (props.initialSelectedIndex !== undefined) {
			const parsedIndex = Number(props.initialSelectedIndex);
			state.activeTabIndex = isNaN(parsedIndex) ? 0 : parsedIndex;
		} else if (props.initialSelectedMode === 'manually') {
			state.activeTabIndex = -1;
		}

		state.initialized = true;
	});

	onUnMount(() => {
		state._resizeObserver?.disconnect();
		state._resizeObserver = undefined;
	});

	onUpdate(() => {
		if (props.id && state._id !== props.id) {
			state._id = props.id;
		}
	}, [props.id]);

	onUpdate(() => {
		if (props.name) {
			const newName = `tabs-${props.name}`;
			if (state._name !== newName) {
				state._name = newName;
			}
		}
	}, [props.name]);

	onUpdate(() => {
		if (_ref && state.initialized) {
			state.initTabList();
			state.initTabs();

			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					if (
						mutation.removedNodes.length ||
						mutation.addedNodes.length
					) {
						state.initTabList();
						state.initTabs();
					}
				});
			});

			observer.observe(_ref, {
				childList: true,
				subtree: true
			});
		}
	}, [_ref, state.initialized, state.activeTabIndex]);

	return (
		<div
			ref={_ref}
			id={props.id ?? state._id}
			class={cls('db-tabs', props.className)}
			data-orientation={props.orientation}
			data-scroll-behavior={props.behavior}
			data-alignment={props.alignment ?? 'start'}
			data-width={props.width ?? 'auto'}
			onClick={(event) => state.handleClick(event)}>
			<Show when={state.showScrollLeft}>
				<DBButton
					class="tabs-scroll-left"
					variant="ghost"
					icon="chevron_left"
					type="button"
					noText
					onClick={() => state.scroll(true)}>
					Scroll left
				</DBButton>
			</Show>
			<Show when={props.tabs}>
				<DBTabList>
					<For each={state.convertTabs()}>
						{(tab: DBSimpleTabProps, index: number) => (
							<DBTabItem
								key={props.name + 'tab-item' + index}
								id={`${props.name ? 'tabs-' + props.name : state._name}-tab-${index}`}
								ariaControls={`${props.name ? 'tabs-' + props.name : state._name}-tab-panel-${index}`}
								active={state.isIndexActive(index)}
								tabIndex={state.getTabItemTabIndex(index)}
								label={tab.label}
								iconTrailing={tab.iconTrailing}
								icon={tab.icon}
								noText={tab.noText}
							/>
						)}
					</For>
				</DBTabList>
				<For each={state.convertTabs()}>
					{(tab: DBSimpleTabProps, index: number) => (
						<DBTabPanel
							key={props.name + 'tab-panel' + index}
							id={`${props.name ? 'tabs-' + props.name : state._name}-tab-panel-${index}`}
							ariaLabelledby={`${props.name ? 'tabs-' + props.name : state._name}-tab-${index}`}
							content={tab.content}
							hidden={!state.isIndexActive(index)}>
							{tab.children}
						</DBTabPanel>
					)}
				</For>
			</Show>
			<Show when={!props.tabs}>{props.children}</Show>
			<Show when={state.showScrollRight}>
				<DBButton
					class="tabs-scroll-right"
					variant="ghost"
					icon="chevron_right"
					type="button"
					noText
					onClick={() => state.scroll()}>
					Scroll right
				</DBButton>
			</Show>
		</div>
	);
}
