import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { ColorType, MaterialType } from '../../shared/model';
import { cls, getBoolean, getBooleanAsString } from '../../utils';
import type { DBButtonProps, DBButtonState } from './model';

useMetadata({
	angular: {
		nativeAttributes: ['disabled']
	}
});

useDefaultProps<DBButtonProps>({});

export default function DBButton(props: DBButtonProps) {
	const _ref = useRef<HTMLButtonElement | any>(null);

	const state = useStore<DBButtonState>({
		getButtonType: () => {
			if (props.type) {
				return props.type;
			} else if (props.onClick) {
				return 'button';
			}
			return 'submit';
		},
		_getMaterial: (): MaterialType | undefined => {
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

			return 'filled';
		},
		_getColor: (): ColorType | undefined => {
			if (props.variant === 'brand') {
				return 'brand';
			}

			return undefined;
		}
	});

	return (
		<button
			data-material={state._getMaterial()}
			data-color={state._getColor()}
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-button', props.className)}
			type={state.getButtonType()}
			disabled={getBoolean(props.disabled, 'disabled')}
			data-icon={props.iconLeading ?? props.icon}
			data-show-icon={getBooleanAsString(
				props.showIconLeading ?? props.showIcon
			)}
			data-icon-trailing={props.iconTrailing}
			data-show-icon-trailing={getBooleanAsString(props.showIconTrailing)}
			data-size={props.size}
			data-width={props.width}
			data-variant={props.variant}
			data-wrap={getBooleanAsString(props.wrap)}
			data-no-text={getBooleanAsString(props.noText)}
			name={props.name}
			form={props.form}
			value={props.value}>
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</button>
	);
}
