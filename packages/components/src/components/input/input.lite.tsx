import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBIcon } from '../icon';
import { DEFAULT_ID, uuid } from '../../utils';
import { DBInputState, DBInputProps, iconVariants } from './model';

useMetadata({
	isAttachedToShadowDom: false,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBInput(props: DBInputProps) {
	const textInputRef = useRef<HTMLInputElement>(null);
	const state = useStore<DBInputState>({
		mId: DEFAULT_ID,
		_isValid: undefined,
		_value: '',
		_placeholder: ' ', // placeholder can't be empty
		_label: 'LABEL SHOULD BE SET',
		handleChange: (event) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			// using controlled components for react forces us to using state for value
			state._value = event.target.value;

			if (textInputRef?.validity?.valid != state._isValid) {
				state._isValid = textInputRef?.validity?.valid;
				if (props.validityChange) {
					props.validityChange(!!textInputRef?.validity?.valid);
				}
			}
		},
		handleBlur: (event) => {
			if (props.onBlur) {
				props.onBlur(event);
			}

			if (props.blur) {
				props.blur(event);
			}
		},
		handleFocus: (event) => {
			if (props.onFocus) {
				props.onFocus(event);
			}

			if (props.focus) {
				props.focus(event);
			}
		}
	});

	onMount(() => {
		state.mId = props.id ? props.id : 'input-' + uuid();

		if (props.value) {
			state._value = props.value;
		}

		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}

		if (props.placeholder) {
			state._placeholder = props.placeholder;
		}

		if (props.label) {
			state._label = props.label;
		}
	});

	return (
		<div
			class={'db-input ' + (props.className || '')}
			data-variant={props.variant}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<Show when={props.iconBefore}>
				<DBIcon icon={props.iconBefore} className="icon-before" />
			</Show>
			<input
				ref={textInputRef}
				id={state.mId}
				name={props.name}
				type={props.type || 'text'}
				placeholder={state._placeholder}
				aria-labelledby={state.mId + '-label'}
				disabled={props.disabled}
				required={props.required}
				value={state._value}
				maxLength={props.maxLength}
				minLength={props.minLength}
				pattern={props.pattern}
				onChange={(event) => state.handleChange(event)}
				onBlur={(event) => state.handleBlur(event)}
				onFocus={(event) => state.handleFocus(event)}
			/>
			<label
				htmlFor={state.mId}
				aria-hidden="true"
				id={state.mId + '-label'}>
				<span>{state._label}</span>
			</label>
			<Show when={props.description}>
				<p className="description">{props.description}</p>
			</Show>
			<Show when={props.variant || props.required || props.pattern}>
				<DBIcon
					icon={props.variant && iconVariants[props.variant]}
					className="icon-input-state"
				/>
			</Show>
			<Show when={props.iconAfter}>
				<DBIcon icon={props.iconAfter} className="icon-after" />
			</Show>
		</div>
	);
}
