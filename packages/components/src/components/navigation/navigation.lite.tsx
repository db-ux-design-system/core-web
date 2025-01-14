import {
	onMount,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBNavigationProps, DBNavigationState } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({});

useDefaultProps<DBNavigationProps>({});

export default function DBNavigation(props: DBNavigationProps) {
	const _ref = useRef<HTMLDivElement | null>(null);
	// jscpd:ignore-start
	const state = useStore<DBNavigationState>({
		_id: DEFAULT_ID
	});

	onMount(() => {
		state._id = props.id || 'navigation-' + uuid();
	});

	// jscpd:ignore-end

	return (
		<nav
			ref={_ref}
			id={state._id}
			aria-labelledby={props.labelledBy}
			class={cls('db-navigation', props.className)}>
			<menu>{props.children}</menu>
		</nav>
	);
}
