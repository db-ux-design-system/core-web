import { onMount, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { DBSwitchProps, DBSwitchState } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';
import { ChangeEvent, InteractionEvent } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBSwitch(props: DBSwitchProps) {
	// This is used as forwardRef
	const ref = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBSwitchState>({
		_id: DEFAULT_ID,
		initialized: false,
		handleChange: (event: ChangeEvent<HTMLInputElement>) => {
			props?.onChange?.(event);

			if (props.change) {
				props.change(event);
			}

			const target = event.target as HTMLInputElement;

			// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
			// VUE:this.$emit("update:checked", target.checked);

			// Change event to work with reactive and template driven forms
			// ANGULAR: this.propagateChange(target.checked);
			// ANGULAR: this.writeValue(target.checked);
		},
		handleBlur: (event: InteractionEvent<HTMLInputElement>) => {
			props?.onBlur?.(event);

			props?.blur?.(event);
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
		state._id = props.id || 'switch-' + uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
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
				ref={ref}
				id={state._id}
				type="checkbox"
				role="switch"
				checked={props.checked}
				disabled={props.disabled}
				aria-describedby={props.describedbyid}
				aria-invalid={props.invalid}
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
