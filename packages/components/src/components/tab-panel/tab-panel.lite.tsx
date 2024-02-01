import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBTabPanelProps, DBTabPanelState } from './model';
import { cls } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBTabPanel(props: DBTabPanelProps) {
	// This is used as forwardRef
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabPanelState>({
		_id: DEFAULT_ID
	});

	onMount(() => {
		state._id = `${props.name}-tab-panel-${props.index}`;
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<article
			ref={ref}
			class={cls('db-tab-panel', props.className)}
			id={state._id}
			role="tabpanel"
			aria-labelledby={props.name + '-tab-' + props.index}>
			<Show when={props.content}> {props.content}</Show>
			{props.children}
		</article>
	);
}
