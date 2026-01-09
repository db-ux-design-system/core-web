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
	const state = useStore<DBTabsState>({
		_id: 'tabs-' + uuid(),
		_name: '',
		activeTabIndex: 0,
		initialized: false,
		showScrollLeft: false,
		showScrollRight: false,
		scrollContainer: null,
		_resizeObserver: undefined,
		activateTab(index: number) {
			state.activeTabIndex = index;
			if (props.onIndexChange) {
				props.onIndexChange(index);
			}
			state.initTabs();
		},
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
		evaluateScrollButtons(tList: Element) {
			const needsScroll = tList.scrollWidth > tList.clientWidth;

			state.showScrollLeft = needsScroll && tList.scrollLeft > 1;
			state.showScrollRight =
				needsScroll &&
				tList.scrollLeft < tList.scrollWidth - tList.clientWidth;
		},
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

						if (props.behavior === 'arrows') {
							state.scrollContainer = container;
							state.evaluateScrollButtons(container);
							container.addEventListener('scroll', () => {
								state.evaluateScrollButtons(container);
							});
							// Use ResizeObserver to re-evaluate scroll buttons because it provides more accurate, container-specific resize detection than global window resize events.
							if (!state._resizeObserver) {
								const observer = new ResizeObserver(() => {
									state.evaluateScrollButtons(container);
								});
								observer.observe(container);
								state._resizeObserver = observer;
							}
						}

						if (props.name) {
							container.setAttribute('aria-label', props.name);
						}
					}
				}
			}
		},
		initTabs() {
			if (_ref) {
				const tabItems = Array.from<HTMLElement>(
					_ref.getElementsByClassName('db-tab-item')
				);
				const tabPanels = Array.from<Element>(
					_ref.querySelectorAll(
						':is(:scope > .db-tab-panel, :scope > db-tab-panel > .db-tab-panel)'
					)
				);

				const buttons: HTMLElement[] = tabItems
					.map((item) => item.querySelector('[role="tab"]'))
					.filter((b): b is HTMLElement => !!b);

				buttons.forEach((button, index) => {
					if (!button.id) {
						button.id = `${state._name}-tab-${index}`;
					}
					if (tabPanels.length > index) {
						const panelId =
							tabPanels[index].id ||
							`${state._name}-tab-panel-${index}`;
						button.setAttribute('aria-controls', panelId);
					}

					const isActive = state.activeTabIndex === index;
					const hasActiveSelection = state.activeTabIndex !== -1;
					button.setAttribute('aria-selected', String(isActive));
					const isFocusable = hasActiveSelection
						? isActive
						: index === 0;
					button.setAttribute('tabindex', isFocusable ? '0' : '-1');

					button.onclick = (event) => {
						event.preventDefault();
						state.activateTab(index);
					};

					button.onkeydown = (event: KeyboardEvent) => {
						const key = event.key;
						let flag = false;
						let nextIndex = index;

						switch (key) {
							case 'ArrowLeft':
								nextIndex = index - 1;
								flag = true;
								break;
							case 'ArrowRight':
								nextIndex = index + 1;
								flag = true;
								break;
							case 'ArrowUp':
								if (props.orientation === 'vertical') {
									nextIndex = index - 1;
									flag = true;
								}
								break;
							case 'ArrowDown':
								if (props.orientation === 'vertical') {
									nextIndex = index + 1;
									flag = true;
								}
								break;
							case 'Home':
								nextIndex = 0;
								flag = true;
								break;
							case 'End':
								nextIndex = buttons.length - 1;
								flag = true;
								break;
							default:
								break;
						}

						if (flag) {
							event.preventDefault();
							event.stopPropagation();

							if (nextIndex < 0) {
								nextIndex = buttons.length - 1;
							} else if (nextIndex >= buttons.length) {
								nextIndex = 0;
							}

							const nextButton = buttons[nextIndex];
							if (nextButton) {
								button.setAttribute('tabindex', '-1');
								nextButton.setAttribute('tabindex', '0');
								nextButton.focus();

								if (props.initialSelectedMode !== 'manually') {
									state.activateTab(nextIndex);
								}
							}
						}
					};
				});

				// Set ids and link them back to tabs
				tabPanels.forEach((panel, index) => {
					if (!panel.id) {
						panel.id = `${state._name}-tab-panel-${index}`;
					}
					const tabButton = buttons[index];
					if (tabButton && tabButton.id) {
						panel.setAttribute('aria-labelledby', tabButton.id);
					}

					if (state.activeTabIndex === index) {
						panel.removeAttribute('hidden');
					} else {
						panel.setAttribute('hidden', '');
					}
				});
			}
		}
	});

	onMount(() => {
		state._id = props.id || state._id;

		state._name = `tabs-${props.name || uuid()}`;

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
			id={state._id}
			class={cls('db-tabs', props.className)}
			data-orientation={props.orientation}
			data-scroll-behavior={props.behavior}
			data-alignment={props.alignment ?? 'start'}
			data-width={props.width ?? 'auto'}>
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
								active={state.activeTabIndex === index}
								tabIndex={
									state.activeTabIndex === -1 && index === 0
										? 0
										: undefined
								}
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
							content={tab.content}
							hidden={state.activeTabIndex !== index}>
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
