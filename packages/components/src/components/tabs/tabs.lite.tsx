import {
	For,
	onMount,
	onUnMount,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import { InputEvent } from '../../shared/model';
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
	// jscpd:ignore-start
	const state = useStore<DBTabsState>({
		mName: '',
		mInitialized: false,
		mShowScrollLeft: false,
		mShowScrollRight: false,
		mScrollContainer: null,
		mResizeObserver: undefined,
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

			state.mShowScrollLeft = needsScroll && tList.scrollLeft > 1;
			state.mShowScrollRight =
				needsScroll &&
				tList.scrollLeft < tList.scrollWidth - tList.clientWidth;
		},
		scroll(left?: boolean) {
			let step = Number(props.arrowScrollDistance) || 100;
			if (left) {
				step *= -1;
			}
			state.mScrollContainer?.scrollBy({
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
							state.mScrollContainer = container;
							state.evaluateScrollButtons(container);
							container.addEventListener('scroll', () => {
								state.evaluateScrollButtons(container);
							});
							// Use ResizeObserver to re-evaluate scroll buttons because it provides more accurate, container-specific resize detection than global window resize events.
							if (!state.mResizeObserver) {
								const observer = new ResizeObserver(() => {
									state.evaluateScrollButtons(container);
								});
								observer.observe(container);
								state.mResizeObserver = observer;
							}
						}
					}
				}
			}
		},
		initTabs(init?: boolean) {
			if (_ref) {
				const tabItems = Array.from<Element>(
					_ref.getElementsByClassName('db-tab-item')
				);
				const tabPanels = Array.from<Element>(
					_ref.querySelectorAll(
						':is(:scope > .db-tab-panel, :scope > db-tab-panel > .db-tab-panel)'
					)
				);
				for (const tabItem of tabItems) {
					const index: number = tabItems.indexOf(tabItem);
					const label = tabItem.querySelector('label');
					const input = tabItem.querySelector('input');

					if (input && label) {
						if (!input.id) {
							const tabId = `${state.mName}-tab-${index}`;
							label.setAttribute('for', tabId);
							input.id = tabId;
							input.setAttribute('name', state.mName);
							if (tabPanels.length > index) {
								input.setAttribute(
									'aria-controls',
									`${state.mName}-tab-panel-${index}`
								);
							}
						}

						if (init) {
							// Auto select
							const autoSelect =
								!props.initialSelectedMode ||
								props.initialSelectedMode === 'auto';
							const shouldAutoSelect =
								(props.initialSelectedIndex == null &&
									index === 0) ||
								Number(props.initialSelectedIndex) === index;
							if (autoSelect && shouldAutoSelect) {
								input.click();
							}
						}
					}
				}

				for (const panel of tabPanels) {
					if (panel.id) continue;
					const index: number = tabPanels.indexOf(panel);
					panel.id = `${state.mName}-tab-panel-${index}`;
					panel.setAttribute(
						'aria-labelledby',
						`${state.mName}-tab-${index}`
					);
				}
			}
		},
		handleChange: (event: InputEvent<HTMLElement>) => {
			event.stopPropagation();

			if (event.target) {
				const target = event.target as HTMLElement;
				const parent = target.parentElement;
				if (
					parent &&
					parent.parentElement &&
					parent.parentElement?.nodeName === 'LI'
				) {
					const tabItem = useTarget({
						angular: parent.parentElement.parentElement,
						stencil: parent.parentElement.parentElement,
						default: parent.parentElement
					});
					if (tabItem) {
						const list = tabItem.parentElement;
						if (list) {
							const tabIndex = Array.from(list.children).indexOf(
								tabItem
							);
							if (props.onIndexChange) {
								props.onIndexChange(tabIndex);
							}

							if (props.onTabSelect) {
								props.onTabSelect(event);
							}
						}
					}
				}
			}
		}
	});

	onMount(() => {
		state.mName = `tabs-${props.name || uuid()}`;

		state.mInitialized = true;
	});
	// jscpd:ignore-end

	onUnMount(() => {
		state.mResizeObserver?.disconnect();
		state.mResizeObserver = undefined;
	});

	onUpdate(() => {
		if (_ref && state.mInitialized) {
			state.initTabList();
			state.initTabs(true);

			const tabList = _ref.querySelector('.db-tab-list');
			if (tabList) {
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

				observer.observe(tabList, {
					childList: true,
					subtree: true
				});
			}

			state.mInitialized = false;
		}
	}, [_ref, state.mInitialized]);

	return (
		<div
			ref={_ref}
			id={props.id ?? props._id}
			class={cls('db-tabs', props.className)}
			data-orientation={props.orientation}
			data-scroll-behavior={props.behavior}
			data-alignment={props.alignment ?? 'start'}
			data-width={props.width ?? 'auto'}
			onInput={(event) => state.handleChange(event)}
			onChange={(event) => state.handleChange(event)}>
			<Show when={state.mShowScrollLeft}>
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
								active={tab.active}
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
							content={tab.content}>
							{tab.children}
						</DBTabPanel>
					)}
				</For>
			</Show>
			<Show when={state.mShowScrollRight}>
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

			{props.children}
		</div>
	);
}
