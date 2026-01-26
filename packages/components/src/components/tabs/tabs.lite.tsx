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

interface DBTabsLocalState extends DBTabsState {
	getTabId: (index: number | string) => string;
	getPanelId: (index: number | string) => string;
	handleClick: (event: any) => void;
	handleKeyDown: (event: any) => void;
	isIndexActive: (index: number | string) => boolean;
	getTabItemTabIndex: (index: number | string) => 0 | -1;
}

export default function DBTabs(props: DBTabsProps) {
	const _ref = useRef<HTMLDivElement | null>(null);

	const state = useStore<DBTabsLocalState>({
		_id: 'tabs-base-id',
		_name: 'tabs-base-name',

		activeTabIndex: 0,
		initialized: false,
		showScrollLeft: false,
		showScrollRight: false,
		scrollContainer: null,
		_resizeObserver: undefined,

		getTabId(index: number | string) {
			const name = props.name ? 'tabs-' + props.name : state._name;
			return `${name}-tab-${index}`;
		},

		getPanelId(index: number | string) {
			const name = props.name ? 'tabs-' + props.name : state._name;
			return `${name}-tab-panel-${index}`;
		},

		activateTab(index: number) {
			if (state.activeTabIndex !== index) {
				state.activeTabIndex = index;
				if (props.onIndexChange) {
					props.onIndexChange(index);
				}
				// re-initialize tabs to update aria-selected and hidden attributes immediately
				state.initTabs();
			}
		},

		handleClick(event: any) {
			if (props.tabs) {
				return;
			}

			const target = event.target as HTMLElement;
			const button = target.closest('[role="tab"]');
			if (!button || !_ref) return;

			const tabList = _ref?.querySelector('[role="tablist"]');
			if (!tabList) return;
			const buttons = Array.from(
				tabList.querySelectorAll('[role="tab"]')
			);
			const index = buttons.indexOf(button as HTMLElement);

			if (index !== -1) {
				event.preventDefault();
				state.activateTab(index);
			}
		},

		handleKeyDown(event: any) {
			if (!_ref) return;

			const key = event.key;
			const navigationKeys = [
				'ArrowRight',
				'ArrowDown',
				'ArrowLeft',
				'ArrowUp',
				'Home',
				'End',
				'Enter',
				' '
			];

			if (!navigationKeys.includes(key)) {
				return;
			}

			const tabList = _ref.querySelector('[role="tablist"]');
			if (!tabList) return;
			const buttons = Array.from(
				tabList.querySelectorAll('[role="tab"]')
			);

			// find currently focused element within the buttons list
			let currentIndex = -1;
			if (typeof document !== 'undefined' && document.activeElement) {
				const focusedButton = (
					document.activeElement as HTMLElement
				).closest('[role="tab"]');
				if (focusedButton) {
					currentIndex = buttons.indexOf(
						focusedButton as HTMLElement
					);
				}
			}

			if (currentIndex === -1) {
				currentIndex = state.activeTabIndex;
			}

			if (buttons.length > 0) {
				// handle activation (enter / space) -> change panel
				if (key === 'Enter' || key === ' ') {
					event.preventDefault();
					state.activateTab(currentIndex);
					return;
				}

				// handle navigation (arrows) -> moves focus
				let nextIndex: number | undefined;
				const length = buttons.length;

				if (key === 'ArrowRight' || key === 'ArrowDown') {
					nextIndex = (currentIndex + 1) % length;
				} else if (key === 'ArrowLeft' || key === 'ArrowUp') {
					nextIndex = (currentIndex - 1 + length) % length;
				} else if (key === 'Home') {
					nextIndex = 0;
				} else if (key === 'End') {
					nextIndex = length - 1;
				}

				if (nextIndex !== undefined) {
					event.preventDefault();
					// do not activateTab here for manual activation, just move the focus
					const nextButton = buttons[nextIndex] as HTMLElement;
					if (nextButton) {
						nextButton.focus();
					}
				}
			}
		},

		isIndexActive(index: number | string) {
			return state.activeTabIndex === Number(index);
		},

		getTabItemTabIndex(index: number | string) {
			const i = Number(index);
			// only the active tab should be reachable via Tab key
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
			// check if we are at the end of the scrollable area
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
				const tabList = _ref?.querySelector('.db-tab-list');
				if (tabList) {
					const container: HTMLElement | null =
						tabList.querySelector('[role="tablist"]');
					if (container) {
						// explicitly set aria-orientation for screen readers to understand navigation direction
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
							// resizeObserver ensures scroll arrows appear/disappear when the window size changes
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
				const tabListEl = _ref?.querySelector(
					'.db-tab-list > [role="tablist"]'
				);
				const panels = Array.from<HTMLElement>(
					_ref?.querySelectorAll('[role="tabpanel"]') ?? []
				);

				if (!tabListEl) return;

				const buttons = Array.from<HTMLElement>(
					tabListEl.querySelectorAll('[role="tab"]')
				);

				buttons.forEach((button, index) => {
					const isSelected = state.activeTabIndex === index;
					const panel = panels[index];

					const tabId = state.getTabId(index);
					const panelId = state.getPanelId(index);

					if (!button.id) {
						button.id = tabId;
					}
					if (button.getAttribute('aria-controls') !== panelId) {
						button.setAttribute('aria-controls', panelId);
					}

					// toggle selection State
					if (
						button.getAttribute('aria-selected') !==
						String(isSelected)
					) {
						button.setAttribute(
							'aria-selected',
							isSelected ? 'true' : 'false'
						);
					}
					// manage focus
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
						if (!panel.id) {
							panel.id = panelId;
						}
						if (panel.getAttribute('aria-labelledby') !== tabId) {
							panel.setAttribute('aria-labelledby', tabId);
						}

						// toggle visibility
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

		// if the URL contains a hash, the tab is selected automatically
		if (typeof window !== 'undefined') {
			requestAnimationFrame(() => {
				if (window.location.hash) {
					const hashId = window.location.hash.substring(1);
					const name = props.name
						? 'tabs-' + props.name
						: state._name;
					const prefix = `${name}-tab-`;

					if (hashId.startsWith(prefix)) {
						const indexStr = hashId.replace(prefix, '');
						const index = parseInt(indexStr, 10);

						if (!isNaN(index)) {
							state.activeTabIndex = index;
							state.initTabs();
						}
					}
				}
			});
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

			// necessary for angular that render children asynchronously or conditionally
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
			data-content-alignment={props.contentAlignment ?? 'left'}
			data-width={props.width ?? 'auto'}
			onClick={(event) => state.handleClick(event)}
			onKeyDown={(event) => state.handleKeyDown(event)}>
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
								id={state.getTabId(index)}
								ariaControls={state.getPanelId(index)}
								active={state.isIndexActive(index)}
								tabIndex={state.getTabItemTabIndex(index)}
								label={tab.label}
								iconTrailing={tab.iconTrailing}
								icon={tab.icon}
								noText={tab.noText}
								onClick={() => state.activateTab(index)}
							/>
						)}
					</For>
				</DBTabList>
				<For each={state.convertTabs()}>
					{(tab: DBSimpleTabProps, index: number) => (
						<DBTabPanel
							key={props.name + 'tab-panel' + index}
							id={state.getPanelId(index)}
							ariaLabelledby={state.getTabId(index)}
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
