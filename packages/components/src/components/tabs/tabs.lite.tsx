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
import { cls, uuid } from '../../utils';
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
		scrollContainer: null,
		_resizeObserver: null,
		_observer: null, // must stay in state: needs to persist across onUpdate and onUnMount lifecycle hooks (Mitosis doesn't support cross-lifecycle local variables)
		_pendingRafId: null,
		_scrollListener: null,

		_id() {
			return props.id || state._generatedId;
		},

		_name() {
			return 'tabs-' + (props.name || state._generatedName);
		},

		getTabId(index: number | string) {
			return `${state._name()}-tab-${index}`;
		},

		getPanelId(index: number | string) {
			return `${state._name()}-tab-panel-${index}`;
		},

		activateTab(index: number) {
			if (state.activeTabIndex !== index) {
				state.activeTabIndex = index;
				if (props.onIndexChange) {
					props.onIndexChange(index);
				}
				state.initTabs(index);
			}
		},

		handleClick(event: any) {
			// In props-mode (props.tabs), tab activation is handled via onClick on each DBTabItem directly.
			// In slot-mode (!props.tabs), clicks bubble up and are handled here via DOM traversal.
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
			if (typeof document !== 'undefined') {
				// Traverse Shadow DOM boundaries to find the truly focused element.
				// document.activeElement only returns the shadow host when focus is inside a Shadow DOM,
				// so we must walk through each shadowRoot to reach the actual focused element.
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

		// Detects RTL direction on the scroll container via computed style.
		// Cached per evaluation cycle – no need for persistent state since it's synchronous.
		_isRtl(): boolean {
			return (
				!!state.scrollContainer &&
				typeof getComputedStyle !== 'undefined' &&
				getComputedStyle(state.scrollContainer as Element).direction ===
					'rtl'
			);
		},

		// Determines the visibility of scroll buttons based on the container's scroll position.
		// Uses Math.abs(scrollLeft) because browsers return negative scrollLeft values in RTL layouts
		// (Chrome, Edge, Firefox all use 0 → negative; Safari historically used reversed positive values).
		evaluateScrollButtons(tList: Element) {
			const needsScroll = tList.scrollWidth > tList.clientWidth;
			if (!needsScroll) {
				state.showScrollStart = false;
				state.showScrollEnd = false;
				return;
			}

			const scrollPos = Math.round(Math.abs(tList.scrollLeft));
			const maxScroll = Math.round(tList.scrollWidth - tList.clientWidth);

			// scrollPos=0 means "at inline-start" in both LTR and RTL
			state.showScrollStart = scrollPos > 0;
			state.showScrollEnd = scrollPos < maxScroll;
		},

		// Scrolls the tab list container horizontally by a specified distance.
		// The `toStart` parameter means "scroll towards inline-start" (visually left in LTR, right in RTL).
		// scrollBy({ left }) always operates in the physical axis, so we must invert the step in RTL
		// to map the logical direction (start/end) to the correct physical direction.
		scroll(toStart?: boolean) {
			let step = Number(props.arrowScrollDistance) || 120;
			const isRtl = state._isRtl();

			// In LTR: "toStart" means physical left (negative step).
			// In RTL: "toStart" means physical right (positive step).
			// XOR logic: invert when exactly one of toStart/isRtl is true.
			if (toStart !== isRtl) {
				step *= -1;
			}

			state.scrollContainer?.scrollBy({
				left: step,
				behavior: 'smooth'
			});
		},

		initTabList() {
			if (_ref) {
				const container: HTMLElement | null =
					_ref.querySelector('[role="tablist"]');

				if (container) {
					if (!container.getAttribute('aria-orientation')) {
						container.setAttribute(
							'aria-orientation',
							props.orientation ?? 'horizontal'
						);
					}

					if (props.behavior === 'arrows') {
						state.scrollContainer = container;
						state.evaluateScrollButtons(container);

						const _listener = state._scrollListener;
						const _container = state.scrollContainer;
						if (_listener && _container) {
							_container.removeEventListener(
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

					if (props.name && !container.getAttribute('aria-label')) {
						container.setAttribute('aria-label', props.name ?? '');
					}
				}
			}
		},

		// Initializes tab items and panels, setting up IDs, ARIA attributes and event listeners
		// activeIndex parameter allows passing the new index directly, avoiding React stale closure
		// issues where state.activeTabIndex still holds the old value after setState
		initTabs(activeIndex?: number) {
			const currentIndex =
				activeIndex !== undefined ? activeIndex : state.activeTabIndex;
			if (_ref) {
				const tabListEl = _ref.querySelector('[role="tablist"]');
				const panels = Array.from<HTMLElement>(
					_ref?.querySelectorAll('[role="tabpanel"]') ?? []
				);

				if (!tabListEl) return;

				const buttons = Array.from<HTMLElement>(
					tabListEl.querySelectorAll('[role="tab"]')
				);

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

	onMount(() => {
		// 1. Calculate final start index synchronously to avoid race conditions
		let startIndex = 0;

		if (props.initialSelectedIndex !== undefined) {
			const parsedIndex = Number(props.initialSelectedIndex);
			startIndex = isNaN(parsedIndex) ? 0 : parsedIndex;
		} else if (props.initialSelectedMode === 'manually') {
			startIndex = -1;
		}

		// 2. Support deep linking: URL hash takes precedence over initial index
		if (typeof window !== 'undefined' && window.location.hash) {
			const hashId = window.location.hash.substring(1);
			const name = props.name ? 'tabs-' + props.name : state._name();
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
			const tabListEl = _ref.querySelector('[role="tablist"]');

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
		const _container = state.scrollContainer;
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
			id={props.id ?? props.propOverrides?.id ?? state._id()}
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
				<DBTabList
					orientation={props.orientation}
					ariaLabel={props.name}>
					<For each={state._cachedTabs}>
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
				<For each={state._cachedTabs}>
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
			<Show when={state.showScrollEnd}>
				<DBButton
					class="tabs-scroll-end"
					variant="ghost"
					icon="chevron_right"
					type="button"
					noText
					onClick={() => state.scroll()}>
					{props.scrollEndLabel}
				</DBButton>
			</Show>
		</div>
	);
}
