import {
	For,
	onMount,
	onUpdate,
	Show,
	Slot,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBSimpleTabProps, DBTabsProps, DBTabsState } from './model';
import { cls } from '../../utils';
import { DBButton } from '../button';
import { DBTabList } from '../tab-list';
import { DBTab } from '../tab';
import { DBTabPanel } from '../tab-panel';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBTabs(props: DBTabsProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabsState>({
		initialized: false,
		showScrollLeft: false,
		showScrollRight: false,
		tabList: null,
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
			state.tabList?.scrollBy({
				top: 0,
				left: step,
				behavior: 'smooth'
			});
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}

		state.initialized = true;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (ref && state.initialized) {
			const childTabLists = ref.getElementsByClassName('db-tab-list');

			if (childTabLists?.length > 0) {
				const firstTabList = childTabLists.item(0);
				state.tabList = firstTabList;
				firstTabList.setAttribute(
					'aria-orientation',
					props.orientation || 'horizontal'
				);

				if (props.behaviour === 'arrows') {
					state.evaluateScrollButtons(firstTabList);
					firstTabList.addEventListener('scroll', () => {
						state.evaluateScrollButtons(firstTabList);
					});
				}

				const tabs = firstTabList.getElementsByClassName('db-tab');
				if (tabs?.length > 0) {
					Array.from<Element>(tabs).forEach(
						(tab: Element, index: number) => {
							tab.setAttribute(
								'data-width',
								props.width || 'auto'
							);
							tab.setAttribute(
								'data-alignment',
								props.alignment || 'start'
							);

							const input = tab.getElementsByTagName('input');
							if (
								input?.length > 0 &&
								(!props.initialSelectedMode ||
									props.initialSelectedMode === 'auto')
							) {
								if (
									(props.initialSelectedIndex === undefined &&
										index === 0) ||
									props.initialSelectedIndex === index
								) {
									input[0].click();
								}
							}
						}
					);
				}
			}

			state.initialized = false;
		}
	}, [ref, state.initialized]);

	return (
		<div
			ref={ref}
			id={props.id}
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
						{(tab: DBSimpleTabProps) => (
							<DBTab
								key={tab.name + 'tab' + tab.index}
								index={tab.index}
								name={tab.name}
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
					{(tab: DBSimpleTabProps) => (
						<DBTabPanel
							key={tab.name + 'tab' + tab.index}
							index={tab.index}
							name={tab.name}
							content={tab.content}>
							{tab.children}
						</DBTabPanel>
					)}
				</For>
			</Show>
			<Slot name="tab-list" />
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
