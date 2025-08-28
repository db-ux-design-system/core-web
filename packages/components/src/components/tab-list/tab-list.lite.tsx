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
		_id: DEFAULT_ID,
		handleKeydown: (event: any) => {
			const tabs = Array.from<HTMLElement>(
				_ref?.querySelectorAll('[role="tab"]') || []
			);
			
			if (tabs.length === 0) return;
			
			const currentIndex = tabs.findIndex(tab => tab === event.target);
			if (currentIndex === -1) return;
			
			let nextIndex = -1;
			
			switch (event.key) {
				case 'ArrowRight':
				case 'ArrowDown':
					nextIndex = (currentIndex + 1) % tabs.length;
					break;
				case 'ArrowLeft':
				case 'ArrowUp':
					nextIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
					break;
				case 'Home':
					nextIndex = 0;
					break;
				case 'End':
					nextIndex = tabs.length - 1;
					break;
				default:
					return;
			}
			
			if (nextIndex !== -1) {
				event.preventDefault();
				tabs[nextIndex].focus();
			}
		}
	});

	onMount(() => {
		state._id = props.id || 'tab-list-' + uuid();
	});
	// jscpd:ignore-end

	return (
		<div
			ref={_ref}
			id={state._id}
			class={cls('db-tab-list', props.className)}>
			<ul role="tablist" onKeyDown={(event) => state.handleKeydown(event)}>{props.children}</ul>
		</div>
	);
}
