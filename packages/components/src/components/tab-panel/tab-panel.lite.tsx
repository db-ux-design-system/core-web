import { Show, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBTabPanelProps } from './model';

export default function DBTabPanel(props: DBTabPanelProps) {
	const _ref = useRef<HTMLDivElement | null>(null);

	return (
		<div
			ref={_ref}
			class={cls('db-tab-panel', props.className)}
			id={props.id ?? props.propOverrides?.id}
			role="tabpanel"
			tabIndex={props.hidden ? -1 : 0}
			hidden={props.hidden}>
			<Show when={props.content}>{props.content}</Show>
			{props.children}
		</div>
	);
}
