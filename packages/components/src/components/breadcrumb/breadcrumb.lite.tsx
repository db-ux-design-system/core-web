import {
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import type { DBBreadcrumbProps, DBBreadcrumbState } from './model';

useMetadata({});

useDefaultProps<DBBreadcrumbProps>({
	size: 'small',
	separator: 'chevron'
});

export default function DBBreadcrumb(props: DBBreadcrumbProps) {
	const _ref = useRef<HTMLElement | any>(null);

	const state = useStore<DBBreadcrumbState>({});

	return (
		<nav
			ref={_ref}
			id={props.id}
			class={cls('db-breadcrumb', props.className)}
			data-size={props.size}
			data-separator={props.separator}
			aria-label="breadcrumb">
			<ol class="db-breadcrumb-list" role="list">
				{props.children}
			</ol>
		</nav>
	);
}
