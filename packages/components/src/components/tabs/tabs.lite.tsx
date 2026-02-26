import {
	For,
	onMount,
	onUnMount,
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
	const _ref = useRef<HTMLDivElement | null>(null);

	const state = useStore<DBTabsState>({
		_generatedId: 'tabs-' + uuid(),
		_generatedName: uuid(),
		activeTabIndex: 0,
		initialized: false,
		showScrollLeft: false,
		showScrollRight: false,
		scrollContainer: null,
		_resizeObserver: null,
		_observer: null, // must stay in state: needs to persist across onUpdate and onUnMount lifecycle hooks (Mitosis doesn't support cross-lifecycle local variables)
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

		// Parses the tabs prop to ensure the correct data structure.
		// Note: called twice in JSX (for tab items and panels) - Mitosis doesn't support local JSX variables to cache the result
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
			const newLeft = needsScroll && tList.scrollLeft > 1;
			const newRight = needsScroll && tList.scrollLeft < tList.scrollWidth - tList.clientWidth;
			if (state.showScrollLeft !== newLeft) state.showScrollLeft = newLeft;
			if (state.showScrollRight !== newRight) state.showScrollRight = newRight;
		},

		// Scrolls the tab list container horizontally by a specified distance
		scroll(left?: boolean) {
			let step = Number(props.arrowScrollDistance) || 120;
			if (left) {
				step *= -1;
			}
			// scrollBy uses physical 'left' - the Web API does not support logical properties (inlineStart)
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
					container.setAttribute(
						'aria-orientation',
						props.orientation || 'horizontal'
					);

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

					if (props.name) {
						container.setAttribute('aria-label', props.name ?? '');
					}
				}
			}
		},

		// Initializes tab items and panels, setting up IDs, ARIA attributes and event listeners
		// activeIndex parameter allows passing the new index directly, avoiding React stale closure
		// issues where state.activeTabIndex still holds the old value after setState
		initTabs(activeIndex?: number) {
			const currentIndex = activeIndex !== undefined ? activeIndex : state.activeTabIndex;
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
							detail: { selected: isSelected }
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

	onMount(() => {
		if (props.initialSelectedIndex !== undefined) {
			const parsedIndex = Number(props.initialSelectedIndex);
			state.activeTabIndex = isNaN(parsedIndex) ? 0 : parsedIndex;
		} else if (props.initialSelectedMode === 'manually') {
			state.activeTabIndex = -1;
		}

		if (typeof window !== 'undefined') {
			requestAnimationFrame(() => {
				if (window.location.hash) {
					const hashId = window.location.hash.substring(1);
					const name = props.name
						? 'tabs-' + props.name
						: state._name();
					const prefix = `${name}-tab-`;

					if (hashId.startsWith(prefix)) {
						const indexStr = hashId.replace(prefix, '');
						const index = parseInt(indexStr, 10);

						if (!isNaN(index)) {
							state.activeTabIndex = index;
							state.initTabs(index);
						}
					}
				}
			});
		}

		state.initialized = true;

		// Trigger initial tab setup via rAF so DOM is painted and
		// clientWidth is measurable (needed for scroll button visibility calculation)
		requestAnimationFrame(() => {
			state.initTabList();
			state.initTabs(state.activeTabIndex);
		});

		if (_ref) {
			const tabListEl = _ref.querySelector('[role="tablist"]');
			let localRafId: number | null = null;

			const observer = new MutationObserver((mutations) => {
				const isTabListMutation = mutations.some(
					(m) => tabListEl && tabListEl.contains(m.target)
				);
				if (!isTabListMutation) return;

				if (localRafId !== null) cancelAnimationFrame(localRafId);
				localRafId = requestAnimationFrame(() => {
					localRafId = null;
					state.initTabList();
					state.initTabs(state.activeTabIndex);
				});
			});

			// childList: true only - attribute changes (set by initTabs) are not observed, preventing infinite loops
			observer.observe(_ref, {
				childList: true,
				subtree: true
			});

			state._observer = observer;
		}
	});

	onUnMount(() => {
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
			id={props.id ?? state._id()}
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
