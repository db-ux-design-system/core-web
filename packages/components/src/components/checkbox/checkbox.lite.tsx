import {
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useStore
} from '@builder.io/mitosis';
import { DBCheckboxProps, DBCheckboxState } from './model';
import { uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: true,
		hasDisabledProp: true,
		properties: [
			// jscpd:ignore-start
			{
				name: 'children',
				type: 'SingleLine.Text',
				defaultValue: 'Checkbox'
			},
			{ name: 'name', type: 'SingleLine.Text' },
			// { name: 'checked', type: 'TwoOptions' },
			{ name: 'value', type: 'SingleLine.Text', onChange: 'value' }, // $event.target["value"|"checked"|...]
			// { name: 'disabled', type: 'TwoOptions' },
			{ name: 'id', type: 'SingleLine.Text' }
			// jscpd:ignore-end
		]
	}
});

export default function DBCheckbox(props: DBCheckboxProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBCheckboxState>({
		initialized: false,
		_id: DEFAULT_ID,
		_isValid: undefined,

		handleChange: (event: any) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			if (event.target?.validity?.valid != state._isValid) {
				state._isValid = event.target?.validity?.valid;
				if (props.validityChange) {
					props.validityChange(!!event.target?.validity?.valid);
				}
			}

			// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
			// VUE:this.$emit("update:checked", event.target.checked);

			// Change event to work with reactive and template driven forms
			// ANGULAR: this.propagateChange(event.target.checked);
			// ANGULAR: this.writeValue(event.target.checked);
		},
		handleBlur: (event: any) => {
			if (props.onBlur) {
				props.onBlur(event);
			}

			if (props.blur) {
				props.blur(event);
			}
		},
		handleFocus: (event: any) => {
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
		state._id = props.id || 'checkbox-' + uuid();

		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	// TODO we have to check how to update on every change..
	onUpdate(() => {
		if (state.initialized && document && state._id) {
			const checkboxElement = document?.getElementById(
				state._id
			) as HTMLInputElement;
			if (checkboxElement) {
				// in angular this must be set via native element
				if (props.checked != undefined) {
					checkboxElement.checked = props.checked;
				}

				if (props.indeterminate !== undefined) {
					// When indeterminate is set, the value of the checked prop only impacts the form submitted values.
					// It has no accessibility or UX implications. (https://mui.com/material-ui/react-checkbox/)
					checkboxElement.indeterminate = props.indeterminate;
				}

				if (props.defaultChecked !== undefined) {
					// only set by JS: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#instance_properties_that_apply_only_to_elements_of_type_checkbox_or_radio
					checkboxElement.defaultChecked = props.defaultChecked;
				}
			}
		}
	}, [state.initialized, props.indeterminate, props.checked, props.defaultChecked]);

	return (
		<>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<input
				ref={component}
				type="checkbox"
				class={cls('db-checkbox', props.className)}
				id={state._id}
				name={props.name}
				checked={props.checked}
				disabled={props.disabled}
				value={props.value}
				aria-describedby={props.describedbyid}
				aria-invalid={props.invalid}
				data-size={props.size}
				required={props.required}
				onChange={(event) => state.handleChange(event)}
				onBlur={(event) => state.handleBlur(event)}
				onFocus={(event) => state.handleFocus(event)}
			/>
			<label htmlFor={state._id}>
				<Show when={props.label}>
					<span>{props.label}</span>
				</Show>
				{props.children}
			</label>
		</>
	);
}
