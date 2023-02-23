import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBSelectState, DBSelectProps } from './model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBSelect(props: DBSelectProps) {
	const state = useStore<DBSelectState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<div
			class={
				'db-select' + (props.className ? ' ' + props.className : '')
			}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
		</div>
	);
}
