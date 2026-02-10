import {
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
	const _ref = useRef<HTMLDivElement | null>(null);

	const state = useStore<DBTabPanelState>({});

	return (
		<section
			ref={_ref}
			class={cls('db-tab-panel', props.className)}
			id={props.id}
			role="tabpanel"
			hidden={props.hidden}
			aria-labelledby={props.ariaLabelledby}>
			<Show when={props.content}> {props.content}</Show>
			{props.children}
		</section>
	);
}
