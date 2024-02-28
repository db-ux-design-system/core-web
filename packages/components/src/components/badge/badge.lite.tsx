import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBBadgeState, DBBadgeProps } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBBadge(props: DBBadgeProps) {
	const ref = useRef<HTMLSpanElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBBadgeState>({
		_id: DEFAULT_ID
	});

	onMount(() => {
		state._id = props.id || 'badge-' + uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<span
			ref={ref}
			id={state._id}
			class={cls('db-badge', props.className)}
			data-variant={props.variant}
			data-size={props.size}
			data-emphasis={props.emphasis}
			data-placement={props.placement}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</span>
	);
}
