import {onMount, Show, useMetadata, useRef, useStore} from '@builder.io/mitosis';
import { DBMainNavigationState, DBMainNavigationProps } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBMainNavigation(props: DBMainNavigationProps) {
	const ref = useRef<HTMLDivElement>(null);
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
			ref={ref}
			id={props.id}
			class={cls('db-main-navigation', props.className)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<menu>{props.children}</menu>
		</nav>
	);
}
