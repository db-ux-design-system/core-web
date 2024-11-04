import { onMount, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { DBSwitchProps, DBSwitchState } from './model';
import { cls, uuid } from '../../utils';
import { ChangeEvent, InteractionEvent } from '../../shared/model';
import { handleFrameworkEvent } from '../../utils/form-components';

useMetadata({});

export default function DBSwitch(props: DBSwitchProps) {
	// This is used as forwardRef
	const ref = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBSwitchState>({
		_id: 'switch-' + uuid(),
		_checked: false,
		initialized: false,
		handleChange: (event: ChangeEvent<HTMLInputElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			// We have different ts types in different frameworks, so we need to use any here
			state._checked = (event.target as any)?.['checked'];

			handleFrameworkEvent(this, event, 'checked');
		},
		handleBlur: (event: InteractionEvent<HTMLInputElement>) => {
			if (props.onBlur) {
				props.onBlur(event);
			}

			if (props.blur) {
				props.blur(event);
			}
		},
		handleFocus: (event: InteractionEvent<HTMLInputElement>) => {
			if (props.onFocus) {
				props.onFocus(event);
			}

			if (props.focus) {
				props.focus(event);
			}
		}
	});

	onMount(() => {
		state._id = props.id || state._id;
	});
	// jscpd:ignore-end

	return (
		<label
			data-visual-aid={props.visualAid}
			data-size={props.size}
			data-variant={props.variant}
			data-emphasis={props.emphasis}
			htmlFor={state._id}
			class={cls('db-switch', props.className)}>
			<input
				id={state._id}
				type="checkbox"
				role="switch"
				aria-checked={state._checked}
				ref={ref}
				checked={props.checked}
				disabled={props.disabled}
				aria-describedby={props.describedbyid}
				aria-invalid={props.customValidity === 'invalid'}
				data-custom-validity={props.customValidity}
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
			{props.children}
		</label>
	);
}
