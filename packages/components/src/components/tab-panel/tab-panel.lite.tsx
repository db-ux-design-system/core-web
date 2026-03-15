import {
	Show,
	useDefaultProps,
	useRef
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBTabPanelProps } from './model';

useDefaultProps<DBTabPanelProps>({});

export default function DBTabPanel(props: DBTabPanelProps) {
	const _ref = useRef<HTMLDivElement | null>(null);

	return (
		<div
			ref={_ref}
			class={cls('db-tab-panel', props.className)}
			id={props.id}
			role="tabpanel"
			tabIndex={0}
			hidden={props.hidden}
			aria-label={props.ariaLabel}
			aria-labelledby={
				props.ariaLabel ? undefined : props.ariaLabelledby
			}>
			<Show when={props.content}>{props.content}</Show>
			{props.children}
		</div>
	);
}
