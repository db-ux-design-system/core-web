import {
	For,
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBSelectOptionType, DBSelectProps, DBSelectState } from './model';
import { cls, hasVoiceOver, uuid } from '../../utils';
import {
	DEFAULT_INVALID_MESSAGE,
	DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
	DEFAULT_LABEL,
	DEFAULT_MESSAGE_ID_SUFFIX,
	DEFAULT_PLACEHOLDER_ID_SUFFIX,
	DEFAULT_VALID_MESSAGE,
	DEFAULT_VALID_MESSAGE_ID_SUFFIX
} from '../../shared/constants';
import { DBInfotext } from '../infotext';
import {
	ChangeEvent,
	ClickEvent,
	InputEvent,
	InteractionEvent
} from '../../shared/model';
import { handleFrameworkEvent } from '../../utils/form-components';

useMetadata({
	isAttachedToShadowDom: true,
	angular: {
		nativeAttributes: ['value']
	}
});

export default function DBSelect(props: DBSelectProps) {
	const ref = useRef<HTMLSelectElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBSelectState>({
		_id: 'select-' + uuid(),
		_messageId: this._id + DEFAULT_MESSAGE_ID_SUFFIX,
		_validMessageId: this._id + DEFAULT_VALID_MESSAGE_ID_SUFFIX,
		_invalidMessageId: this._id + DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
		_placeholderId: this._id + DEFAULT_PLACEHOLDER_ID_SUFFIX,
		// Workaround for Vue output: TS for Vue would think that it could be a function, and by this we clarify that it's a string
		_descByIds: '',
		_value: '',
		initialized: false,
		_voiceOverFallback: '',
		handleClick: (event: ClickEvent<HTMLSelectElement>) => {
			if (props.onClick) {
				props.onClick(event);
			}
		},
		handleInput: (event: InputEvent<HTMLSelectElement>) => {
			if (props.onInput) {
				props.onInput(event);
			}

			if (props.input) {
				props.input(event);
			}
		},
		handleChange: (event: ChangeEvent<HTMLSelectElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			handleFrameworkEvent(this, event);

			/* For a11y reasons we need to map the correct message with the select */
			if (!ref?.validity.valid || props.customValidity === 'invalid') {
				state._descByIds = state._invalidMessageId;
				if (hasVoiceOver()) {
					state._voiceOverFallback =
						props.invalidMessage ??
						ref?.validationMessage ??
						DEFAULT_INVALID_MESSAGE;
				}
			} else if (
				props.customValidity === 'valid' ||
				(ref?.validity.valid && props.required)
			) {
				state._descByIds = state._validMessageId;
				if (hasVoiceOver()) {
					state._voiceOverFallback =
						props.validMessage ?? DEFAULT_VALID_MESSAGE;
				}
			} else if (props.message) {
				state._descByIds = state._messageId;
			} else {
				state._descByIds = state._placeholderId;
			}
		},
		handleBlur: (event: InteractionEvent<HTMLSelectElement>) => {
			if (props.onBlur) {
				props.onBlur(event);
			}

			if (props.blur) {
				props.blur(event);
			}
		},
		handleFocus: (event: InteractionEvent<HTMLSelectElement>) => {
			if (props.onFocus) {
				props.onFocus(event);
			}

			if (props.focus) {
				props.focus(event);
			}
		},
		getOptionLabel: (option: DBSelectOptionType) => {
			return option.label ?? option.value.toString();
		}
	});

	onMount(() => {
		state._id = props.id || state._id;
		state.initialized = true;
	});

	onUpdate(() => {
		if (state._id && state.initialized) {
			const messageId = state._id + DEFAULT_MESSAGE_ID_SUFFIX;
			const validMessageId = state._id + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
			const invalidMessageId =
				state._id + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
			const placeholderId = state._id + DEFAULT_PLACEHOLDER_ID_SUFFIX;
			state._messageId = messageId;
			state._validMessageId = validMessageId;
			state._invalidMessageId = invalidMessageId;
			state._placeholderId = placeholderId;

			if (props.message) {
				state._descByIds = messageId;
			} else {
				state._descByIds = placeholderId;
			}

			state.initialized = false;
		}
	}, [state._id, state.initialized]);

	onUpdate(() => {
		state._value = props.value;
	}, [props.value]);

	return (
		<div
			class={cls('db-select', props.className)}
			data-variant={props.variant}
			data-icon={props.icon}>
			<label htmlFor={state._id}>{props.label ?? DEFAULT_LABEL}</label>
			<select
				aria-invalid={props.customValidity === 'invalid'}
				data-custom-validity={props.customValidity}
				ref={ref}
				required={props.required}
				disabled={props.disabled}
				id={state._id}
				name={props.name}
				value={props.value ?? state._value}
				autocomplete={props.autocomplete}
				onInput={(event: ChangeEvent<HTMLInputElement>) =>
					state.handleInput(event)
				}
				onClick={(event: ClickEvent<HTMLSelectElement>) =>
					state.handleClick(event)
				}
				onChange={(event: ChangeEvent<HTMLSelectElement>) =>
					state.handleChange(event)
				}
				onBlur={(event: InteractionEvent<HTMLSelectElement>) =>
					state.handleBlur(event)
				}
				onFocus={(event: InteractionEvent<HTMLSelectElement>) =>
					state.handleFocus(event)
				}
				aria-describedby={state._descByIds}>
				{/* Empty option for floating label */}
				<option hidden></option>
				<Show when={props.options}>
					<For each={props.options}>
						{(option: DBSelectOptionType) => (
							<>
								<Show when={option.options}>
									<optgroup
										label={state.getOptionLabel(option)}>
										<For each={option.options}>
											{(
												optgroupOption: DBSelectOptionType
											) => (
												<option
													key={optgroupOption.value.toString()}
													value={optgroupOption.value}
													selected={
														optgroupOption.selected
													}
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
										value={option.value}
										disabled={option.disabled}
										selected={option.selected}>
										{state.getOptionLabel(option)}
									</option>
								</Show>
							</>
						)}
					</For>
				</Show>
				{props.children}
			</select>
			<span id={state._placeholderId}>
				{props.placeholder ?? props.label}
			</span>
			<Show when={props.message}>
				<DBInfotext
					size="small"
					icon={props.messageIcon}
					id={state._messageId}>
					{props.message}
				</DBInfotext>
			</Show>

			<DBInfotext
				id={state._validMessageId}
				size="small"
				semantic="successful">
				{props.validMessage ?? DEFAULT_VALID_MESSAGE}
			</DBInfotext>

			<DBInfotext
				id={state._invalidMessageId}
				size="small"
				semantic="critical">
				{props.invalidMessage ??
					ref?.validationMessage ??
					DEFAULT_INVALID_MESSAGE}
			</DBInfotext>

			<span data-visually-hidden role="status">
				{state._voiceOverFallback}
			</span>
		</div>
	);
	// jscpd:ignore-end
}
