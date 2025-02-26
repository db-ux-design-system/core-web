// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	For,
	onMount,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBSimpleTabProps, DBTabsProps, DBTabsState } from './model';
import { cls, uuid } from '../../utils';
import DBButton from '../button/button.lite';
import DBTabList from '../tab-list/tab-list.lite';
import DBTabItem from '../tab-item/tab-item.lite';
import DBTabPanel from '../tab-panel/tab-panel.lite';

useMetadata({});
useDefaultProps<DBTabsProps>({});

export default function DBTabs(props: DBTabsProps) {
	const _ref = useRef<HTMLDivElement | null>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabsState>({
		_id: 'tabs-' + uuid(),
		_name: '',
		initialized: false,
		showScrollLeft: false,
		showScrollRight: false,
		scrollContainer: null,
		convertTabs(tabs: unknown[] | string | undefined): DBSimpleTabProps[] {
			try {
				if (typeof tabs === 'string') {
					return JSON.parse(tabs);
				}

				return tabs as DBSimpleTabProps[];
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
				for (const tabItem of tabItems) {
					const index: number = tabItems.indexOf(tabItem);
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
								(props.initialSelectedIndex == null &&
									index === 0) ||
								props.initialSelectedIndex === index;
							if (autoSelect && shouldAutoSelect) {
								input.click();
							}
						}
					}
				}

				const tabPanels = Array.from<Element>(
					_ref.querySelectorAll(
						':is(:scope > .db-tab-panel, :scope > db-tab-panel > .db-tab-panel)'
					)
				);
				for (const panel of tabPanels) {
					if (panel.id) continue;
					const index: number = tabPanels.indexOf(panel);
					panel.id = `${state._name}-tab-panel-${index}`;
					panel.setAttribute(
						'aria-labelledby',
						`${state._name}-tab-${index}`
					);
				}
			}
		},
		handleChange: (event: any) => {
			if (props.onIndexChange && event.target) {
				const list = event.target.closest('ul');
				const listItem =
					// db-tab-item for angular and stencil wrapping elements
					event.target.closest('db-tab-item') ??
					event.target.closest('li');
				if (list !== null && listItem !== null) {
					props.onIndexChange(
						Array.from(list.childNodes).indexOf(listItem)
					);
				}
			}

			if (props.onTabSelect) {
				props.onTabSelect(event);
			}
		}
	});

	onMount(() => {
		state._id = props.id || state._id;

		state._name = `tabs-${props.name || uuid()}`;

		state.initialized = true;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (_ref && state.initialized) {
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

			state.initialized = false;
		}
	}, [_ref, state.initialized]);

	return (
		<div
			ref={_ref}
			id={state._id}
			class={cls('db-tabs', props.className)}
			data-orientation={props.orientation}
			data-scroll-behavior={props.behavior}
			data-alignment={props.alignment ?? 'start'}
			data-width={props.width ?? 'auto'}
			onInput={(event: any) => state.handleChange(event)}>
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
