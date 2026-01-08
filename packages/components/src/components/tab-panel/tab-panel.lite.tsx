import {
	onMount,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBTabPanelProps, DBTabPanelState } from './model';

useMetadata({});
useDefaultProps<DBTabPanelProps>({});

export default function DBTabPanel(props: DBTabPanelProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabPanelState>({});

	onMount(() => {});
	// jscpd:ignore-end

	return (
		<section
			ref={_ref}
			class={cls('db-tab-panel', props.className)}
			id={props.id}
			hidden={props.hidden}
			role="tabpanel">
			<Show when={props.content}> {props.content}</Show>
			{props.children}
		</section>
	);
}
