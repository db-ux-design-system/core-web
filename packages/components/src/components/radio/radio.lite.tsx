import {
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBRadioProps, DBRadioState } from './model';
import { uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';
import { cls } from '../../utils';
import { ChangeEvent, InteractionEvent } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBRadio(props: DBRadioProps) {
	const ref = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBRadioState>({
		initialized: false,
		_id: DEFAULT_ID,
		handleChange: (event: ChangeEvent<HTMLInputElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

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
		state._id = props.id || 'radio-' + uuid();

		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
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
	}, [state.initialized]);

	return (
		<label
			data-size={props.size}
			data-label-variant={props.labelVariant}
			class={cls('db-radio', props.className)}
			htmlFor={state._id}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<input
				ref={ref}
				type="radio"
				id={state._id}
				name={props.name}
				checked={props.checked}
				disabled={props.disabled}
				aria-describedby={props.describedbyid}
				aria-invalid={props.invalid}
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
			<Show when={props.label}>
				<span>{props.label}</span>
			</Show>
			{props.children}
		</label>
	);
}
