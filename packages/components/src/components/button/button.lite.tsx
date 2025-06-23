import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import type { DBButtonProps, DBButtonState } from './model';
import { cls, getBoolean, getBooleanAsString, getHideProp } from '../../utils';
import { ClickEvent } from '../../shared/model';

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

	// jscpd:ignore-start
	const state = useStore<DBButtonState>({
		handleClick: (event: ClickEvent<HTMLButtonElement>) => {
			if (props.onClick) {
				props.onClick(event);
			}
		}
	});
	// jscpd:ignore-end

	return (
		<button
			ref={_ref}
			id={props.id}
			class={cls('db-button', props.className)}
			type={props.type || 'button'}
			disabled={getBoolean(props.disabled, 'disabled')}
			aria-label={props.label}
			data-icon={props.icon}
			data-hide-icon={getHideProp(props.showIcon)}
			data-size={props.size}
			data-state={props.state}
			data-width={props.width}
			data-variant={props.variant}
			data-no-text={getBooleanAsString(props.noText)}
			name={props.name}
			form={props.form}
			value={props.value}
			aria-describedby={props.describedbyid}
			aria-expanded={props.ariaexpanded}
			aria-pressed={props.ariapressed}
			onClick={(event: ClickEvent<HTMLButtonElement>) =>
				state.handleClick(event)
			}>
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</button>
	);
}
