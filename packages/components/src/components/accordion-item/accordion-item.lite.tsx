import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
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
	const state = useStore<DBAccordionItemState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<div ref={component} class={cls('db-accordion-item', props.className)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</div>
	);
}
