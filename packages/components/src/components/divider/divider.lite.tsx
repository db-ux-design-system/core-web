import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBDividerState, DBDividerProps } from './model';
import './divider.scss';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBDivider(props: DBDividerProps) {
	const state = useStore<DBDividerState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<div
			data-margin={props.margin}
			data-variant={props.variant}
			class={'db-divider' + (props.className || '')}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
		</div>
	);
}
