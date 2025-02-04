import {
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBMultiSelectListProps, DBMultiSelectListState } from './model';
import { cls } from '../../utils';

useMetadata({});

useDefaultProps<DBMultiSelectListProps>({});

export default function DBMultiSelectList(props: DBMultiSelectListProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLUListElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBMultiSelectListState>({});
	// jscpd:ignore-end

	return (
		<ul
			ref={_ref}
			id={props.id}
			class={cls('db-multi-select-list', props.className)}>
			{props.children}
		</ul>
	);
}
