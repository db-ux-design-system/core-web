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
import { DBRadioProps, DBRadioState } from './model';
import { cls, getHideProp, uuid } from '../../utils';
import { ChangeEvent, InteractionEvent } from '../../shared/model';
import { handleFrameworkEvent } from '../../utils/form-components';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'required', 'checked', 'indeterminate']
	}
});
useDefaultProps<DBRadioProps>({});

export default function DBRadio(props: DBRadioProps) {
	const _ref = useRef<HTMLInputElement | null>(null);
	// jscpd:ignore-start
	const state = useStore<DBRadioState>({
		initialized: false,
		_id: undefined,
		handleChange: (event: ChangeEvent<HTMLInputElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			useTarget({
				angular: () => handleFrameworkEvent(this, event, 'checked'),
				vue: () => handleFrameworkEvent(this, event, 'checked')
			});
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
		state.initialized = true;
		state._id = props.id ?? `radio-${uuid()}`;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (props.checked && state.initialized && document && state._id) {
			const radioElement = document?.getElementById(
				state._id
			) as HTMLInputElement;
			if (radioElement) {
				if (props.checked != undefined) {
					radioElement.checked = true;
				}
			}
		}
	}, [state.initialized, props.checked]);

	return (
		<label
			data-size={props.size}
			data-hide-label={getHideProp(props.showLabel)}
			class={cls('db-radio', props.className)}
			htmlFor={state._id}>
			<input
				aria-invalid={props.validation === 'invalid'}
				data-custom-validity={props.validation}
				ref={_ref}
				type="radio"
				id={state._id}
				name={props.name}
				checked={props.checked}
				disabled={props.disabled}
				aria-describedby={props.describedbyid}
				value={props.value}
				required={props.required}
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
