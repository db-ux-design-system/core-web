import {
	onMount,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DEFAULT_LABEL } from '../../shared/constants';
import { cls } from '../../utils';
import { DBBadgeProps, DBBadgeState } from './model';

useMetadata({});

useDefaultProps<DBBadgeProps>({});

export default function DBBadge(props: DBBadgeProps) {
	const _ref = useRef<HTMLSpanElement | any>(null);
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
					parent.dataset['hasBadge'] = 'true';
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
			data-weight={props.weight}
			data-text-opacity={props.textOpacity}
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
