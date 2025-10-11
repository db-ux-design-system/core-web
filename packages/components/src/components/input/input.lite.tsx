import {
	For,
	onMount,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';

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
import {
	cls,
	delay,
	getBoolean,
	getBooleanAsString,
	getHideProp,
	getInputValue,
	getNumber,
	hasVoiceOver,
	isArrayOfStrings,
	stringPropVisible,
	uuid
} from '../../utils';
import {
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';
import DBInfotext from '../infotext/infotext.lite';
import { DBInputProps, DBInputState } from './model';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'required'],
		signals: {
			writeable: ['disabled', 'value']
		}
	}
});

useDefaultProps<DBInputProps>({});

export default function DBInput(props: DBInputProps) {
	const _ref = useRef<HTMLInputElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBInputState>({
		_id: undefined,
		_messageId: undefined,
		_validMessageId: undefined,
		_invalidMessageId: undefined,
		_invalidMessage: undefined,
		_dataListId: undefined,
		_descByIds: undefined,
		_value: undefined,
		_voiceOverFallback: '',
		hasValidState: () => {
			return !!(props.validMessage ?? props.validation === 'valid');
		},
		handleValidation: () => {
			/* For a11y reasons we need to map the correct message with the input */
			if (!_ref?.validity.valid || props.validation === 'invalid') {
				state._descByIds = state._invalidMessageId;
				state._invalidMessage =
					props.invalidMessage ||
					_ref?.validationMessage ||
					DEFAULT_INVALID_MESSAGE;
				if (hasVoiceOver()) {
					state._voiceOverFallback = state._invalidMessage;
					delay(() => (state._voiceOverFallback = ''), 1000);
				}
			} else if (
				state.hasValidState() &&
				_ref?.validity.valid &&
				(props.required ||
					props.minLength ||
					props.maxLength ||
					props.pattern)
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
				state._descByIds = undefined;
			}
		},
		handleInput: (event: InputEvent<HTMLInputElement>) => {
			useTarget({
				vue: () => {
					if (props.input) {
						props.input(event);
					}
					if (props.onInput) {
						props.onInput(event);
					}
				},
				default: () => {
					if (props.onInput) {
						props.onInput(event);
					}
				}
			});

			useTarget({
				angular: () => handleFrameworkEventAngular(state, event),
				vue: () => handleFrameworkEventVue(() => {}, event)
			});
			state.handleValidation();
		},
		handleChange: (event: ChangeEvent<HTMLInputElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			useTarget({
				angular: () => handleFrameworkEventAngular(state, event),
				vue: () => handleFrameworkEventVue(() => {}, event)
			});
			state.handleValidation();
		},
		handleBlur: (event: InteractionEvent<HTMLInputElement> | any) => {
			if (props.onBlur) {
				props.onBlur(event);
			}
		},
		handleFocus: (event: InteractionEvent<HTMLInputElement> | any) => {
			if (props.onFocus) {
				props.onFocus(event);
			}
		},
		getDataList: (): ValueLabelType[] => {
			const _list = props.dataList;
			return Array.from(
				(isArrayOfStrings(_list)
					? _list?.map((val: string) => ({
							value: val,
							label: undefined
						}))
					: _list) || []
			);
		},
		// iOS Safari Voiceover input:is([type="date"], [type="datetime-local"], [type="time"]) hack
		isIOSSafari: (): boolean => {
			if (
				typeof window === 'undefined' ||
				typeof navigator === 'undefined'
			)
				return false;
			const ua = navigator.userAgent;
			// iOS detection
			const isIOS = /iP(ad|hone|od)/.test(ua);
			// Safari detection (not Chrome or Firefox on iOS)
			const isSafari =
				!!ua.match(/Safari/) && !ua.match(/CriOS|FxiOS|OPiOS|EdgiOS/);
			return isIOS && isSafari;
		}
	});

	onMount(() => {
		const mId = props.id ?? `input-${uuid()}`;
		state._id = mId;
		state._messageId = mId + DEFAULT_MESSAGE_ID_SUFFIX;
		state._validMessageId = mId + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
		state._invalidMessageId = mId + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
		state._dataListId = mId + DEFAULT_DATALIST_ID_SUFFIX;
		state._invalidMessage = props.invalidMessage || DEFAULT_INVALID_MESSAGE;
	});

	onUpdate(() => {
		state._invalidMessage =
			props.invalidMessage ||
			_ref?.validationMessage ||
			DEFAULT_INVALID_MESSAGE;
	}, [_ref, props.invalidMessage]);

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

			state.handleValidation();
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
			data-show-icon={getBooleanAsString(
				props.showIconLeading ?? props.showIcon
			)}
			data-icon={props.iconLeading ?? props.icon}
			data-icon-trailing={props.iconTrailing}
			data-hide-asterisk={getHideProp(props.showRequiredAsterisk)}
			data-show-icon-trailing={getBooleanAsString(
				props.showIconTrailing
			)}>
			<label htmlFor={state._id}>{props.label ?? DEFAULT_LABEL}</label>
			<input
				aria-invalid={props.validation === 'invalid'}
				data-custom-validity={props.validation}
				data-field-sizing={props.fieldSizing}
				ref={_ref}
				id={state._id}
				name={props.name}
				type={props.type || 'text'}
				multiple={getBoolean(props.multiple, 'multiple')}
				placeholder={props.placeholder ?? DEFAULT_PLACEHOLDER}
				disabled={getBoolean(props.disabled, 'disabled')}
				required={getBoolean(props.required, 'required')}
				step={getNumber(props.step)}
				value={props.value ?? state._value}
				maxLength={getNumber(props.maxLength, props.maxlength)}
				minLength={getNumber(props.minLength, props.minlength)}
				max={getInputValue(props.max, props.type)}
				min={getInputValue(props.min, props.type)}
				readOnly={
					getBoolean(props.readOnly, 'readOnly') ||
					getBoolean(props.readonly, 'readonly')
				}
				form={props.form}
				pattern={props.pattern}
				size={props.size}
				// @ts-expect-error input has a property autoComplete
				autoComplete={props.autocomplete}
				autoFocus={getBoolean(props.autofocus, 'autofocus')}
				enterKeyHint={props.enterkeyhint}
				inputMode={props.inputmode}
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
				aria-describedby={props.ariaDescribedBy ?? state._descByIds}
				// iOS Safari Voiceover input:is([type="date"], [type="datetime-local"], [type="time"]) hack
				role={
					['datetime-local', 'date', 'time', 'week', 'month'].includes(
						props.type ?? ''
					) && state.isIOSSafari()
						? 'textbox'
						: undefined
				}
			/>
			<Show when={props.dataList}>
				<datalist id={state._dataListId}>
					<For each={state.getDataList()}>
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
					size={props.messageSize || 'small'}
					icon={props.messageIcon}
					id={state._messageId}>
					{props.message}
				</DBInfotext>
			</Show>

			<Show when={state.hasValidState()}>
				<DBInfotext
					id={state._validMessageId}
					size={props.validMessageSize || 'small'}
					semantic="successful">
					{props.validMessage || DEFAULT_VALID_MESSAGE}
				</DBInfotext>
			</Show>

			<DBInfotext
				id={state._invalidMessageId}
				size={props.invalidMessageSize || 'small'}
				semantic="critical">
				{state._invalidMessage}
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
