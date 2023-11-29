import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBPopoverState, DBPopoverProps } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';
import { ClickEvent } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBPopover(props: DBPopoverProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBPopoverState>({
		_id: DEFAULT_ID,
		handleClick: (event: ClickEvent<HTMLElement>) => {
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
		<i
			ref={ref}
			id={state._id}
			class={cls('db-popover', props.className)}
			data-spacing={props.spacing}
			data-gap={props.gap}
			data-animation={props.animation}
			data-open={props.open}
			data-delay={props.delay}
			data-width={props.width}
			data-placement={props.placement}
			onClick={(event: ClickEvent<HTMLElement>) =>
				state.handleClick(event)
			}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</i>
	);
}
