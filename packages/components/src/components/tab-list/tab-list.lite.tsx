import {
	onMount,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DEFAULT_ID } from '../../shared/constants';
import { cls, uuid } from '../../utils';
import { DBTabListProps, DBTabListState } from './model';

useMetadata({});
useDefaultProps<DBTabListProps>({});

export default function DBTabList(props: DBTabListProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabListState>({
		_id: DEFAULT_ID
	});

	onMount(() => {
		state._id = props.divid || 'tab-list-' + uuid();
	});
	// jscpd:ignore-end

	return (
		<div
			ref={_ref}
			id={state._id}
			class={cls('db-tab-list', props.className)}>
			<ul role="tablist">{props.children}</ul>
		</div>
	);
}
