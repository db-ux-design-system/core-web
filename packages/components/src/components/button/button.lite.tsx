import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBoolean, getBooleanAsString } from '../../utils';
import type { DBButtonProps, DBButtonState } from './model';

/**
 * @module Button
 */

useMetadata({
	angular: {
		nativeAttributes: ['disabled']
	}
});

useDefaultProps<DBButtonProps>({});

/**
 * Renders a configurable button element that works across multiple frameworks.
 *
 * @remarks
 * This component supports different variants, sizes, icons, and ARIA attributes.
 * Use it for primary, secondary, or icon-only actions.
 *
 * @param props - {@link DBButtonProps} defining the button’s behavior and appearance.
 * @returns A `<button>` element with the given props bound.
 *
 * @example
 * ```tsx
 * <DBButton
 *   variant="brand"
 *   size="large"
 *   icon="check"
 *   onClick={(e) => console.log('clicked')}
 * >
 *   Save
 * </DBButton>
 * ```
 */
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
		}
	});

	return (
		<button
			ref={_ref}
			id={props.id}
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
