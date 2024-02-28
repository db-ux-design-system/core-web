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
import { DBTab } from '../tab';
import { DBTabPanel } from '../tab-panel';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBTabs(props: DBTabsProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabsState>({
		_id: DEFAULT_ID,
		_name: '',
		initialized: false,
		showScrollLeft: false,
		showScrollRight: false,
		scrollContainer: null,
		convertTabs(tabs: any[] | string | undefined) {
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
		}
	});

	onMount(() => {
		state._id = props.id || 'tabs-' + uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}

		state._name = props.name || uuid();

		state.initialized = true;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (ref && state.initialized) {
			const childTabLists = ref.getElementsByClassName('db-tab-list');

			if (childTabLists?.length > 0) {
				const firstTabList = childTabLists.item(0);
				if (firstTabList) {
					if (
						!firstTabList
							.getAttributeNames()
							.includes('aria-orientation')
					) {
						firstTabList.setAttribute(
							'aria-orientation',
							props.orientation || 'horizontal'
						);
					}

					if (props.behaviour === 'arrows') {
						const scrollContainers =
							firstTabList.getElementsByClassName(
								'db-tab-list-scroll-container'
							);

						if (scrollContainers?.length > 0) {
							const container = scrollContainers.item(0);
							state.scrollContainer = container;
							state.evaluateScrollButtons(container);
							container.addEventListener('scroll', () => {
								state.evaluateScrollButtons(container);
							});
						}
					}

					const tabs = firstTabList.getElementsByClassName('db-tab');
					if (tabs?.length > 0) {
						Array.from<Element>(tabs).forEach(
							(tab: Element, index: number) => {
								const attributes = tab.getAttributeNames();
								if (!attributes.includes('data-width')) {
									tab.setAttribute(
										'data-width',
										props.width || 'auto'
									);
								}
								if (!attributes.includes('data-alignment')) {
									tab.setAttribute(
										'data-alignment',
										props.alignment || 'start'
									);
								}

								const input = tab.getElementsByTagName('input');
								if (input.length > 0) {
									const firstInput = input[0];
									if (firstInput.id === DEFAULT_ID) {
										const tabId = `${state._name}-tab-${index}`;
										tab.setAttribute('for', tabId);
										tab.setAttribute(
											'aria-controls',
											`${state._name}-tab-panel-${index}`
										);
										firstInput.id = tabId;
										firstInput.setAttribute(
											'name',
											state._name
										);
									}

									// Auto select
									const autoSelect =
										!props.initialSelectedMode ||
										props.initialSelectedMode === 'auto';
									const shouldAutoSelect =
										(props.initialSelectedIndex ===
											undefined &&
											index === 0) ||
										props.initialSelectedIndex === index;
									if (autoSelect && shouldAutoSelect) {
										firstInput.click();
									}
								}
							}
						);
					}
				}
			}

			const tabPanels = ref.getElementsByClassName('db-tab-panel');
			if (tabPanels?.length > 0) {
				Array.from<Element>(tabPanels).forEach(
					(panel: Element, index: number) => {
						if (panel.id === DEFAULT_ID) {
							panel.id = `${state._name}-tab-panel-${index}`;
							panel.setAttribute(
								'aria-labelledby',
								`${state._name}-tab-${index}`
							);
						}
					}
				);
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
			data-scroll-behaviour={props.behaviour}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<Show when={state.showScrollLeft}>
				<DBButton
					className="tabs-scroll-left"
					variant="text"
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
							<DBTab
								key={props.name + 'tab' + index}
								active={tab.active}
								label={tab.label}
								alignment={tab.alignment}
								width={tab.width}
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
					variant="text"
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
