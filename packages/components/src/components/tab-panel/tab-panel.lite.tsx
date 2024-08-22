import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBTabPanelProps, DBTabPanelState } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBTabPanel(props: DBTabPanelProps) {
	// This is used as forwardRef
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabPanelState>({});

	onMount(() => {});
	// jscpd:ignore-end

	return (
		<section
			ref={ref}
			class={cls('db-tab-panel', props.className)}
			id={props.id}
			role="tabpanel"
			aria-labelledby={props.labelledBy}>
			<Show when={props.content}> {props.content}</Show>
			{props.children}
		</section>
	);
}
