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
import { ColorType, MaterialType } from '../../shared/model';
import { cls, getBooleanAsString } from '../../utils';
import { DBBadgeProps, DBBadgeState } from './model';

useMetadata({});

useDefaultProps<DBBadgeProps>({});

export default function DBBadge(props: DBBadgeProps) {
	const _ref = useRef<HTMLSpanElement | any>(null);
	const state = useStore<DBBadgeState>({
		initialized: false,
		_getMaterial: (): MaterialType | undefined => {
			if (props.material) {
				return props.material;
			}

			if (props.emphasis === 'strong') {
				return 'vibrant';
			}

			return 'filled-1';
		},
		_getColor: (): ColorType | undefined => {
			if (props.color) {
				return props.color;
			}

			if (props.semantic === 'informational') {
				return 'blue';
			}

			if (props.semantic === 'critical') {
				return 'red';
			}

			if (props.semantic === 'warning') {
				return 'yellow';
			}

			if (props.semantic === 'successful') {
				return 'green';
			}

			return "grey";
		}
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
			data-material={state._getMaterial()}
			data-color-next={state._getColor()}
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-badge', props.className)}
			data-semantic={props.semantic}
			data-size={props.size}
			data-emphasis={props.emphasis}
			data-placement={props.placement}
			data-wrap={getBooleanAsString(props.wrap, 'wrap')}
			data-label={
				props.placement?.startsWith('corner') &&
				(props.label ?? DEFAULT_LABEL)
			}>
			<div class="db-badge-content">
				<Show when={props.text}>{props.text}</Show>
				{props.children}
			</div>
		</span>
	);
}
