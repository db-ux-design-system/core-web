import {onMount, Show, useMetadata, useRef, useStore} from '@builder.io/mitosis';
import type { DBIconState, DBIconProps } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBIcon(props: DBIconProps) {
	const ref = useRef<HTMLSpanElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBIconState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<span
			ref={ref}
			id={props.id}
			class={cls('db-icon', props.className)}
			data-icon={props.icon}
			aria-hidden="true"
			title={props.title}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</span>
	);
}
