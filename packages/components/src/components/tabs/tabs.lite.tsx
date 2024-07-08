import {
	For,
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBSimpleTabProps, DBTabsProps, DBTabsState } from './model';
import { cls, uuid } from '../../utils';
import { DBButton } from '../button';
import { DBTabList } from '../tab-list';
import { DBTabItem } from '../tab-item';
import { DBTabPanel } from '../tab-panel';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBTabs(props: DBTabsProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabsState>({
		_id: 'tabs-' + uuid(),
		_name: '',
		initialized: false,
		showScrollLeft: false,
		showScrollRight: false,
		scrollContainer: null,
		convertTabs(tabs: unknown[] | string | undefined) {
			try {
				if (typeof tabs === 'string') {
					return JSON.parse(tabs);
				}

				return tabs;
			} catch (error) {
				console.error(error);
			}

			return undefined;
		},
		evaluateScrollButtons(tList: Element) {
			const needsScroll = tList.scrollWidth > tList.clientWidth;

			state.showScrollLeft = needsScroll && tList.scrollLeft > 1;
			state.showScrollRight =
				needsScroll &&
				tList.scrollLeft < tList.scrollWidth - tList.clientWidth;
		},
		scroll(left?: boolean) {
			let step = props.arrowScrollDistance || 100;
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
			if (ref) {
				const tabList = ref.querySelector('.db-tab-list');
				if (tabList) {
					const container = tabList.querySelector('[role="tablist"]');

					container.setAttribute(
						'aria-orientation',
						props.orientation || 'horizontal'
					);

					if (props.behaviour === 'arrows') {
						state.scrollContainer = container;
						state.evaluateScrollButtons(container);
						container.addEventListener('scroll', () => {
							state.evaluateScrollButtons(container);
						});
					}
				}
			}
		},
		initTabs(init?: boolean) {
			if (ref) {
				const tabItems = ref.getElementsByClassName('db-tab-item');
				if (tabItems?.length > 0) {
					Array.from<Element>(tabItems).forEach(
						(tabItem: Element, index: number) => {
							const label = tabItem.querySelector('label');
							const input = tabItem.querySelector('input');

							if (input && label) {
								if (!input.id) {
									const tabId = `${state._name}-tab-${index}`;
									label.setAttribute('for', tabId);
									input.setAttribute(
										'aria-controls',
										`${state._name}-tab-panel-${index}`
									);
									input.id = tabId;
									input.setAttribute('name', state._name);
								}

								if (init) {
									// Auto select
									const autoSelect =
										!props.initialSelectedMode ||
										props.initialSelectedMode === 'auto';
									const shouldAutoSelect =
										(props.initialSelectedIndex ==
											null &&
											index === 0) ||
										props.initialSelectedIndex === index;
									if (autoSelect && shouldAutoSelect) {
										input.click();
									}
								}
							}
						}
					);
				}

				const tabPanels = ref.getElementsByClassName('db-tab-panel');
				if (tabPanels?.length > 0) {
					Array.from<Element>(tabPanels).forEach(
						(panel: Element, index: number) => {
							if (!panel.id) {
								panel.id = `${state._name}-tab-panel-${index}`;
								panel.setAttribute(
									'aria-labelledby',
									`${state._name}-tab-${index}`
								);
							}
						}
					);
				}
			}
		}
	});

	onMount(() => {
		state._id = props.id || state._id;

		state._name = props.name || uuid();

		state.initialized = true;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (ref && state.initialized) {
			state.initTabList();
			state.initTabs(true);

			const tabList = ref.querySelector('.db-tab-list');
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

			state.initialized = false;
		}
	}, [ref, state.initialized]);

	return (
		<div
			ref={ref}
			id={state._id}
			class={cls('db-tabs', props.className)}
			data-orientation={props.orientation}
			data-scroll-behaviour={props.behaviour}
			data-alignment={props.alignment ?? 'start'}
			data-width={props.width ?? 'auto'}>
			<Show when={state.showScrollLeft}>
				<DBButton
					className="tabs-scroll-left"
					variant="ghost"
					icon="chevron_left"
					noText
					onClick={() => state.scroll(true)}>
					Scroll left
				</DBButton>
			</Show>
			<Show when={props.tabs}>
				<DBTabList>
					<For each={state.convertTabs(props.tabs)}>
						{(tab: DBSimpleTabProps, index: number) => (
							<DBTabItem
								key={props.name + 'tab-item' + index}
								active={tab.active}
								label={tab.label}
								iconAfter={tab.iconAfter}
								icon={tab.icon}
								noText={tab.noText}
							/>
						)}
					</For>
				</DBTabList>
				<For each={state.convertTabs(props.tabs)}>
					{(tab: DBSimpleTabProps, index: number) => (
						<DBTabPanel
							key={props.name + 'tab-panel' + index}
							content={tab.content}>
							{tab.children}
						</DBTabPanel>
					)}
				</For>
			</Show>
			<Show when={state.showScrollRight}>
				<DBButton
					className="tabs-scroll-right"
					variant="ghost"
					icon="chevron_right"
					noText
					onClick={() => state.scroll()}>
					Scroll right
				</DBButton>
			</Show>

			{props.children}
		</div>
	);
}
