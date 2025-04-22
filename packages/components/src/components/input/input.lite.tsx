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
	cls,
	delay,
	getBoolean,
	getHideProp,
	getNumber,
	hasVoiceOver,
	isArrayOfStrings,
	stringPropVisible,
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
import {
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'required']
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
		_descByIds: '',
		_value: '',
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
				state._descByIds = '';
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
				ref={_ref}
				id={state._id}
				name={props.name}
				type={props.type || 'text'}
				placeholder={props.placeholder ?? DEFAULT_PLACEHOLDER}
				disabled={getBoolean(props.disabled, 'disabled')}
				required={getBoolean(props.required, 'required')}
				step={getNumber(props.step)}
				value={props.value ?? state._value}
				maxLength={getNumber(props.maxLength, props.maxlength)}
				minLength={getNumber(props.minLength, props.minlength)}
				max={getNumber(props.max)}
				min={getNumber(props.min)}
				readOnly={
					getBoolean(props.readOnly, 'readOnly') ||
					getBoolean(props.readonly, 'readonly')
				}
				form={props.form}
				pattern={props.pattern}
				size={props.size}
				// @ts-expect-error inout has a property autoComplete
				autoComplete={props.autocomplete}
				autoFocus={getBoolean(props.autofocus, 'autofocus')}
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
					size="small"
					icon={props.messageIcon}
					id={state._messageId}>
					{props.message}
				</DBInfotext>
			</Show>

			<Show when={state.hasValidState()}>
				<DBInfotext
					id={state._validMessageId}
					size="small"
					semantic="successful">
					{props.validMessage || DEFAULT_VALID_MESSAGE}
				</DBInfotext>
			</Show>

			<DBInfotext
				id={state._invalidMessageId}
				size="small"
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
