import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBDividerState, DBDividerProps } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBDivider(props: DBDividerProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBDividerState>({
		_id: DEFAULT_ID
	});

	onMount(() => {
		state._id = props.id || 'divider-' + uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<div
			ref={ref}
			id={state._id}
			data-margin={props.margin}
			data-variant={props.variant}
			data-emphasis={props.emphasis}
			class={cls('db-divider', props.className)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
		</div>
	);
}
