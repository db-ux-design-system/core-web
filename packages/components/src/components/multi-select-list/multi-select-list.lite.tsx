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
	const _ref = useRef<HTMLUListElement | null>(null);
	// jscpd:ignore-start
	const state = useStore<DBMultiSelectListState>({});
	// jscpd:ignore-end

	return (
		<section
			ref={_ref}
			id={props.id}
			className={cls('db-multi-select-list', props.className)}>
			<ul>{props.children}</ul>
		</section>
	);
}
