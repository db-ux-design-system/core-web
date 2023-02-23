import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
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

export default function DBSelect(props: DBSelectProps) {
	const selectRef = useRef<HTMLSelectElement>(null);
	const state = useStore<DBSelectState>({
		mId: DEFAULT_ID,
		_isValid: undefined,
		_value: '',
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
			state._checked = event.target.checked;

			if (checkboxInputRef?.validity?.valid != state._isValid) {
				state._isValid = checkboxInputRef?.validity?.valid;
				if (props.validityChange) {
					props.validityChange(!!checkboxInputRef?.validity?.valid);
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
		state.mId = props.id ? props.id : 'checkbox-' + uuid();

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
		<div
			class={
				'db-select' + (props.className ? ' ' + props.className : '')
			}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
		</div>
	);
}
