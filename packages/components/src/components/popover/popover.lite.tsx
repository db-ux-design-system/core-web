import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBPopoverState, DBPopoverProps } from './model';
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

export default function DBPopover(props: DBPopoverProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBPopoverState>({
		_id: DEFAULT_ID,
		handleClick: (event: any) => {
			event.stopPropagation();
		}
	});

	onMount(() => {
		state._id = props.id || 'popover-' + uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<div
			ref={component}
			id={state._id}
			class={cls('db-popover', props.className)}
			data-spacing={props.spacing}
			data-gap={props.gap}
			data-behaviour={props.behaviour}
			data-open={props.open}
			data-delay={props.delay}
			data-width={props.width}
			data-placement={props.placement}
			onClick={(event) => state.handleClick(event)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</div>
	);
}
