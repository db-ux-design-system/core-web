import {onMount, Show, useMetadata, useRef, useStore} from '@builder.io/mitosis';
import { DBBadgeState, DBBadgeProps } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBBadge(props: DBBadgeProps) {
	const ref = useRef<HTMLSpanElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBBadgeState>({});

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
			class={cls('db-badge', props.className)}
			data-variant={props.variant}
			data-size={props.size}
			data-emphasis={props.emphasis}
			data-placement={props.placement}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</span>
	);
}
