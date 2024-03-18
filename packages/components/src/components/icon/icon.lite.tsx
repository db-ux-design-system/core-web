import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import type { DBIconState, DBIconProps } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBIcon(props: DBIconProps) {
	const ref = useRef<HTMLSpanElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBIconState>({
		_id: DEFAULT_ID
	});

	onMount(() => {
		state._id = props.id || 'icon-' + uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<span
			ref={ref}
			id={state._id}
			class={cls('db-icon', props.className)}
			data-icon={props.icon}
			data-icon-weight={props.weight}
			data-icon-variant={props.variant}
			aria-hidden="true">
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</span>
	);
}
