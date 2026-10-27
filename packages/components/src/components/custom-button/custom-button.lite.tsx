import {
	onMount,
	onUpdate,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { ColorType, MaterialType } from '../../shared/model';
import { cls, getBooleanAsString } from '../../utils';
import { DBCustomButtonProps, DBCustomButtonState } from './model';

useMetadata({});

useDefaultProps<DBCustomButtonProps>({});

export default function DBCustomButton(props: DBCustomButtonProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | null>(null);

	const state = useStore<DBCustomButtonState>({
		initialized: false,
		_getAltStateMaterial: (): MaterialType | undefined => {
			if (props.altStateMaterial) {
				return props.altStateMaterial;
			}

			return 'inverted';
		},
		_getAltStateColor: (): ColorType | undefined => {
			return props.altStateColor;
		}
	});

	onMount(() => {
		state.initialized = true;
	});

	onUpdate(() => {
		if (state.initialized) {
			const hasInput = !!_ref?.querySelector('input');

			if (props.material) {
				state._material = props.material;
			} else if (props.variant === 'brand') {
				state._material = hasInput ? 'filled-1' : 'origin';
			} else if (props.variant === 'ghost') {
				state._material = 'transparent';
			} else if (props.variant === 'filled') {
				state._material = 'semi-transparent';
			} else if (props.variant === 'adaptive') {
				state._material = undefined;
			} else {
				state._material = 'filled-1';
			}

			if (props.color) {
				state._color = props.color;
			} else if (props.variant === 'brand') {
				state._color = hasInput ? undefined : 'brand';
			} else {
				state._color = undefined;
			}
		}
	}, [_ref, state.initialized]);

	return (
		<div
			data-material={state._material}
			data-adaptive-color={state._color}
			data-alt-state-material={state._getAltStateMaterial()}
			data-alt-state-adaptive-color={state._getAltStateColor()}
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-custom-button', props.className)}
			data-icon={props.iconLeading ?? props.icon}
			data-show-icon={
				getBooleanAsString(props.showIconLeading, 'showIconLeading') ||
				getBooleanAsString(props.showIcon, 'showIcon')
			}
			data-icon-trailing={props.iconTrailing}
			data-show-icon-trailing={getBooleanAsString(
				props.showIconTrailing,
				'showIconTrailing'
			)}
			data-size={props.size}
			data-width={props.width}
			data-variant={props.variant}
			data-no-text={getBooleanAsString(props.noText, 'noText')}>
			{props.children}
		</div>
	);
}
