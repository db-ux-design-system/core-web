import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBInputState, DBInputProps, iconVariants } from './model';
import { DBIcon } from '../icon';
import './input.scss';

useMetadata({
	isAttachedToShadowDom: false,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBInput(props: DBInputProps) {
	const textInputRef = useRef(null);
	const state = useStore<DBInputState>({
		_isValid: undefined,
		handleChange: (event) => {
			if (props.onChange) {
				props.onChange(event);
			}
			if (props.change) {
				props.change(event);
			}

			if (textInputRef?.validity?.valid != state._isValid) {
				state._isValid = textInputRef?.validity?.valid;
				if (props.validityChange) {
					props.validityChange(textInputRef?.validity?.valid);
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
		if (props.stylePath) {
			state.stylePath = props.stylePath;
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
				id={props.id}
				name={props.name}
				type={props.type || 'text'}
				placeholder={props.placeholder}
				aria-labelledby={props.id + '-label'}
				disabled={props.disabled}
				required={props.required}
				value={props.value}
				maxLength={props.maxLength}
				minLength={props.minLength}
				pattern={props.pattern}
				onChange={(event) => state.handleChange(event)}
				onBlur={(event) => state.handleBlur(event)}
				onFocus={(event) => state.handleFocus(event)}
			/>
			<label for={props.id} aria-hidden="true" id={props.id + '-label'}>
				<span>{props.label}</span>
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
