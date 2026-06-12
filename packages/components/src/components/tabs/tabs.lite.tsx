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
		_activeIndex: 0,
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

		_id: undefined,

		_appliedBaseId: undefined,

		resetIds: () => {
			state._id = props.id ?? props.propOverrides?.id ?? `tabs-${uuid()}`;
		},

		getTabId(index: number | string) {
			return `${state._id}-tab-${index}`;
		},

		getPanelId(index: number | string) {
			return `${state._id}-tab-panel-${index}`;
		},

		getBaseId() {
			return props.id ?? props.propOverrides?.id;
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

			const value = (buttons[index] as HTMLElement | undefined)
				?.dataset?.['value'];

			// Controlled mode: never update state or the DOM optimistically.
			// Only emit the change and let the parent drive selection via
			// props.activeIndex, which flows through onUpdate -> syncSelection.
			if (props.activeIndex !== undefined) {
				if (props.onIndexChange) {
					props.onIndexChange(index);
				}
				if (props.onValueChange) {
					props.onValueChange(value);
				}
				return;
			}

			// Uncontrolled mode: own the state and sync the DOM directly.
			if (state._activeIndex !== index) {
				state._activeIndex = index;
				if (props.onIndexChange) {
					props.onIndexChange(index);
				}
				if (props.onValueChange) {
					props.onValueChange(value);
				}
				state.syncSelection(index);
			}
		},

		// Lightweight method that only toggles selection state on cached references.
		// Does NOT re-query the DOM or set up IDs/ARIA – that's initTabs' job.
		syncSelection(activeIndex?: number) {
			const buttons = state._tabButtons;
			const panels = state._tabPanels;

			const requestedIndex =
				activeIndex !== undefined ? activeIndex : state._activeIndex;

			// Resolve the index to a valid, enabled tab so we never end up with a
			// tablist that has no focusable entry point (out-of-range index, or an
			// index pointing at a disabled tab). -1 (manual mode) is kept as-is.
			let currentIndex = requestedIndex;
			if (currentIndex !== -1 && buttons.length > 0) {
				const isEnabled = (button?: HTMLElement) =>
					!!button &&
					!(button as HTMLButtonElement).disabled &&
					button.getAttribute('aria-disabled') !== 'true';

				if (
					currentIndex < 0 ||
					currentIndex >= buttons.length ||
					!isEnabled(buttons[currentIndex])
				) {
					const fallback = buttons.findIndex((button: HTMLElement) =>
						isEnabled(button)
					);
					currentIndex = fallback;
				}
			}

			buttons.forEach((button: HTMLElement, index: number) => {
				const isSelected = currentIndex === index;
				const tabIndex =
					currentIndex === index ||
					(currentIndex === -1 && index === 0)
						? 0
						: -1;
				button.setAttribute('aria-selected', String(isSelected));
				button.setAttribute('tabindex', String(tabIndex));
			});

			panels.forEach((panel: HTMLElement, index: number) => {
				const isSelected = currentIndex === index;
				panel.hidden = !isSelected;
				panel.setAttribute('tabindex', isSelected ? '0' : '-1');
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

			// Only handle keys that originate from a tab owned by this instance.
			// Prevents events from panel content or nested tabs bubbling up and
			// being consumed by the wrong tablist.
			const target = event.target as HTMLElement;
			const focusedButton = target?.closest('[role="tab"]');
			if (!focusedButton || focusedButton.closest('.db-tabs') !== _ref) {
				return;
			}

			const currentIndex = buttons.indexOf(focusedButton as HTMLElement);
			if (currentIndex === -1) return;

			// handle activation (enter / space) -> change panel
			if (key === 'Enter' || key === ' ') {
				event.preventDefault();
				state.activateTab(currentIndex);
				return;
			}

			// Navigation keys depend on orientation: horizontal uses Left/Right,
			// vertical uses Up/Down (per WAI-ARIA tabs pattern). Home/End apply to both.
			const isVertical = props.orientation === 'vertical';
			const prevKey = isVertical ? 'ArrowUp' : 'ArrowLeft';
			const nextKey = isVertical ? 'ArrowDown' : 'ArrowRight';

			// handle navigation (arrows) -> moves focus
			let nextIndex: number | undefined;
			const length = buttons.length;

			if (key === nextKey) {
				nextIndex = (currentIndex + 1) % length;
			} else if (key === prevKey) {
				nextIndex = (currentIndex - 1 + length) % length;
			} else if (key === 'Home') {
				nextIndex = 0;
			} else if (key === 'End') {
				nextIndex = length - 1;
			}

			if (nextIndex !== undefined) {
				event.preventDefault();

				// Skip disabled tabs when navigating with arrow keys
				const isForward = key === nextKey;
				for (let i = 0; i < length; i++) {
					const candidate = buttons[nextIndex] as HTMLButtonElement;
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
		},

		// Parses the tabs prop into a usable array. Side-effect-free so it can be
		// called directly during render (SSR-safe): the server output then
		// contains the tablist + panels instead of an empty shell that only
		// appears after onMount on the client. Mitosis has no local JSX
		// variables, so this is called from the Show/For below.
		getTabs(): DBSimpleTabProps[] {
			try {
				if (typeof props.tabs === 'string') {
					return JSON.parse(props.tabs as string);
				} else if (props.tabs) {
					return props.tabs as DBSimpleTabProps[];
				}
			} catch (error) {
				console.error(error);
			}
			return [];
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
					// Set ARIA here (after paint, when tablist exists); onUpdate hooks only fire reliably for later prop changes.
					container.setAttribute(
						'aria-orientation',
						props.orientation ?? 'horizontal'
					);
					const label = props.label;
					if (label) {
						container.setAttribute('aria-label', label);
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
				}
			}
		},

		// Removes the scroll listener + resize observer and hides the scroll buttons (arrows behavior teardown).
		_teardownScrollHandlers() {
			const _listener = state._scrollListener;
			const _container = state._getScrollContainer();
			if (_listener && _container) {
				_container.removeEventListener('scroll', _listener.fn);
			}
			state._scrollListener = null;
			state._resizeObserver?.disconnect();
			state._resizeObserver = null;
			state.showScrollStart = false;
			state.showScrollEnd = false;
		},

		// Caches button/panel references and sets up static IDs/ARIA wiring.
		// Selection state (aria-selected/tabindex/hidden) is handled by syncSelection.
		// Only called on mount and when the MutationObserver detects structural changes.
		initTabs() {
			// Resolve base id from props first, fall back to committed state id; bail out if none yet (avoids "undefined-*" ids).
			const baseId = props.id ?? props.propOverrides?.id ?? state._id;
			if (!baseId) return;

			// When the base id changed, rewrite generated ids only; consumer-supplied ids are always preserved.
			const previousBaseId = state._appliedBaseId;
			const baseIdChanged = !!previousBaseId && previousBaseId !== baseId;

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

				buttons.forEach((button: HTMLElement, index: number) => {
					const panel = panels[index];

					const tabId = `${baseId}-tab-${index}`;
					const panelId = `${baseId}-tab-panel-${index}`;

					// Generated tab id from the previous base id; only those are rewritten on base id change.
					const wasGeneratedTabId =
						baseIdChanged &&
						button.id === `${previousBaseId}-tab-${index}`;

					if (!button.id || wasGeneratedTabId) {
						button.id = tabId;
					}

					if (panel) {
						const wasGeneratedPanelId =
							baseIdChanged &&
							panel.id === `${previousBaseId}-tab-panel-${index}`;

						// Only wire aria-controls when a matching panel exists, otherwise the tab references a non-existent id.
						const ariaControls =
							button.getAttribute('aria-controls');
						if (
							!ariaControls ||
							(baseIdChanged &&
								ariaControls ===
									`${previousBaseId}-tab-panel-${index}`)
						) {
							button.setAttribute('aria-controls', panelId);
						}
						if (!panel.id || wasGeneratedPanelId) {
							panel.id = panelId;
						}
						const labelledBy =
							panel.getAttribute('aria-labelledby');
						if (
							(!labelledBy ||
								(baseIdChanged &&
									labelledBy ===
										`${previousBaseId}-tab-${index}`)) &&
							!panel.getAttribute('aria-label')
						) {
							panel.setAttribute('aria-labelledby', tabId);
						}
					}
				});

				// Remember the base id we just wired everything to.
				state._appliedBaseId = baseId;
			}
		}
	});

	// Re-initialize when the declarative tabs prop changes (e.g. dynamic tab
	// lists). getTabs() is evaluated directly in render, so no caching is needed;
	// we just re-wire ids/ARIA and selection for the newly rendered DOM. The
	// MutationObserver covers async/structural changes; this makes prop-driven
	// updates deterministic across frameworks.
	onUpdate(() => {
		if (state.initialized) {
			state.initTabList();
			state.initTabs();
			state.syncSelection(state._activeIndex);
		}
	}, [props.tabs]);

	// Reset IDs when the id prop changes
	onUpdate(() => {
		if (props.id ?? props.propOverrides?.id) {
			state.resetIds();
		}
	}, [props.id, props.propOverrides?.id]);

	// Re-initialize child IDs/ARIA whenever the base id is (re)assigned
	onUpdate(() => {
		if (state._id) {
			state.initTabs();
		}
	}, [state._id]);

	// Reflect orientation changes onto the tablist's aria-orientation
	onUpdate(() => {
		if (_ref) {
			const container = state._getScrollContainer() as HTMLElement | null;
			container?.setAttribute(
				'aria-orientation',
				props.orientation ?? 'horizontal'
			);
		}
	}, [_ref, props.orientation]);

	// Reflect label changes onto the tablist's aria-label
	onUpdate(() => {
		if (_ref) {
			const label = props.label;
			const container = state._getScrollContainer() as HTMLElement | null;
			if (label) {
				container?.setAttribute('aria-label', label);
			} else {
				container?.removeAttribute('aria-label');
			}
		}
	}, [_ref, props.label]);

	// Re-init or tear down the arrows scroll handling when behavior changes.
	onUpdate(() => {
		if (_ref) {
			if (props.behavior === 'arrows') {
				state.initTabList();
			} else {
				state._teardownScrollHandlers();
			}
		}
	}, [_ref, props.behavior]);

	// Controlled mode: mirror external activeIndex into internal state.
	// The syncSelection onUpdate below then runs the same way as for internal changes.
	onUpdate(() => {
		if (props.activeIndex !== undefined) {
			const newIndex = Number(props.activeIndex);
			if (!isNaN(newIndex)) {
				state._activeIndex = newIndex;
			}
		}
	}, [props.activeIndex]);

	// Apply selection once the active index and the cached button references
	// are available. Keeps DOM mutations out of initTabs and ensures we never
	// sync against a not-yet-queried DOM. Panels are included as a dependency so
	// the selection re-runs when they change, but are not required (tabs may be
	// used without panels).
	onUpdate(() => {
		if (state.initialized && state._tabButtons.length > 0) {
			state.syncSelection(state._activeIndex);
		}
	}, [
		state._tabButtons,
		state._tabPanels,
		state._activeIndex,
		state.initialized
	]);

	onMount(() => {
		// Compute derived IDs
		state.resetIds();

		// Calculate final start index synchronously to avoid race conditions.
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

		// Deep linking via URL hash; uses props.id since state._id isn't committed synchronously in React.
		const baseId = state.getBaseId();
		if (typeof window !== 'undefined' && window.location.hash && baseId) {
			const hashId = window.location.hash.substring(1);
			const prefix = `${baseId}-tab-`;

			if (hashId.startsWith(prefix)) {
				const indexStr = hashId.replace(prefix, '');
				const index = parseInt(indexStr, 10);

				if (!isNaN(index)) {
					startIndex = index;
				}
			}
		}

		// Set initial state synchronously.
		state._activeIndex = startIndex;
		state.initialized = true;

		// Init tablist + tabs after paint with the locally computed startIndex; deterministic across frameworks.
		if (typeof window !== 'undefined') {
			requestAnimationFrame(() => {
				state.initTabList();
				state.initTabs();
				state.syncSelection(startIndex);
			});
		}

		if (_ref) {
			const observer = new MutationObserver(() => {
				const rafId = state._pendingRafId;
				if (rafId !== null) cancelAnimationFrame(rafId);
				state._pendingRafId = requestAnimationFrame(() => {
					state._pendingRafId = null;
					state.initTabList();
					state.initTabs();
				});
			});

			// Observe the whole tabs container so async-rendered tablist/buttons still reach initTabs/syncSelection. childList/subtree only, no attributes (avoids loops).
			observer.observe(_ref, {
				childList: true,
				subtree: true
			});

			state._observer = observer;
		}
	});

	onUnMount(() => {
		const rafId = state._pendingRafId;
		if (rafId !== null) {
			cancelAnimationFrame(rafId);
			state._pendingRafId = null;
		}
		state._teardownScrollHandlers();
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
			<Show when={state.getTabs().length} else={props.children}>
				<DBTabList>
					<For each={state.getTabs()}>
						{(tab: DBSimpleTabProps, index: number) => (
							<DBTabItem
								key={props.label + 'tab-item' + index}
								id={state.getTabId(index)}
								label={tab.label}
								icon={tab.icon}
								showIcon={tab.showIcon}
								iconTrailing={tab.iconTrailing}
								showIconTrailing={tab.showIconTrailing}
								disabled={tab.disabled}
								value={tab.value}
							/>
						)}
					</For>
				</DBTabList>
				<For each={state.getTabs()}>
					{(tab: DBSimpleTabProps, index: number) => (
						<DBTabPanel
							key={props.label + 'tab-panel' + index}
							id={state.getPanelId(index)}
							content={tab.content}>
							{tab.children}
						</DBTabPanel>
					)}
				</For>
			</Show>
			<Show when={state.showScrollEnd}>
				<DBButton
					class="tabs-scroll-end"
					variant="ghost"
					icon="chevron_right"
					noText
					onClick={() => state.scroll(false)}>
					{props.scrollEndLabel}
				</DBButton>
			</Show>
		</div>
	);
}
