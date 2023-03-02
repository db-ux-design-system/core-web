import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBIcon } from '../icon';
import { uuid } from '../../utils';
import { DBInputProps, DBInputState } from './model';
import { DEFAULT_ID, DEFAULT_LABEL } from '../../shared/constants';
import { DefaultVariantsIcon } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBInput(props: DBInputProps) {
	// This is used as forwardRef
	let component: any;
	const formRef = useRef<HTMLInputElement>(null);
	const state = useStore<DBInputState>({
		_id: DEFAULT_ID,
		_isValid: undefined,
		_value: '',
		_placeholder: ' ', // placeholder can't be empty
		_label: DEFAULT_LABEL,
		getIcon: (variant) => {
			if (variant) {
				return DefaultVariantsIcon[variant];
			}

			return '';
		},
		handleChange: (event) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			// using controlled components for react forces us to using state for value
			state._value = event.target.value;

			if (formRef?.validity?.valid != state._isValid) {
				state._isValid = formRef?.validity?.valid;
				if (props.validityChange) {
					props.validityChange(!!formRef?.validity?.valid);
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
		state._id = props.id ? props.id : 'input-' + uuid();

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
			ref={component}
			class={'db-input ' + (props.className || '')}
			data-variant={props.variant}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<Show when={props.iconBefore}>
				<DBIcon icon={props.iconBefore} class="icon-before" />
			</Show>
			<input
				ref={formRef}
				id={state._id}
				name={props.name}
				type={props.type || 'text'}
				placeholder={state._placeholder}
				aria-labelledby={state._id + '-label'}
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
				htmlFor={state._id}
				aria-hidden="true"
				id={state._id + '-label'}>
				<span>{state._label}</span>
			</label>
			<Show when={props.description}>
				<p class="description">{props.description}</p>
			</Show>
			<Show when={props.variant || props.required || props.pattern}>
				<DBIcon
					icon={state.getIcon(props.variant)}
					class="icon-input-state"
				/>
			</Show>
			<Show when={props.iconAfter}>
				<DBIcon icon={props.iconAfter} class="icon-after" />
			</Show>
		</div>
	);
}
