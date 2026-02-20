import {
	For,
	onMount,
	onUnMount,
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
	getStep,
	hasVoiceOver,
	isArrayOfStrings,
	isIOSSafari,
	stringPropVisible,
	uuid
} from '../../utils';
import {
	addValueResetEventListener,
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';
import DBInfotext from '../infotext/infotext.lite';
import { DBInputProps, DBInputState } from './model';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'required', 'value'],
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
		mId: undefined,
		mMessageId: undefined,
		mValidMessageId: undefined,
		mInvalidMessageId: undefined,
		mInvalidMessage: undefined,
		mDataListId: undefined,
		mDescByIds: undefined,
		mValue: '',
		mVoiceOverFallback: '',
		mAbortController: undefined,
		hasValidState: () => {
			return !!(props.validMessage ?? props.validation === 'valid');
		},
		handleValidation: () => {
			/* For a11y reasons we need to map the correct message with the input */
			if (!_ref?.validity.valid || props.validation === 'invalid') {
				state.mDescByIds = state.mInvalidMessageId;
				state.mInvalidMessage =
					props.invalidMessage ||
					_ref?.validationMessage ||
					DEFAULT_INVALID_MESSAGE;
				if (hasVoiceOver()) {
					state.mVoiceOverFallback = state.mInvalidMessage;
					delay(() => (state.mVoiceOverFallback = ''), 1000);
				}
			} else if (
				state.hasValidState() &&
				_ref?.validity.valid &&
				(props.required ||
					props.minLength ||
					props.maxLength ||
					props.pattern)
			) {
				state.mDescByIds = state.mValidMessageId;
				if (hasVoiceOver()) {
					state.mVoiceOverFallback =
						props.validMessage ?? DEFAULT_VALID_MESSAGE;
					delay(() => (state.mVoiceOverFallback = ''), 1000);
				}
			} else if (stringPropVisible(props.message, props.showMessage)) {
				state.mDescByIds = state.mMessageId;
			} else {
				state.mDescByIds = undefined;
			}
		},
		handleInput: (event: InputEvent<HTMLInputElement>, reset?: boolean) => {
			useTarget({
				angular: () => {
					if (props.onInput) {
						if (reset) {
							props.onInput(event);
						}
					}
				},
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
		handleChange: (
			event: ChangeEvent<HTMLInputElement>,
			reset?: boolean
		) => {
			useTarget({
				angular: () => {
					if (props.onChange) {
						// We need to split the if statements for generation
						if (reset) {
							props.onChange(event);
						}
					}
				},
				default: () => {
					if (props.onChange) {
						props.onChange(event);
					}
				}
			});

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
		}
	});

	onMount(() => {
		const _mId = props.id ?? props._id ?? `input-${uuid()}`;
		state.mId = _mId;
		state.mMessageId = _mId + DEFAULT_MESSAGE_ID_SUFFIX;
		state.mValidMessageId = _mId + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
		state.mInvalidMessageId = _mId + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
		state.mDataListId = _mId + DEFAULT_DATALIST_ID_SUFFIX;
		state.mInvalidMessage = props.invalidMessage || DEFAULT_INVALID_MESSAGE;
	});

	onUpdate(() => {
		if (props.id || props._id) {
			state.mId = props.id ?? props._id;
		}
	}, [props.id, props._id]);

	onUpdate(() => {
		state.mInvalidMessage =
			props.invalidMessage ||
			_ref?.validationMessage ||
			DEFAULT_INVALID_MESSAGE;
	}, [_ref, props.invalidMessage]);

	onUpdate(() => {
		if (state.mId) {
			const messageId = state.mId + DEFAULT_MESSAGE_ID_SUFFIX;
			state.mMessageId = messageId;
			state.mValidMessageId = state.mId + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
			state.mInvalidMessageId =
				state.mId + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
			state.mDataListId =
				props.dataListId ?? state.mId + DEFAULT_DATALIST_ID_SUFFIX;

			if (stringPropVisible(props.message, props.showMessage)) {
				state.mDescByIds = messageId;
			}

			state.handleValidation();
		}
	}, [state.mId]);

	onUpdate(() => {
		if (props.value !== undefined) {
			state.mValue = props.value;
		}
	}, [props.value]);

	onUpdate(() => {
		// If angular uses ngModel value and _value are null
		// then the value will be set afterward and the _ref will be refreshed
		const addResetListener = useTarget({
			angular: !(props.value === null && state.mValue === null),
			default: true
		});

		if (_ref && addResetListener) {
			const defaultValue = useTarget({
				react: (props as any).defaultValue,
				default: undefined
			});

			let controller = state.mAbortController;
			if (!controller) {
				controller = new AbortController();
				state.mAbortController = controller;
			}

			addValueResetEventListener(
				_ref,
				{ value: props.value, defaultValue },
				(event) => {
					state.handleChange(event, true);
					state.handleInput(event, true);
				},
				controller.signal
			);
		}
	}, [_ref]);

	onUnMount(() => {
		state.mAbortController?.abort();
	});

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
			<label htmlFor={state.mId}>{props.label ?? DEFAULT_LABEL}</label>
			<input
				aria-invalid={props.validation === 'invalid'}
				data-custom-validity={props.validation}
				data-field-sizing={props.fieldSizing}
				ref={_ref}
				id={state.mId}
				name={props.name}
				type={props.type || 'text'}
				multiple={getBoolean(props.multiple, 'multiple')}
				accept={props.accept}
				placeholder={props.placeholder ?? DEFAULT_PLACEHOLDER}
				disabled={getBoolean(props.disabled, 'disabled')}
				required={getBoolean(props.required, 'required')}
				step={getStep(props.step)}
				value={props.value ?? state.mValue}
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
				list={props.dataList && state.mDataListId}
				aria-describedby={props.ariaDescribedBy ?? state.mDescByIds}
				// iOS Safari VoiceOver input:is([type="date"], [type="datetime-local"], [type="time"], [type="week"], [type="month"], [type="color"]) hack
				// TODO: We could remove this one again, after https://bugs.webkit.org/show_bug.cgi?id=294649 (mentioned in https://github.com/facebook/react/issues/33541) has been resolved.
				role={
					[
						'datetime-local',
						'date',
						'time',
						'week',
						'month',
						'color'
					].includes(props.type ?? '') && isIOSSafari()
						? 'textbox'
						: undefined
				}
			/>
			<Show when={props.dataList}>
				<datalist id={state.mDataListId}>
					<For each={state.getDataList()}>
						{(option: ValueLabelType) => (
							<option
								key={
									state.mDataListId +
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
					id={state.mMessageId}>
					{props.message}
				</DBInfotext>
			</Show>

			<Show when={state.hasValidState()}>
				<DBInfotext
					id={state.mValidMessageId}
					size={props.validMessageSize || 'small'}
					semantic="successful">
					{props.validMessage || DEFAULT_VALID_MESSAGE}
				</DBInfotext>
			</Show>

			<DBInfotext
				id={state.mInvalidMessageId}
				size={props.invalidMessageSize || 'small'}
				semantic="critical">
				{state.mInvalidMessage}
			</DBInfotext>

			{/* * https://www.davidmacd.com/blog/test-aria-describedby-errormessage-aria-live.html
			 * Currently VoiceOver isn't supporting changes from aria-describedby.
			 * This is an internal Fallback */}
			<span data-visually-hidden="true" role="status">
				{state.mVoiceOverFallback}
			</span>
		</div>
	);
	// jscpd:ignore-end
}
