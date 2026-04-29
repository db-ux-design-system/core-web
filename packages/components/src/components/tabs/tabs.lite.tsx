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
			// Prevent activating a disabled tab
			if (_ref) {
				const tabList = _ref.querySelector('[role="tablist"]');
				if (tabList) {
					const tabs = Array.from(
						tabList.querySelectorAll('[role="tab"]')
					);
					const tab = tabs[index] as HTMLButtonElement | undefined;
					if (
						tab?.disabled ||
						tab?.getAttribute('aria-disabled') === 'true'
					) {
						return;
					}
				}
			}
			if (state.activeTabIndex !== index) {
				state.activeTabIndex = index;
				if (props.onIndexChange) {
					props.onIndexChange(index);
				}
				// Emit value of the newly active tab item if value props are set
				if (props.onValueChange) {
					const tabList = _ref?.querySelector('[role="tablist"]');
					const tabs = tabList
						? Array.from(tabList.querySelectorAll('[role="tab"]'))
						: [];
					const value = (tabs[index] as HTMLElement | undefined)
						?.dataset?.['value'];
					props.onValueChange(value);
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

					// Skip disabled tabs when navigating with arrow keys
					const isForward =
						key === 'ArrowRight' || key === 'ArrowDown';
					const maxAttempts = length;
					for (let i = 0; i < maxAttempts; i++) {
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
		// Cached per evaluation cycle – no need for persistent state since it's synchronous.
		_isRtl(): boolean {
			const container = state._getScrollContainer();
			return (
				!!container &&
				typeof getComputedStyle !== 'undefined' &&
				getComputedStyle(container).direction === 'rtl'
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

			const scrollPos = Math.abs(tList.scrollLeft);
			const maxScroll = tList.scrollWidth - tList.clientWidth;
			const tolerance = 2;

			// scrollPos=0 means "at inline-start" in both LTR and RTL
			state.showScrollStart = scrollPos > tolerance;
			state.showScrollEnd = scrollPos < maxScroll - tolerance;
		},

		// Scrolls the tab list container horizontally by a specified distance.
		// The `toStart` parameter means "scroll towards inline-start" (visually left in LTR, right in RTL).
		// scrollBy({ left }) always operates in the physical axis, so we must invert the step in RTL
		// to map the logical direction (start/end) to the correct physical direction.
		scroll(toStart?: boolean) {
			const container = state._getScrollContainer();
			if (!container) {
				return;
			}

			let step = Number(props.arrowScrollDistance) || 120;
			const isLeft = !!toStart;
			const isRtl = state._isRtl();

			// Map logical direction (start/end) to physical direction.
			// In LTR: toStart=true → scroll left (negative), toEnd → scroll right (positive).
			// In RTL: directions are inverted physically.
			if (isLeft !== isRtl) {
				step *= -1;
			}

			container.scrollBy({ left: step, behavior: 'smooth' });
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
				).filter(
					(panel) => panel.closest('.db-tabs') === _ref
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

					if
