import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBSectionState, DBSectionProps } from './model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBSection(props: DBSectionProps) {
	const state = useStore<DBSectionState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<section
			className={
				'db-section' + (props.className ? ' ' + props.className : '')
			}
			data-size={props.size || 'small'}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{/* TODO: We need to reevaluate whether we could get rid of this tag */}
			<div data-variant={props.variant}>{props.children}</div>
		</section>
	);
}
