import { Show, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBTabPanelProps } from './model';

export default function DBTabPanel(props: DBTabPanelProps) {
	const _ref = useRef<HTMLDivElement | null>(null);

	return (
		<div
			ref={_ref}
			data-material={props.material}
			data-adaptive-color={props.color}
			class={cls('db-tab-panel', props.className)}
			role="tabpanel"
			hidden={props.hidden}
			tabIndex={0}>
			<Show when={props.content}>{props.content}</Show>
			{props.children}
		</div>
	);
}
