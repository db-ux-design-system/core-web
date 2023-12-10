import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBTooltipProps, DBTooltipState } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';
import { ClickEvent } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBTooltip(props: DBTooltipProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTooltipState>({
		_id: DEFAULT_ID,
		handleClick: (event: ClickEvent<HTMLElement>) => {
			event.stopPropagation();
		}
	});

	onMount(() => {
		state._id = props.id || 'tooltip-' + uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	// TODO: Shall we check if only <span>, <p> or direct text was passed as children?
	return (
		<i
			role="tooltip"
			ref={ref}
			className={cls('db-tooltip', props.className)}
			id={state._id}
			data-emphasis={props.emphasis}
			data-animation={props.animation}
			data-delay={props.delay}
			data-width={props.width}
			data-variant={props.variant}
			data-placement={props.placement}
			// TODO: clarify this attribute and we need to set it statically
			data-gap="true"
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
