import {For, onMount, Show, useMetadata, useRef, useStore} from '@builder.io/mitosis';
import { DBTab } from '../tab';
import type { DBTabProps } from '../tab/model';
import type { DBTabBarState, DBTabBarProps } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBTabBar(props: DBTabBarProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabBarState>({
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
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<div
			ref={ref}
			id={props.id}
			class={cls('cmp-tab-bar', props.className)}
			role="tablist">
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<Show when={props.tabs}>
				<For each={state.convertTabs(props.tabs)}>
					{(tab: DBTabProps) => (
						<DBTab
							key={tab.name}
							name={tab.name}
							active={tab.active}
							label={tab.label}
							content={tab.content}>
							{tab.children}
						</DBTab>
					)}
				</For>
			</Show>
			{/* TODO: Overwrite children names if prop.name is set */}
			{props.children}
		</div>
	);
}
