import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBAccordionItemState, DBAccordionItemProps } from './model';
import { DBIcon } from '../icon';
import { DBDivider } from '../divider';
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

		state._open = props.open;
	});
	// jscpd:ignore-end

	return (
		// <div ref={component} class={cls('db-accordion-item', props.className)}>
		// 	<Show when={state.stylePath}>
		// 		<link rel="stylesheet" href={state.stylePath} />
		// 	</Show>
		// 	{props.children}
		// </div>

		<details
			ref={component}
			class={cls('db-accordion-item', props.className)}
			open={state._open}
			onToggle={() => state.toggle()}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<summary role="button">
				<DBDivider
					margin="none"
					className="db-accordion-top-divider"></DBDivider>
				{props.summary}
				<DBIcon
					icon={state._open ? 'expand-less' : 'expand-more'}></DBIcon>

				<Show when={props.isLastChild}>
					<DBDivider
						margin="none"
						className="db-accordion-bottom-divider"></DBDivider>
				</Show>
			</summary>
			<div class="db-accordion-content">{props.children}</div>
		</details>
	);
}
