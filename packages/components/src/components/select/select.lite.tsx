import {
	onMount,
	Show,
	useRef,
	useMetadata,
	useStore
} from '@builder.io/mitosis';
import { DBSelectState, DBSelectProps } from './model';
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
	const selectRef = useRef<HTMLSelectElement>(null);
	const state = useStore<DBSelectState>({
		mId: DEFAULT_ID,
		_isValid: undefined,
		_value: '',
		_label: 'LABEL SHOULD BE SET',

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

			if (selectRef?.validity?.valid != state._isValid) {
				state._isValid = selectRef?.validity?.valid;
				if (props.validityChange) {
					props.validityChange(!!selectRef?.validity?.valid);
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
		state.mId = props.id ? props.id : 'select-' + uuid();

		if (props.value) {
			state._value = props.value;
		}

		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}

		if (props.label) {
			state._label = props.label;
		}
	});

	return (
		<>
			<select
				ref={selectRef}
				class={
					'db-select' + (props.className ? ' ' + props.className : '')
				}
				// TODO: Variants aren't being used by inputs as well, so we need to wait for the final spec
				// data-variant={
				// 	props.variant && props.variant !== 'semitransparent'
				// 		? props.variant
				// 		: ''
				// }
				aria-invalid={props.ariainvalid ? 'true' : false}
				disabled={props.disabled}
				id={state.mId}
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
			<label class="db-label" htmlFor={state.mId}>
				{this.label}
			</label>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
		</>
	);
}
