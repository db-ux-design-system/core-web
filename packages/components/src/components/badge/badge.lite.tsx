import {
	onMount,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBBadgeProps, DBBadgeState } from './model';
import { cls } from '../../utils';
import { DEFAULT_LABEL } from '../../shared/constants';

useMetadata({});

useDefaultProps<DBBadgeProps>({});

export default function DBBadge(props: DBBadgeProps) {
	const _ref = useRef<HTMLSpanElement | undefined>(undefined);
	const state = useStore<DBBadgeState>({
		initialized: false
	});

	onMount(() => {
		state.initialized = true;
	});

	onUpdate(() => {
		if (_ref && state.initialized) {
			if (props.placement?.startsWith('corner')) {
				let parent = _ref.parentElement;

				if (parent && parent.localName.includes('badge')) {
					// Angular workaround
					parent = parent.parentElement;
				}

				if (parent) {
					parent.setAttribute('data-has-badge', 'true');
				}
			}
		}
	}, [_ref, state.initialized]);

	return (
		<span
			ref={_ref}
			id={props.id}
			class={cls('db-badge', props.className)}
			data-semantic={props.semantic}
			data-size={props.size}
			data-emphasis={props.emphasis}
			data-placement={props.placement}
			data-label={
				props.placement?.startsWith('corner') &&
				(props.label ?? DEFAULT_LABEL)
			}>
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</span>
	);
}
