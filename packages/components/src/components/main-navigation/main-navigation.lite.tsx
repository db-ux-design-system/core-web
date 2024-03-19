import {
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBMainNavigationProps, DBMainNavigationState } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';
import { isEventTargetNavigationItem } from '../../utils/navigation';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBMainNavigation(props: DBMainNavigationProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBMainNavigationState>({
		_id: DEFAULT_ID,
		initialized: false,
		forceClose: false,
		handleNavigationItemClick: (event: unknown) => {
			if (isEventTargetNavigationItem(event)) {
				state.forceClose = true;
			}
		}
	});

	onMount(() => {
		state._id = props.id || 'main-navigation-' + uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
		state.initialized = true;
	});

	onUpdate(() => {
		if (ref && state.initialized) {
			state.initialized = false;
		}
	}, [ref, state.initialized]);

	onUpdate(() => {
		if (state.forceClose) {
			requestAnimationFrame(() => {
				state.forceClose = false;
			});
		}
	}, [state.forceClose]);

	// jscpd:ignore-end

	return (
		<nav
			ref={ref}
			id={state._id}
			class={cls('db-main-navigation', props.className)}
			onClick={(event) => state.handleNavigationItemClick(event)}
			data-force-close={state.forceClose}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<menu>{props.children}</menu>
		</nav>
	);
}
