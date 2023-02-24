import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBAccordionState, DBAccordionProps } from './model';

import { DBIcon } from '../icon';
import { DBDivider } from '../divider';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBAccordion(props: DBAccordionProps) {
	const state = useStore<DBAccordionState>({
		_open: false,
		toggle: () => {
			state._open = !state._open;
			if (props.onToggle) {
				props.onToggle(state._open);
			}
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
		state._open = props.open;
	});

	return (
		<details
			class={
				'db-accordion' + (props.className ? ' ' + props.className : '')
			}
			open={state._open}
			onToggle={() => state.toggle()}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<summary>
				{props.summary}
				<DBIcon
					icon={state._open ? 'expand-less' : 'expand-more'}></DBIcon>
			</summary>
			<div class="db-accordion-content">{props.children}</div>
		</details>
	);
}
