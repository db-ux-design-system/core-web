import {
	onMount,
	useDefaultProps,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, uuid } from '../../utils';
import { DBTabListProps, DBTabListState } from './model';

useDefaultProps<DBTabListProps>({});

export default function DBTabList(props: DBTabListProps) {
	// _ref is required for Mitosis to generate forwardRef in React/Angular output
	const _ref = useRef<HTMLDivElement | null>(null);
	// Static placeholder required by Mitosis: useStore needs a compile-time value to infer types
	// and generate correct framework output.
	const state = useStore<DBTabListState>({
		_id: 'tab-list-base-id'
	});

	onMount(() => {
		state._id = props.id || 'tab-list-' + uuid();
	});
	return (
		<div
			ref={_ref}
			id={state._id}
			class={cls('db-tab-list', props.className)}
			role="tablist"
			// aria-labelledby takes precedence over aria-label per ARIA spec – only one should be set
			aria-label={props.ariaLabel}
			aria-labelledby={props.ariaLabelledby}>
			{props.children}
		</div>
	);
}
