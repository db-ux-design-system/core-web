import {
	onMount,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBTabListProps, DBTabListState } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({});
useDefaultProps<DBTabListProps>({});

export default function DBTabList(props: DBTabListProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLFormElement | null>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabListState>({
		_id: DEFAULT_ID,
		handleChange: (event: any) => {
			if (props.onIndexChange && event?.target?.['form']) {
				props.onIndexChange(
					Array.from(event?.target?.['form']).indexOf(event.target)
				);
			}

			if (props.onTabSelect) {
				props.onTabSelect(event?.target);
			}
		}
	});

	onMount(() => {
		state._id = props.id || 'tab-list-' + uuid();
	});
	// jscpd:ignore-end

	return (
		<form
			ref={_ref}
			id={state._id}
			class={cls('db-tab-list', props.className)}
			onInput={(event: any) => state.handleChange(event)}>
			<ul role="tablist">{props.children}</ul>
		</form>
	);
}
