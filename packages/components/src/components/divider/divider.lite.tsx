import {onMount, Show, useMetadata, useRef, useStore} from '@builder.io/mitosis';
import { DBDividerState, DBDividerProps } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBDivider(props: DBDividerProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBDividerState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<div
			ref={ref}
			id={props.id}
			data-margin={props.margin}
			data-variant={props.variant}
			data-emphasis={props.emphasis}
			class={cls('db-divider', props.className)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
		</div>
	);
}
