import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBMainNavigationState, DBMainNavigationProps } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBMainNavigation(props: DBMainNavigationProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBMainNavigationState>({
		_id: DEFAULT_ID
	});

	onMount(() => {
		state._id = props.id || 'main-navigation-' + uuid();
	});

	// jscpd:ignore-end

	return (
		<nav
			ref={ref}
			id={state._id}
			class={cls('db-main-navigation', props.className)}>
			<menu>{props.children}</menu>
		</nav>
	);
}
