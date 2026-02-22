import {
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBNavigationProps, DBNavigationState } from './model';

useMetadata({});

useDefaultProps<DBNavigationProps>({});

export default function DBNavigation(props: DBNavigationProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBNavigationState>({});

	// jscpd:ignore-end

	return (
		<nav
			ref={_ref}
			id={props.id}
			class={cls('db-navigation', props.className)}>
			<menu>{props.children}</menu>
		</nav>
	);
}
