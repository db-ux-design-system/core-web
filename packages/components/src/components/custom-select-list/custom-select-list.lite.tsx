import {
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBCustomSelectListProps, DBCustomSelectListState } from './model';
import { cls } from '../../utils';

useMetadata({});

useDefaultProps<DBCustomSelectListProps>({});

export default function DBCustomSelectList(props: DBCustomSelectListProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLUListElement | null>(null);
	// jscpd:ignore-start
	const state = useStore<DBCustomSelectListState>({});
	// jscpd:ignore-end

	return (
		<div
			role={props.multiple ? 'group' : 'radiogroup'}
			aria-label={props.label}
			ref={_ref}
			id={props.id}
			className={cls('db-custom-select-list', props.className)}>
			<ul>{props.children}</ul>
		</div>
	);
}
