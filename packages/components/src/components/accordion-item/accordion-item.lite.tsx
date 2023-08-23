import {
	onMount,
	onUpdate,
	Show,
	Slot,
	useMetadata,
	useStore
} from '@builder.io/mitosis';
import { DBAccordionItemState, DBAccordionItemProps } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

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
		_id: DEFAULT_ID,
		toggle: (event: any) => {
			// We need this for react https://github.com/facebook/react/issues/15486#issuecomment-488028431
			event?.preventDefault();
			if (props.onToggle) {
				props.onToggle(!props.open);
			}
		}
	});

	onMount(() => {
		state._id = props.id || 'accordion-item-' + uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<details
			ref={component}
			id={state._id}
			class={cls('db-accordion-item', props.className)}
			aria-disabled={props.disabled}
			open={props.open}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<summary onClick={(event) => state.toggle(event)}>
				<Show when={props.title}>{props.title}</Show>
				<Show when={!props.title}>
					<Slot name="title" />
				</Show>
			</summary>
			<div>
				<Show when={props.content}>{props.content}</Show>
				<Show when={!props.content}>{props.children}</Show>
			</div>
		</details>
	);
}
