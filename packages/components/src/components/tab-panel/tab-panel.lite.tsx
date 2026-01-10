import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBTabPanelProps } from './model';

useMetadata({});
useDefaultProps<DBTabPanelProps>({});

export default function DBTabPanel(props: DBTabPanelProps) {
	const _ref = useRef<HTMLDivElement | any>(null);

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
