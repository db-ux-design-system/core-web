import {
	For,
	onMount,
	onUnMount,
	onUpdate,
	Show,
	useDefaultProps,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, NAVIGATION_KEYS, uuid } from '../../utils';
import DBButton from '../button/button.lite';
import DBTabItem from '../tab-item/tab-item.lite';
import DBTabList from '../tab-list/tab-list.lite';
import DBTabPanel from '../tab-panel/tab-panel.lite';
import { DBSimpleTabProps, DBTabsProps, DBTabsState } from './model';

useDefaultProps<DBTabsProps>({
	tabItemWidth: 'auto',
	tabItemAlignment: 'start',
	scrollStartLabel: 'Scroll start',
	scrollEndLabel: 'Scroll end'
});

export default function DBTabs(props: DBTabsProps) {
	const _ref = useRef<HTMLDivElement | null>(null);

	const state = useStore<DBTabsState>({
		_generatedId: 'tabs-' + uuid(),
		_generatedName: uuid(),
		activeTabIndex: 0,
		initialized: false,
		showScrollStart: false,
		showScrollEnd: false,
		_resizeObserver: null,
		_observer: null, // must stay in state: needs to persist across onUpdate and onUnMount lifecycle hooks (Mitosis doesn't support cross-lifecycle local variables)
		_pendingRafId: null,
		_scrollListener: null,
		// Cached DOM references – updated by initTabs, used by syncSelection for fast access
		_tabButtons: [] as HTMLElement[],
		_tabPanels: [] as HTMLElement[],

		_id: 'tabs-' + uuid(),
		_name: 'tabs-' + uuid(),

		getTabId(index: number | string) {
			return `${state._name}-tab-${index}`;
		},

		getPanelId(index: number | string) {
			return `${state._name}-tab-panel-${index}`;
		},

		activateTab(index: number) {
			// Prevent activating a disabled tab using cached references
			const buttons = state._tabButtons;
			if (buttons.length > 0) {
				const tab = buttons[index] as HTMLButtonElement | undefined;
				if (
					tab?.disabled ||
					tab?.getAttribute('aria-disabled') === 'true'
				) {
					return;
				}
			}
			if (state.activeTabIndex !== index) {
				state.activeTabIndex = index;
				if (props.onIndexChange) {
					props.onIndexChange(index);
				}
				// Emit value of the newly active tab item if value props are set
				if (props.onValueChange) {
					const value = (buttons[index] as HTMLElement | undefined)
						?.dataset?.['value'];
					props.onValueChange(value);
				}
				state.syncSelection(index);
			}
		},

		// Lightweight method that only toggles selection state on cached references.
		// Does NOT re-query the DOM or set up IDs/ARIA – that's initTabs' job.
		syncSelection(activeIndex?: number) {
			const currentIndex =
				activeIndex !== undefined ? activeIndex : state.activeTabIndex;
			const buttons = state._tabButtons;
			const panels = state._tabPanels;

			buttons.forEach((button, index) => {
				const isSelected = currentIndex === index;
				button.dispatchEvent(
					new CustomEvent('aria-selected-changed', {
						detail: {
							selected: isSelected,
							tabIndex:
								currentIndex === index ||
								(currentIndex === -1 && index === 0)
									? 0
									: -1
						}
					})
				);
			});

			panels.forEach((panel, index) => {
				panel.hidden = currentIndex !== index;
			});
		},

		handleClick(event: any) {
			const target = event.target as HTMLElement;
			const button = target.closest('[role="tab"]');
			if (!button || !_ref) return;

			// Guard against nested tabs: only handle clicks for tabs belonging to this instance
			const parentTabs = button.closest('.db-tabs');
			if (parentTabs !== _ref) return;

			const buttons = state._tabButtons;
			const index = buttons.indexOf(button as HTMLElement);

			if (index !== -1) {
				event.preventDefault();
				state.activateTab(index);
			}
		},

		handleKeyDown(event: any) {
			if (!_ref) return;

			const key = event.key;

			if (!NAVIGATION_KEYS.includes(key)) {
				return;
			}

			const buttons = state._tabButtons;
			if (buttons.length === 0) return;

			// find currently focused element within the buttons list
			let currentIndex = -1;
			if (typeof document !== 'undefined') {
				// Traverse Shadow DOM boundaries to find the truly focused element.
				let activeEl: Element | null = document.activeElement;
				while (activeEl?.shadowRoot?.activeElement) {
					activeEl = activeEl.shadowRoot.activeElement;
				}

				if (activeEl) {
					const focusedButton = (activeEl as HTMLElement).closest(
						'[role="tab"]'
					);
					if (focusedButton) {
						currentIndex = buttons.indexOf(
							focusedButton as HTMLElement
						);
					}
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

					// Skip disabled tabs when navigating with arrow keys
					const isForward =
						key === 'ArrowRight' || key === 'ArrowDown';
					for (let i = 0; i < length; i++) {
						const candidate = buttons[
							nextIndex
						] as HTMLButtonElement;
						if (
							!candidate?.disabled &&
							candidate?.getAttribute('aria-disabled') !== 'true'
						) {
							break;
						}
						if (isForward) {
							nextIndex = (nextIndex + 1) % length;
						} else {
							nextIndex = (nextIndex - 1 + length) % length;
						}
					}

					// do not activateTab here for manual activation, just move the focus
					const nextButton = buttons[nextIndex] as HTMLElement;
					if (
						nextButton &&
						!(nextButton as HTMLButtonElement).disabled &&
						nextButton.getAttribute('aria-disabled') !== 'true'
					) {
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

		_cachedTabs: [] as DBSimpleTabProps[],

		// Parses the tabs prop and caches the result in state._cachedTabs.
		// Called in onMount and onUpdate([props.tabs]) so the JSX can reference
		// state._cachedTabs without re-parsing on every render.
		_updateCachedTabs() {
			try {
				if (typeof props.tabs === 'string') {
					state._cachedTabs = JSON.parse(props.tabs as string);
				} else if (props.tabs) {
					state._cachedTabs = props.tabs as DBSimpleTabProps[];
				} else {
					state._cachedTabs = [];
				}
			} catch (error) {
				console.error(error);
				state._cachedTabs = [];
			}
		},

		// Returns the live tablist DOM element by querying _ref.
		// IMPORTANT: Do NOT store DOM elements in useStore and call native methods
		// like scrollBy() on them. Mitosis/React wraps state values in proxies that
		// strip native DOM prototypes, causing silent no-ops. Always query fresh.
		_getScrollContainer(): Element | null {
			return _ref?.querySelector('[role="tablist"]') ?? null;
		},

		// Detects RTL direction on the scroll container via computed style.
		_isRtl(): boolean {
			const container = state._getScrollContainer();
			return (
				!!container &&
				typeof getComputedStyle !== 'undefined' &&
				getComputedStyle(container).direction === 'rtl'
			);
		},

		// Determines the visibility of scroll buttons based on the container's scroll position.
		evaluateScrollButtons(tList: Element) {
			const needsScroll = tList.scrollWidth > tList.clientWidth;
			if (!needsScroll) {
				state.showScrollStart = false;
				state.showScrollEnd = false;
				return;
			}

			const scrollPos = Math.abs(tList.scrollLeft);
			const maxScroll = tList.scrollWidth - tList.clientWidth;
			const tolerance = 2;

			state.showScrollStart = scrollPos > tolerance;
			state.showScrollEnd = scrollPos < maxScroll - tolerance;
		},

		// Scrolls the tab list container horizontally by a specified distance.
		scroll(toStart?: boolean) {
			const container = state._getScrollContainer();
			if (!container) {
				return;
			}

			let step = Number(props.arrowScrollDistance) || 120;
			const isLeft = !!toStart;
			const isRtl = state._isRtl();

			if (isLeft !== isRtl) {
				step *= -1;
			}

			container.scrollBy({ left: step, behavior: 'smooth' });
		},

		initTabList() {
			if (_ref) {
				const container =
					state._getScrollContainer() as HTMLElement | null;

				if (container) {
					container.setAttribute(
						'aria-orientation',
						props.orientation ?? 'horizontal'
					);

					if (props.behavior === 'arrows') {
						state.evaluateScrollButtons(container);

						const _listener = state._scrollListener;
						if (_listener && container) {
							container.removeEventListener(
								'scroll',
								_listener.fn
							);
							state._scrollListener = null;
						}

						const onScroll = () =>
							state.evaluateScrollButtons(container);
						state._scrollListener = { fn: onScroll };
						container.addEventListener('scroll', onScroll);

						if (!state._resizeObserver) {
							const observer = new ResizeObserver(() => {
								state.evaluateScrollButtons(container);
							});
							observer.observe(container);
							state._resizeObserver = observer;
						}
					}

					if (props.label && !container.getAttribute('aria-label')) {
						container.setAttribute('aria-label', props.label ?? '');
					}
				}
			}
		},

		// Full initialization: queries DOM, caches references, sets up IDs and ARIA attributes.
		// Only called on mount and when the MutationObserver detects structural changes.
		initTabs(activeIndex?: number) {
			const currentIndex =
				activeIndex !== undefined ? activeIndex : state.activeTabIndex;
			if (_ref) {
				const tabListEl = state._getScrollContainer();
				const panels = Array.from<HTMLElement>(
					_ref?.querySelectorAll('[role="tabpanel"]') ?? []
				).filter((panel) => panel.closest('.db-tabs') === _ref);

				if (!tabListEl) return;

				const buttons = Array.from<HTMLElement>(
					tabListEl.querySelectorAll('[role="tab"]')
				);

				// Cache references for fast access in syncSelection, activateTab, handleClick, handleKeyDown
				state._tabButtons = buttons;
				state._tabPanels = panels;

				buttons.forEach((button, index) => {
					const isSelected = currentIndex === index;
					const panel = panels[index];

					const tabId = button.id || state.getTabId(index);
					const panelId = panel?.id || state.getPanelId(index);

					if (!button.id) {
						button.id = tabId;
					}
					if (!button.getAttribute('aria-controls')) {
						button.setAttribute('aria-controls', panelId);
					}

					button.dispatchEvent(
						new CustomEvent('aria-selected-changed', {
							detail: {
								selected: isSelected,
								tabIndex:
									currentIndex === index ||
									(currentIndex === -1 && index === 0)
										? 0
										: -1
							}
						})
					);

					if (panel) {
						if (!panel.id) {
							panel.id = panelId;
						}
						if (
							!panel.getAttribute('aria-label') &&
							!panel.getAttribute('aria-labelledby')
						) {
							panel.setAttribute('aria-labelledby', tabId);
						}

						// toggle visibility
						panel.hidden = !isSelected;
					}
				});
			}
		}
	});

	// Re-cache parsed tabs when the prop changes (e.g. dynamic tab lists)
	onUpdate(() => {
		state._updateCachedTabs();
	}, [props.tabs]);

	// Sync derived IDs when props change
	onUpdate(() => {
		state._id = props.id || state._generatedId;
		state._name = 'tabs-' + (props.label || state._generatedName);
	}, [props.id, props.label]);

	// Controlled mode: sync external activeIndex changes to internal state
	onUpdate(() => {
		if (props.activeIndex !== undefined) {
			const newIndex = Number(props.activeIndex);
			if (!isNaN(newIndex) && newIndex !== state.activeTabIndex) {
				state.activateTab(newIndex);
			}
		}
	}, [props.activeIndex]);

	onMount(() => {
		// Compute derived IDs
		state._id = props.id || state._generatedId;
		state._name = 'tabs-' + (props.label || state._generatedName);

		// 1. Calculate final start index synchronously to avoid race conditions
		let startIndex = 0;

		if (props.activeIndex !== undefined) {
			const parsedIndex = Number(props.activeIndex);
			startIndex = isNaN(parsedIndex) ? 0 : parsedIndex;
		} else if (props.initialSelectedIndex !== undefined) {
			const parsedIndex = Number(props.initialSelectedIndex);
			startIndex = isNaN(parsedIndex) ? 0 : parsedIndex;
		} else if (props.initialSelectedMode === 'manually') {
			startIndex = -1;
		}

		// 2. Support deep linking: URL hash takes precedence over initial index
		if (typeof window !== 'undefined' && window.location.hash) {
			const hashId = window.location.hash.substring(1);
			const name = 'tabs-' + (props.label || state._generatedName);
			const prefix = `${name}-tab-`;

			if (hashId.startsWith(prefix)) {
				const indexStr = hashId.replace(prefix, '');
				const index = parseInt(indexStr, 10);

				if (!isNaN(index)) {
					startIndex = index;
				}
			}
		}

		// 3. Set initial state synchronously
		state.activeTabIndex = startIndex;
		state.initialized = true;
		state._updateCachedTabs();

		// 4. Trigger single initial DOM update after paint
		if (typeof window !== 'undefined') {
			requestAnimationFrame(() => {
				state.initTabList();
				state.initTabs(startIndex);
			});
		}

		if (_ref) {
			const tabListEl = state._getScrollContainer();

			if (tabListEl) {
				const observer = new MutationObserver(() => {
					const rafId = state._pendingRafId;
					if (rafId !== null) cancelAnimationFrame(rafId);
					state._pendingRafId = requestAnimationFrame(() => {
						state._pendingRafId = null;
						state.initTabList();
						state.initTabs(state.activeTabIndex);
					});
				});

				// Observe only the tablist (not panel content) to avoid unnecessary
				// re-evaluations when user content inside panels changes.
				// childList only – attribute changes (set by initTabs) are not observed, preventing infinite loops.
				observer.observe(tabListEl, {
					childList: true,
					subtree: true
				});

				state._observer = observer;
			}
		}
	});

	onUnMount(() => {
		const rafId = state._pendingRafId;
		if (rafId !== null) {
			cancelAnimationFrame(rafId);
			state._pendingRafId = null;
		}
		const _listener = state._scrollListener;
		const _container = state._getScrollContainer();
		if (_listener && _container) {
			_container.removeEventListener('scroll', _listener.fn);
		}
		state._resizeObserver?.disconnect();
		state._resizeObserver = null;
		state._observer?.disconnect();
		state._observer = null;
	});

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id ?? state._id}
			class={cls('db-tabs', props.className)}
			data-orientation={props.orientation}
			data-scroll-behavior={props.behavior}
			data-tab-item-alignment={props.tabItemAlignment}
			data-tab-item-width={props.tabItemWidth}
			onClick={(event) => state.handleClick(event)}
			onKeyDown={(event) => state.handleKeyDown(event)}>
			<Show when={state.showScrollStart}>
				<DBButton
					class="tabs-scroll-start"
					variant="ghost"
					icon="chevron_left"
					type="button"
					noText
					onClick={() => state.scroll(true)}>
					{props.scrollStartLabel}
				</DBButton>
			</Show>
			<Show when={props.tabs}>
				<DBTabList>
					<For each={state._cachedTabs}>
						{(tab: DBSimpleTabProps, index: number) => (
							<DBTabItem
								key={props.label + 'tab-item' + index}
								id={state.getTabId(index)}
								active={state.isIndexActive(index)}
								tabIndex={state.getTabItemTabIndex(index)}
								label={tab.label}
								iconTrailing={tab.iconTrailing}
								icon={tab.icon}
								onClick={() => state.activateTab(index)}
							/>
						)}
					</For>
				</DBTabList>
				<For each={state._cachedTabs}>
					{(tab: DBSimpleTabProps, index: number) => (
						<DBTabPanel
							key={props.label + 'tab-panel' + index}
							id={state.getPanelId(index)}
							content={tab.content}
							hidden={!state.isIndexActive(index)}>
							{tab.children}
						</DBTabPanel>
					)}
				</For>
			</Show>
			<Show when={!props.tabs}>{props.children}</Show>
			<Show when={state.showScrollEnd}>
				<DBButton
					class="tabs-scroll-end"
					variant="ghost"
					icon="chevron_right"
					type="button"
					noText
					onClick={() => state.scroll(false)}>
					{props.scrollEndLabel}
				</DBButton>
			</Show>
		</div>
	);
}
