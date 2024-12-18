import { onMount, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { DBTabListProps, DBTabListState } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({});

export default function DBTabList(props: DBTabListProps) {
	// This is used as forwardRef
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabListState>({
		_id: DEFAULT_ID
	});

	onMount(() => {
		state._id = props.id || 'tab-list-' + uuid();
	});
	// jscpd:ignore-end

	return (
		<div
			ref={ref}
			id={state._id}
			class={cls('db-tab-list', props.className)}>
			<ul role="tablist">{props.children}</ul>
		</div>
	);
}
