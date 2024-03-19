import {
	onMount,
	Show,
	Slot,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBAccordionItemProps, DBAccordionItemState } from './model';
import { cls } from '../../utils';
import { ClickEvent } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: false,
		properties: []
	}
});

export default function DBAccordionItem(props: DBAccordionItemProps) {
	const ref = useRef<HTMLDetailsElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBAccordionItemState>({
		_open: false,
		toggle: (event: ClickEvent<HTMLElement>) => {
			// We need this for react https://github.com/facebook/react/issues/15486#issuecomment-488028431
			event?.preventDefault();
			const newStateOpen = !state._open;
			if (props.onToggle) {
				props.onToggle(newStateOpen);
			}
			state._open = newStateOpen;
		}
	});

	onMount(() => {
		if (props.defaultOpen) {
			state._open = props.defaultOpen;
		}
	});
	// jscpd:ignore-end

	return (
		<details
			ref={ref}
			id={props.id}
			class={cls('db-accordion-item', props.className)}
			aria-disabled={props.disabled}
			open={state._open}
			name={props.name}>
			<summary onClick={(event) => state.toggle(event)}>
				<Slot name="title" />
			</summary>
			<div>
				<Show when={props.content}>{props.content}</Show>
				<Show when={!props.content}>{props.children}</Show>
			</div>
		</details>
	);
}
