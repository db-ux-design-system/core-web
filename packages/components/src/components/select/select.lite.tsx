import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBSelectProps, DBSelectState } from './model';
import { uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

const DEFAULT_VALUES = {};

export default function DBSelect(props: DBSelectProps) {
	// This is used as forwardRef
	let component: any;
	const state = useStore<DBSelectState>({
		_id: DEFAULT_ID,
		_isValid: undefined,

		handleClick: (event) => {
			if (props.onClick) {
				props.onClick(event);
			}
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

			if (event.target?.validity?.valid != state._isValid) {
				state._isValid = event.target?.validity?.valid;
				if (props.validityChange) {
					props.validityChange(!!event.target?.validity?.valid);
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
		state._id = props.id ? props.id : 'select-' + uuid();

		if (props.value) {
			state._value = props.value;
		}

		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<>
			<select
				ref={component}
				class={
					'db-select' + (props.className ? ' ' + props.className : '')
				}
				// TODO: Variants aren't being used by inputs as well, so we need to wait for the final spec
				// data-variant={
				// 	props.variant && props.variant !== 'semitransparent'
				// 		? props.variant
				// 		: ''
				// }
				aria-invalid={props.invalid}
				disabled={props.disabled}
				id={state._id}
				multiple={props.multiple}
				name={props.name}
				required={props.required}
				size={props.size}
				onClick={(event) => state.handleClick(event)}
				onChange={(event) => state.handleChange(event)}
				onBlur={(event) => state.handleBlur(event)}
				onFocus={(event) => state.handleFocus(event)}>
				{props.children}
			</select>
			<label class="db-label" htmlFor={state._id}>
				{props.label}
			</label>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
		</>
	);
}
