import {
	onMount,
	onUpdate,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBNavigationProps, DBNavigationState } from './model';
import { cls } from '../../utils';
import { handleSubNavigationPosition } from '../../utils/navigation';

useMetadata({});

useDefaultProps<DBNavigationProps>({});

export default function DBNavigation(props: DBNavigationProps) {
	const _ref = useRef<HTMLDivElement | any>(null);

	const state = useStore<DBNavigationState>({
		initialized: false
	});

	onMount(() => {
		state.initialized = true;
	});

	onUpdate(() => {
		if (_ref && state.initialized) {
			handleSubNavigationPosition(_ref);
		}
	}, [_ref, state.initialized]);

	return (
		<nav
			ref={_ref}
			onScroll={() => {
				handleSubNavigationPosition(_ref);
			}}
			id={props.id}
			aria-labelledby={props.labelledBy}
			class={cls('db-navigation', props.className)}>
			<menu>{props.children}</menu>
		</nav>
	);
}
