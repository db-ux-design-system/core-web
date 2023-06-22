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
import classNames from 'classnames';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: true,
		hasDisabledProp: true,
		properties: [
			// jscpd:ignore-start
			{ name: 'children', type: 'SingleLine.Text' },
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
		},
		getClassNames: (...args: classNames.ArgumentArray) => {
			return classNames(args);
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

	onUpdate(() => {
		if (
			(props.checked || props.indeterminate) &&
			state.initialized &&
			document &&
			state._id
		) {
			const checkboxElement = document?.getElementById(
				state._id
			) as HTMLInputElement;
			if (checkboxElement) {
				if (props.checked) {
					checkboxElement.checked = true;
				}
				if (props.indeterminate) {
					checkboxElement.indeterminate = props.indeterminate;
				}
				state.initialized = false;
			}
		}
	}, [state.initialized]);

	return (
		<>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<input
				ref={component}
				type="checkbox"
				class={state.getClassNames('db-checkbox', props.className)}
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
