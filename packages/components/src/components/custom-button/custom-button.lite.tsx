import {
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
		_getMaterial: (): MaterialType | undefined => {
			if (props.material) {
				return props.material;
			}

			if (props.variant === 'brand') {
				return 'origin';
			}

			if (props.variant === 'ghost') {
				return 'transparent';
			}

			if (props.variant === 'filled') {
				return 'semi-transparent';
			}

			if (props.variant === 'adaptive') {
				return undefined;
			}

			return 'filled-1';
		},
		_getColor: (): ColorType | undefined => {
			if (props.color) {
				return props.color;
			}

			if (props.variant === 'brand') {
				return 'brand';
			}

			return undefined;
		}
	});

	return (
		<div
			data-material={state._getMaterial()}
			data-adaptive-color={state._getColor()}
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
