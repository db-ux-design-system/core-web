import {
	onMount,
	Show,
	Slot,
	useMetadata,
	useStore
} from '@builder.io/mitosis';
import { DBAccordionItemState, DBAccordionItemProps } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: false,
		properties: []
	}
});

export default function DBAccordionItem(props: DBAccordionItemProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBAccordionItemState>({
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

		state._open = !!props.open;
	});
	// jscpd:ignore-end

	return (
		<details
			ref={component}
			class={cls('db-accordion-item', props.className)}
			open={state._open}
			onToggle={() => state.toggle()}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<summary>
				<Slot name="summary" />
			</summary>
			<div class="db-accordion-content">{props.children}</div>
		</details>
	);
}
