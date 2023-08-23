import {
	For,
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useStore
} from '@builder.io/mitosis';
import { DBSelectOptionType, DBSelectProps, DBSelectState } from './model';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID, DEFAULT_LABEL } from '../../shared/constants';
import { DBInfotext } from '../infotext';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBSelect(props: DBSelectProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBSelectState>({
		_id: DEFAULT_ID,
		_isValid: undefined,
		_value: undefined,
		handleClick: (event: any) => {
			if (props.onClick) {
				props.onClick(event);
			}
		},
		handleChange: (event: any) => {
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

			// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
			// VUE:this.$emit("update:value", event.target.value);

			// Angular: propagate change event to work with reactive and template driven forms
			this.propagateChange(event.target.value);
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
		getOptionLabel: (option: DBSelectOptionType) => {
			return option.label ?? option.value.toString();
		},
		// callback for controlValueAccessor's onChange handler
		propagateChange: (_: any) => {}
	});

	onMount(() => {
		state._id = props.id || 'select-' + uuid();

		if (props.value) {
			state._value = props.value;
		}

		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	onUpdate(() => {
		if (props.value) {
			state._value = props.value;
		}
	}, [props.value]);
	// jscpd:ignore-end

	return (
		<div
			class={cls('db-select', props.className)}
			data-variant={props.variant}
			data-icon={props.icon}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{/* Required has to be true to use floating label */}
			{/* data-value is used in css to check if value is set */}
			<select
				ref={component}
				data-value={props.value || state._value}
				aria-invalid={props.invalid}
				aria-required={props.required}
				required={props.required}
				disabled={props.disabled}
				id={state._id}
				name={props.name}
				value={props.value || state._value}
				onClick={(event) => state.handleClick(event)}
				onChange={(event) => state.handleChange(event)}
				onBlur={(event) => state.handleBlur(event)}
				onFocus={(event) => state.handleFocus(event)}>
				{/* Empty option for floating label */}
				<option hidden></option>
				<Show when={props.options}>
					<For each={props.options}>
						{(option: DBSelectOptionType) => (
							<>
								<Show when={option.options}>
									<optgroup
										key={'optgroup-' + option.value}
										label={state.getOptionLabel(option)}>
										<For each={option.options}>
											{(
												optgroupOption: DBSelectOptionType
											) => (
												<option
													key={
														'option-' +
														optgroupOption.value
													}
													value={optgroupOption.value}
													disabled={
														optgroupOption.disabled
													}>
													{state.getOptionLabel(
														optgroupOption
													)}
												</option>
											)}
										</For>
									</optgroup>
								</Show>
								<Show when={!option.options}>
									<option
										key={'option-' + option.value}
										value={option.value}
										disabled={option.disabled}>
										{state.getOptionLabel(option)}
									</option>
								</Show>
							</>
						)}
					</For>
				</Show>
				{props.children}
			</select>
			<label htmlFor={state._id}>{props.label ?? DEFAULT_LABEL}</label>
			<Show when={props.message}>
				<DBInfotext
					size="small"
					variant={props.variant}
					icon={props.messageIcon}>
					{props.message}
				</DBInfotext>
			</Show>
		</div>
	);
}
