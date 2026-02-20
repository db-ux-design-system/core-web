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
import { cls, getBooleanAsString } from '../../utils';
import { DBBadgeProps, DBBadgeState } from './model';

useMetadata({});

useDefaultProps<DBBadgeProps>({});

export default function DBBadge(props: DBBadgeProps) {
	const _ref = useRef<HTMLSpanElement | any>(null);
	const state = useStore<DBBadgeState>({
		mInitialized: false
	});

	onMount(() => {
		state.mInitialized = true;
	});

	onUpdate(() => {
		if (_ref && state.mInitialized) {
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
	}, [_ref, state.mInitialized]);

	return (
		<span
			ref={_ref}
			id={props.id ?? props._id}
			class={cls('db-badge', props.className)}
			data-semantic={props.semantic}
			data-size={props.size}
			data-emphasis={props.emphasis}
			data-placement={props.placement}
			data-wrap={getBooleanAsString(props.wrap)}
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
