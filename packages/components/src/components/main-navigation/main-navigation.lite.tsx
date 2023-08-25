import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBMainNavigationState, DBMainNavigationProps } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: false,
		properties: []
	}
});

export default function DBMainNavigation(props: DBMainNavigationProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBMainNavigationState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	// jscpd:ignore-end

	return (
		<nav
			ref={component}
			id={props.id}
			class={cls('db-main-navigation', props.className)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<menu>{props.children}</menu>
		</nav>
	);
}
