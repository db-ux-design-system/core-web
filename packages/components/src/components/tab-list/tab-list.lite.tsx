import {
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, uuid } from '../../utils';
import { DBTabListProps, DBTabListState } from './model';

useMetadata({});
useDefaultProps<DBTabListProps>({});

export default function DBTabList(props: DBTabListProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	const state = useStore<DBTabListState>({
		_id: props.id || 'tab-list-' + uuid()
	});

	return (
		<div
			ref={_ref}
			id={state._id}
			class={cls('db-tab-list', props.className)}>
			<ul role="tablist">{props.children}</ul>
		</div>
	);
}
