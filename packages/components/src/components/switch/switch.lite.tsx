import {
	onMount,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import { DBSwitchProps, DBSwitchState } from './model';
import { cls, getBooleanAsString, getHideProp, uuid } from '../../utils';
import { ChangeEvent, InteractionEvent } from '../../shared/model';
import {
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'required', 'checked', 'indeterminate']
	}
});
useDefaultProps<DBSwitchProps>({});

export default function DBSwitch(props: DBSwitchProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLInputElement | null>(null);
	// jscpd:ignore-start
	const state = useStore<DBSwitchState>({
		_id: undefined,
		_checked: useTarget({
			react: props['defaultChecked'] ?? false,
			default: false
		}),
		handleChange: (event: ChangeEvent<HTMLInputElement>) => {
			useTarget({
				vue: () => {
					if (props.change) {
						props.change(event);
					}
				},
				default: () => {
					if (props.onChange) {
						props.onChange(event);
					}
				}
			});

			// We have different ts types in different frameworks, so we need to use any here
			state._checked = (event.target as any)?.['checked'];

			useTarget({
				angular: () =>
					handleFrameworkEventAngular(this, event, 'checked'),
				vue: () => handleFrameworkEventVue(() => {}, event, 'checked')
			});
		},
		handleBlur: (event: InteractionEvent<HTMLInputElement>) => {
			useTarget({
				vue: () => {
					if (props.blur) {
						props.blur(event);
					}
				},
				default: () => {
					if (props.onBlur) {
						props.onBlur(event);
					}
				}
			});
		},
		handleFocus: (event: InteractionEvent<HTMLInputElement>) => {
			useTarget({
				vue: () => {
					if (props.focus) {
						props.focus(event);
					}
				},
				default: () => {
					if (props.onFocus) {
						props.onFocus(event);
					}
				}
			});
		}
	});

	onMount(() => {
		state._id = props.id ?? `switch-${uuid()}`;
	});

	onUpdate(() => {
		if (props.checked !== undefined && props.checked !== null) {
			state._checked = !!props.checked;
		}
	}, [props.checked]);

	// jscpd:ignore-end

	return (
		<label
			data-visual-aid={getBooleanAsString(props.visualAid)}
			data-size={props.size}
			data-hide-label={getHideProp(props.showLabel)}
			data-emphasis={props.emphasis}
			htmlFor={state._id}
			class={cls('db-switch', props.className)}>
			<input
				id={state._id}
				type="checkbox"
				role="switch"
				aria-checked={getBooleanAsString(state._checked)}
				ref={_ref}
				checked={props.checked}
				value={props.value}
				disabled={props.disabled}
				aria-describedby={props.describedbyid}
				aria-invalid={props.validation === 'invalid'}
				data-custom-validity={props.validation}
				name={props.name}
				required={props.required}
				data-aid-icon={props.icon}
				data-aid-icon-after={props.iconAfter}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					state.handleChange(event)
				}
				onBlur={(event: InteractionEvent<HTMLInputElement>) =>
					state.handleBlur(event)
				}
				onFocus={(event: InteractionEvent<HTMLInputElement>) =>
					state.handleFocus(event)
				}
			/>
			<Show when={props.label} else={props.children}>
				{props.label}
			</Show>
		</label>
	);
}
