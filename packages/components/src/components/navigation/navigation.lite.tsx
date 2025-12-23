import {
	onMount,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DEFAULT_ID } from '../../shared/constants';
import { cls, uuid } from '../../utils';
import { DBNavigationProps, DBNavigationState } from './model';

useMetadata({});

useDefaultProps<DBNavigationProps>({});

export default function DBNavigation(props: DBNavigationProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBNavigationState>({
		_id: DEFAULT_ID
	});

	onMount(() => {
		state._id = props.idNav || 'navigation-' + uuid();
	});

	// jscpd:ignore-end

	return (
		<nav
			ref={_ref}
			id={state._id}
			class={cls('db-navigation', props.className)}>
			<menu>{props.children}</menu>
		</nav>
	);
}
