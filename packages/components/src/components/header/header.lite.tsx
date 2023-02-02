import {
	onMount,
	Show,
	Slot,
	useMetadata,
	useStore
} from '@builder.io/mitosis';
import { DBHeaderState, DBHeaderProps } from './model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBHeader(props: DBHeaderProps) {
	const state = useStore<DBHeaderState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<header
			class={'db-header' + (props.className ? ' ' + props.className : '')}
			role="banner">
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<Slot name="brand" />
			<div class="desktop-navigation">
				<Slot name="desktop-navigation" />
			</div>
			<div class="mobile-navigation">
				<Slot name="mobile-navigation" />
			</div>
			<div class="meta-navigation">
				<Slot name="meta-navigation" />
			</div>
			{props.children}
		</header>
	);
}
