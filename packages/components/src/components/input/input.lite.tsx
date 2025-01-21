// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	For,
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import {
	cls,
	delay,
	stringPropVisible,
	getHideProp,
	hasVoiceOver,
	isArrayOfStrings,
	uuid
} from '../../utils';
import { DBInputProps, DBInputState } from './model';
import {
	DEFAULT_DATALIST_ID_SUFFIX,
	DEFAULT_INVALID_MESSAGE,
	DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
	DEFAULT_LABEL,
	DEFAULT_MESSAGE_ID_SUFFIX,
	DEFAULT_PLACEHOLDER,
	DEFAULT_VALID_MESSAGE,
	DEFAULT_VALID_MESSAGE_ID_SUFFIX
} from '../../shared/constants';
import {
	ChangeEvent,
	InputEvent,
	InteractionEvent,
	ValueLabelType
} from '../../shared/model';
import DBInfotext from '../infotext/infotext.lite';
import { handleFrameworkEvent } from '../../utils/form-components';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'required']
	}
});

export default function DBInput(props: DBInputProps) {
	const ref = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBInputState>({
		_id: undefined,
		_messageId: undefined,
		_validMessageId: undefined,
		_invalidMessageId: undefined,
		_dataListId: undefined,
		_descByIds: '',
		_value: '',
		_voiceOverFallback: '',
		handleInput: (event: InputEvent<HTMLInputElement>) => {
			if (props.onInput) {
				props.onInput(event);
			}

			if (props.input) {
				props.input(event);
			}
		},
		handleChange: (event: ChangeEvent<HTMLInputElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			useTarget({
				angular: () => handleFrameworkEvent(this, event),
				vue: () => handleFrameworkEvent(this, event)
			});

			/* For a11y reasons we need to map the correct message with the input */
			if (!ref?.validity.valid || props.validation === 'invalid') {
				state._descByIds = state._invalidMessageId;
				if (hasVoiceOver()) {
					state._voiceOverFallback =
						props.invalidMessage ??
						ref?.validationMessage ??
						DEFAULT_INVALID_MESSAGE;
					delay(() => (state._voiceOverFallback = ''), 1000);
				}
			} else if (
				props.validation === 'valid' ||
				(ref?.validity.valid &&
					(props.required ||
						props.minLength ||
						props.maxLength ||
						props.pattern))
			) {
				state._descByIds = state._validMessageId;
				if (hasVoiceOver()) {
					state._voiceOverFallback =
						props.validMessage ?? DEFAULT_VALID_MESSAGE;
					delay(() => (state._voiceOverFallback = ''), 1000);
				}
			} else if (stringPropVisible(props.message, props.showMessage)) {
				state._descByIds = state._messageId;
			} else {
				state._descByIds = '';
			}
		},
		handleBlur: (event: InteractionEvent<HTMLInputElement>) => {
			if (props.onBlur) {
				props.onBlur(event);
			}

			if (props.blur) {
				props.blur(event);
			}
		},
		handleFocus: (event: InteractionEvent<HTMLInputElement>) => {
			if (props.onFocus) {
				props.onFocus(event);
			}

			if (props.focus) {
				props.focus(event);
			}
		},
		getDataList: (
			_list?: string[] | ValueLabelType[]
		): ValueLabelType[] => {
			return Array.from(
				(isArrayOfStrings(_list)
					? _list.map((val: string) => ({
							value: val,
							label: undefined
						}))
					: _list) || []
			);
		}
	});

	onMount(() => {
		const mId = props.id ?? `input-${uuid()}`;
		state._id = mId;
		state._messageId = mId + DEFAULT_MESSAGE_ID_SUFFIX;
		state._validMessageId = mId + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
		state._invalidMessageId = mId + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
		state._dataListId = mId + DEFAULT_DATALIST_ID_SUFFIX;
	});

	onUpdate(() => {
		if (state._id) {
			const messageId = state._id + DEFAULT_MESSAGE_ID_SUFFIX;
			state._messageId = messageId;
			state._validMessageId = state._id + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
			state._invalidMessageId =
				state._id + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
			state._dataListId =
				props.dataListId ?? state._id + DEFAULT_DATALIST_ID_SUFFIX;

			if (stringPropVisible(props.message, props.showMessage)) {
				state._descByIds = messageId;
			}
		}
	}, [state._id]);

	onUpdate(() => {
		state._value = props.value;
	}, [props.value]);

	return (
		<div
			class={cls('db-input', props.className)}
			data-variant={props.variant}
			data-hide-label={getHideProp(props.showLabel)}
			data-hide-icon={getHideProp(props.showIcon)}
			data-icon={props.icon}
			data-icon-after={props.iconAfter}
			data-hide-icon-after={getHideProp(props.showIcon)}>
			<label htmlFor={state._id}>{props.label ?? DEFAULT_LABEL}</label>
			<input
				aria-invalid={props.validation === 'invalid'}
				data-custom-validity={props.validation}
				ref={ref}
				id={state._id}
				name={props.name}
				type={props.type || 'text'}
				placeholder={props.placeholder ?? DEFAULT_PLACEHOLDER}
				disabled={props.disabled}
				required={props.required}
				step={props.step}
				value={props.value ?? state._value}
				maxLength={props.maxLength}
				minLength={props.minLength}
				max={props.max}
				min={props.min}
				readOnly={props.readOnly}
				form={props.form}
				pattern={props.pattern}
				autocomplete={props.autocomplete}
				onInput={(event: ChangeEvent<HTMLInputElement>) =>
					state.handleInput(event)
				}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					state.handleChange(event)
				}
				onBlur={(event: InteractionEvent<HTMLInputElement>) =>
					state.handleBlur(event)
				}
				onFocus={(event: InteractionEvent<HTMLInputElement>) =>
					state.handleFocus(event)
				}
				list={props.dataList && state._dataListId}
				aria-describedby={state._descByIds}
			/>
			<Show when={props.dataList}>
				<datalist id={state._dataListId}>
					<For each={state.getDataList(props.dataList)}>
						{(option: ValueLabelType) => (
							<option
								key={
									state._dataListId +
									'-option-' +
									option.value
								}
								value={option.value}>
								{option.label}
							</option>
						)}
					</For>
				</datalist>
			</Show>
			{props.children}
			<Show when={stringPropVisible(props.message, props.showMessage)}>
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

			{/* * https://www.davidmacd.com/blog/test-aria-describedby-errormessage-aria-live.html
			 * Currently VoiceOver isn't supporting changes from aria-describedby.
			 * This is an internal Fallback */}
			<span data-visually-hidden="true" role="status">
				{state._voiceOverFallback}
			</span>
		</div>
	);
	// jscpd:ignore-end
}
