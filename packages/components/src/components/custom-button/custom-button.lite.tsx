import {
	onUpdate,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBoolean, getBooleanAsString } from '../../utils';
import { DBCustomButtonProps, DBCustomButtonState } from './model';

useMetadata({});

useDefaultProps<DBCustomButtonProps>({});

export default function DBCustomButton(props: DBCustomButtonProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBCustomButtonState>({});
	// jscpd:ignore-end

	onUpdate(() => {
		if (_ref && props.disabled !== undefined) {
			const dbCustomButton = _ref as HTMLDivElement;
			const disabledProp = getBoolean(props.disabled, 'disabled');
			const button = dbCustomButton.querySelector<
				HTMLButtonElement | HTMLInputElement
			>(':is(button,input)');

			if (button) {
				button.disabled = !!disabledProp;
				return;
			}

			const other =
				dbCustomButton.querySelector<HTMLAnchorElement>(':is(a,label)');
			if (other) {
				if (disabledProp) {
					other.setAttribute('aria-disabled', 'true');
				} else {
					other.removeAttribute('aria-disabled');
				}

				if (other.tagName === 'A') {
					other.tabIndex = disabledProp ? -1 : 0;
				}
			}
		}
	}, [props.disabled, _ref]);

	return (
		<div
			ref={_ref}
			id={props.id}
			class={cls('db-custom-button', props.className)}
			data-icon={props.iconLeading ?? props.icon}
			data-show-icon={getBooleanAsString(
				props.showIconLeading ?? props.showIcon
			)}
			data-icon-trailing={props.iconTrailing}
			data-show-icon-trailing={getBooleanAsString(props.showIconTrailing)}
			data-size={props.size}
			data-width={props.width}
			data-variant={props.variant}
			data-no-text={getBooleanAsString(props.noText)}>
			{props.children}
		</div>
	);
}
