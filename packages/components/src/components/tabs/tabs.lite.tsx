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
import {
	cls,
	getBoolean,
	hasFocusgroupSupport,
	NAVIGATION_KEYS,
	uuid
} from '../../utils';
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
		// True when the browser natively supports the focusgroup attribute –
		// in that case we skip JS-based roving tabindex and arrow-key navigation.
		_focusgroupSupported: false,
		// Cached DOM references – updated by initTabs, used by syncSelection for fast access
		_tabButtons: [] as HTMLElement[],
		_tabPanels: [] as HTMLElement[],

		_id: undefined,

		_appliedBaseId: undefined,

		resetIds: () => {
			state._id = props.id ?? props.propOverrides?.id ?? `tabs-${uuid()}`;
		},

		// Avoid emitting `undefined-tab-x` ids during the first (pre-mount)
		// render when no explicit id was provided. initTabs() assigns the
		// generated ids after mount once state._id is set.
		getTabId(index: number | string) {
			const baseId = props.id ?? props.propOverrides?.id ?? state._id;
			return baseId ? `${baseId}-tab-${index}` : undefined;
		},

		// See getTabId: returns undefined until a base id is available so the
		// pre-mount render does not emit `undefined-tab-panel-x` ids.
		getPanelId(index: number | string) {
			const baseId = props.id ?? props.propOverrides?.id ?? state._id;
			return baseId ? `${baseId}-tab-panel-${index}` : undefined;
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
				if (index === Number(props.activeIndex)) {
					return;
				}
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

			const isEnabled = (button?: HTMLElement) =>
				!!button &&
				!(button as HTMLButtonElement).disabled &&
				button.getAttribute('aria-disabled') !== 'true';

			let currentIndex = requestedIndex;
			if (currentIndex !== -1 && buttons.length > 0) {
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

			// Persist a resolved fallback so the render path
			// (getRenderIndex -> _activeIndex) stays consistent with the DOM.
			// Without this, an invalid/disabled requested index would keep
			// _activeIndex stale and a later render could show a disabled panel
			// or hide every panel while another tab is actually selected.
			if (currentIndex !== requestedIndex) {
				state._activeIndex = currentIndex;
			}

			const rovingIndex =
				currentIndex === -1
					? buttons.findIndex((button: HTMLElement) =>
							isEnabled(button)
						)
					: currentIndex;

			buttons.forEach((button: HTMLElement, index: number) => {
				const isSelected = currentIndex === index;
				const tabIndex = rovingIndex === index ? 0 : -1;
				button.setAttribute('aria-selected', String(isSelected));
				if (!state._focusgroupSupported) {
					button.setAttribute('tabindex', String(tabIndex));
				}
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

			// When focusgroup is supported, the browser handles arrow-key
			// navigation natively – skip our JS-based roving tabindex logic.
			if (state._focusgroupSupported) {
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

				// Skip disabled tabs; nextKey/Home search forward, prevKey/End search backward.
				const isForward = key === nextKey || key === 'Home';
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
					state.moveRovingTabindex(nextIndex);
					nextButton.focus();
				}
			}
		},

		// Moves the roving tabindex to the tab at focusIndex: that tab becomes
		// tabindex="0" and all others tabindex="-1". Selection (aria-selected) is
		// intentionally left untouched so manual-activation keyboard users can
		// arrow through tabs without changing the active panel, per the
		// WAI-ARIA roving tabindex pattern.
		// Skipped when focusgroup is natively supported (browser manages tab stops).
		moveRovingTabindex(focusIndex: number) {
			if (state._focusgroupSupported) return;
			const buttons = state._tabButtons;
			buttons.forEach((button: HTMLElement, index: number) => {
				button.setAttribute(
					'tabindex',
					focusIndex === index ? '0' : '-1'
				);
			});
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

		// Resolves which panel should be visible at render time. Before mount we
		// have no live state yet, so we fall back to the initial index for
		// correct SSR/no-JS output. After initialization we render from the
		// current _activeIndex so a parent re-render (e.g. arrows behavior
		// updating scroll buttons) can never reset a panel's hidden state back
		// to the initially selected tab.
		getRenderIndex(): number {
			return state.initialized
				? state._activeIndex
				: state.getInitialIndex();
		},

		// Synchronously resolves the initially selected index from props/active entry. Used during render so SSR output hides inactive panels and at mount.
		getInitialIndex(): number {
			if (props.activeIndex !== undefined) {
				const parsedIndex = Number(props.activeIndex);
				return isNaN(parsedIndex) ? 0 : parsedIndex;
			}
			if (props.initialSelectedIndex !== undefined) {
				const parsedIndex = Number(props.initialSelectedIndex);
				return isNaN(parsedIndex) ? 0 : parsedIndex;
			}
			if (props.initialSelectedMode === 'manually') {
				return -1;
			}
			const activeTabIndex = state
				.getTabs()
				.findIndex((tab: DBSimpleTabProps) =>
					getBoolean(tab.active, 'active')
				);
			return activeTabIndex > -1 ? activeTabIndex : 0;
		},

		// Composition-API fallback: when tabs are provided as DBTabItem children
		// (no `tabs` prop), getInitialIndex() cannot see their `active` prop.
		// After initTabs() has cached the buttons, a child marked `active` has
		// already reflected aria-selected="true" onto its button, so we read it
		// back here. Returns -1 when no child is active. Only consulted for the
		// composition path and when no explicit index/mode prop was set.
		getActiveChildIndex(): number {
			return state._tabButtons.findIndex(
				(button: HTMLElement) =>
					button.getAttribute('aria-selected') === 'true'
			);
		},

		// Whether the active-child fallback should be consulted: only for the
		// composition API (no `tabs` prop), when no explicit selection prop and
		// no URL hash determined the start index.
		shouldUseActiveChild(hashApplied: boolean): boolean {
			return (
				!hashApplied &&
				!props.tabs &&
				props.activeIndex === undefined &&
				props.initialSelectedIndex === undefined &&
				props.initialSelectedMode === undefined
			);
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

					// Set the focusgroup attribute to match orientation.
					// 'tablist' defaults to inline wrap (horizontal);
					// for vertical tabs we override with 'block'.
					const focusgroupValue =
						props.orientation === 'vertical'
							? 'tablist block wrap'
							: 'tablist';
					container.setAttribute('focusgroup', focusgroupValue);

					const label = props.label;
					if (label) {
						container.setAttribute('aria-label', label);
					}

					if (props.behavior === 'arrows') {
						state.evaluateScrollButtons(container);

						// Set up the scroll listener only once to avoid an Angular effect loop (initTabList reads + writes _scrollListener).
						if (!state._scrollListener) {
							const onScroll = () =>
								state.evaluateScrollButtons(container);
							state._scrollListener = { fn: onScroll };
							container.addEventListener('scroll', onScroll);
						}

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

		// True only for panels that belong directly to this DBTabs instance.
		// We look at the nearest ancestor that is either a `.db-tabs` root or
		// another `[role="tabpanel"]`: if it is this instance's root (_ref) the
		// panel is a direct child; if an intervening tabpanel (foreign tabpanel
		// rendered inside a panel's content) or a nested `.db-tabs` is hit
		// first, the panel is not ours and must not shift the index mapping.
		_isOwnedPanel(panel: HTMLElement): boolean {
			const owner = panel.parentElement?.closest(
				'.db-tabs, [role="tabpanel"]'
			);
			return owner === _ref;
		},

		// Caches button/panel references and sets up static IDs/ARIA wiring.
		// Selection state (aria-selected/tabindex/hidden) is handled by syncSelection.
		// Only called on mount and when the MutationObserver detects structural changes.
		initTabs() {
			const baseId = props.id ?? props.propOverrides?.id ?? state._id;
			if (!baseId) return;

			const previousBaseId = state._appliedBaseId;
			const baseIdChanged = !!previousBaseId && previousBaseId !== baseId;

			if (_ref) {
				const tabListEl = state._getScrollContainer();
				const panels = Array.from<HTMLElement>(
					_ref?.querySelectorAll('[role="tabpanel"]') ?? []
				).filter((panel) => state._isOwnedPanel(panel));

				if (!tabListEl) return;

				const buttons = Array.from<HTMLElement>(
					tabListEl.querySelectorAll('[role="tab"]')
				);

				state._tabButtons = buttons;
				state._tabPanels = panels;

				buttons.forEach((button: HTMLElement, index: number) => {
					const panel = panels[index];

					const tabId = `${baseId}-tab-${index}`;
					const panelId = `${baseId}-tab-panel-${index}`;

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

				state._appliedBaseId = baseId;
			}
		}
	});

	// Re-initialize only when the declarative tabs prop is actually set and
	// changes. getTabs() renders directly, so no caching is needed; we just
	// re-wire ids/ARIA + selection for the freshly rendered DOM. Guarded by
	// props.tabs so composition-API usage (children only) relies on the
	// MutationObserver instead, avoiding a re-init feedback loop in Angular.
	onUpdate(() => {
		if (state.initialized && props.tabs) {
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
			// Keep the focusgroup attribute in sync so browsers that support
			// it use the correct axis for arrow-key navigation.
			if (container) {
				const focusgroupValue =
					props.orientation === 'vertical'
						? 'tablist block wrap'
						: 'tablist';
				container.setAttribute('focusgroup', focusgroupValue);
			}
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
		state._focusgroupSupported = hasFocusgroupSupport();
		state.resetIds();

		let startIndex = state.getInitialIndex();

		let hashApplied = false;
		const baseId = state.getBaseId();
		if (typeof window !== 'undefined' && window.location.hash && baseId) {
			const hashId = window.location.hash.substring(1);
			const prefix = `${baseId}-tab-`;

			if (hashId.startsWith(prefix)) {
				const indexStr = hashId.replace(prefix, '');
				const index = parseInt(indexStr, 10);

				if (!isNaN(index)) {
					startIndex = index;
					hashApplied = true;
				}
			}
		}

		state._activeIndex = startIndex;
		state.initialized = true;

		if (typeof window !== 'undefined') {
			requestAnimationFrame(() => {
				state.initTabList();
				state.initTabs();
				let resolvedIndex = startIndex;
				if (state.shouldUseActiveChild(hashApplied)) {
					const activeChildIndex = state.getActiveChildIndex();
					if (activeChildIndex > -1) {
						resolvedIndex = activeChildIndex;
						state._activeIndex = activeChildIndex;
					}
				}
				state.syncSelection(resolvedIndex);
			});
		}

		if (_ref) {
			const observer = new MutationObserver((mutations) => {
				const isTabNode = (node: Node) => {
					const element = node as Element;
					return (
						!!element.matches &&
						(element.matches('[role="tab"], [role="tabpanel"]') ||
							!!element.querySelector?.(
								'[role="tab"], [role="tabpanel"]'
							))
					);
				};

				const hasTabChange = mutations.some(
					(mutation) =>
						Array.from(mutation.addedNodes).some(isTabNode) ||
						Array.from(mutation.removedNodes).some(isTabNode)
				);

				const hasContentChange = mutations.some(
					(mutation) => mutation.type === 'characterData'
				);

				// Detect disabled/aria-disabled attribute changes on tab buttons
				// so that selection falls back when the active tab becomes disabled.
				const hasDisabledChange = mutations.some(
					(mutation) =>
						mutation.type === 'attributes' &&
						(mutation.attributeName === 'disabled' ||
							mutation.attributeName === 'aria-disabled') &&
						(mutation.target as Element)?.getAttribute?.('role') ===
							'tab'
				);

				if (!hasTabChange && !hasContentChange && !hasDisabledChange)
					return;

				const rafId = state._pendingRafId;
				if (rafId !== null) cancelAnimationFrame(rafId);
				state._pendingRafId = requestAnimationFrame(() => {
					state._pendingRafId = null;
					state.initTabList();
					if (hasTabChange) {
						state.initTabs();
					}
					if (hasDisabledChange) {
						state.syncSelection(state._activeIndex);
					}
				});
			});

			observer.observe(_ref, {
				childList: true,
				subtree: true,
				characterData: true,
				attributes: true,
				attributeFilter: ['disabled', 'aria-disabled']
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
				<DBTabList orientation={props.orientation}>
					<For each={state.getTabs()}>
						{(tab: DBSimpleTabProps, index: number) => (
							<DBTabItem
								key={props.label + 'tab-item' + index}
								id={state.getTabId(index)}
								aria-controls={state.getPanelId(index)}
								label={tab.label}
								icon={tab.icon}
								showIcon={tab.showIcon}
								iconTrailing={tab.iconTrailing}
								showIconTrailing={tab.showIconTrailing}
								disabled={tab.disabled}
								active={state.getRenderIndex() === index}
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
							aria-labelledby={state.getTabId(index)}
							hidden={state.getRenderIndex() !== index}
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
