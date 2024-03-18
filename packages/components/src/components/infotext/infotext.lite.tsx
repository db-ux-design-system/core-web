import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBInfotextProps, DBInfotextState } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBInfotext(props: DBInfotextProps) {
	const ref = useRef<HTMLSpanElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBInfotextState>({
		_id: DEFAULT_ID
	});
	// jscpd:ignore-end

	onMount(() => {
		state._id = props.id || 'infotext-' + uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	// TODO: Check if this should be a div or a span
	return (
		<span
			ref={ref}
			id={state._id}
			class={cls('db-infotext', props.className)}
			data-icon={props.icon}
			data-variant={props.variant}
			data-size={props.size}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</span>
	);
}
