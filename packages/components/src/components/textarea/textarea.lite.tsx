import {
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
	DEFAULT_INVALID_MESSAGE,
	DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
	DEFAULT_LABEL,
	DEFAULT_MESSAGE_ID_SUFFIX,
	DEFAULT_PLACEHOLDER,
	DEFAULT_ROWS,
	DEFAULT_VALID_MESSAGE,
	DEFAULT_VALID_MESSAGE_ID_SUFFIX
} from '../../shared/constants';
import { ChangeEvent, InputEvent, InteractionEvent } from '../../shared/model';
import {
	cls,
	delay,
	getBoolean,
	getHideProp,
	getNumber,
	hasVoiceOver,
	stringPropVisible,
	uuid
} from '../../utils';
import {
	addValueResetEventListener,
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';
import DBInfotext from '../infotext/infotext.lite';
import { DBTextareaProps, DBTextareaState } from './model';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'required'],
		signals: {
			writeable: ['disabled', 'value']
		}
	}
});
useDefaultProps<DBTextareaProps>({});

export default function DBTextarea(props: DBTextareaProps) {
	const _ref = useRef<HTMLTextAreaElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBTextareaState>({
		_id: undefined,
		_messageId: undefined,
		_validMessageId: undefined,
		_invalidMessageId: undefined,
		_invalidMessage: undefined,
		// Workaround for Vue output: TS for Vue would think that it could be a function, and by this we clarify that it's a string
		_descByIds: undefined,
		_value: '',
		_voiceOverFallback: '',
		abortController: undefined,
		hasValidState: () => {
			return !!(props.validMessage ?? props.validation === 'valid');
		},
		hasInvalidState: () => {
			return !_ref?.validity?.valid || props.validation === 'invalid';
		},
		handleValidation: () => {
			/* For a11y reasons we need to map the correct message with the textarea */
			if (state.hasInvalidState()) {
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
				(props.required || props.minLength || props.maxLength)
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
		handleInput: (
			event: InputEvent<HTMLTextAreaElement>,
			reset?: boolean
		) => {
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
			event: ChangeEvent<HTMLTextAreaElement>,
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
		handleBlur: (event: InteractionEvent<HTMLTextAreaElement> | any) => {
			if (props.onBlur) {
				props.onBlur(event);
			}
		},
		handleFocus: (event: InteractionEvent<HTMLTextAreaElement> | any) => {
			if (props.onFocus) {
				props.onFocus(event);
			}
		}
	});

	onMount(() => {
		const mId = props.id ?? `textarea-${uuid()}`;
		state._id = mId;
		state._messageId = mId + DEFAULT_MESSAGE_ID_SUFFIX;
		state._validMessageId = mId + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
		state._invalidMessageId = mId + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
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

			if (stringPropVisible(props.message, props.showMessage)) {
				state._descByIds = messageId;
			}
			state.handleValidation();
		}
	}, [state._id]);

	onUpdate(() => {
		state._value = props.value;
	}, [props.value]);

	onUpdate(() => {
		if (_ref) {
			const defaultValue = useTarget({
				react: (props as any).defaultValue,
				default: undefined
			});

			let controller = state.abortController;
			if (!controller) {
				controller = new AbortController();
				state.abortController = controller;
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
		state.abortController?.abort();
	});

	return (
		<div
			class={cls('db-textarea', props.className)}
			data-variant={props.variant}
			data-hide-asterisk={getHideProp(props.showRequiredAsterisk)}
			data-hide-label={getHideProp(props.showLabel)}>
			<label htmlFor={state._id}>{props.label ?? DEFAULT_LABEL}</label>

			<textarea
				aria-invalid={props.validation === 'invalid'}
				data-custom-validity={props.validation}
				data-field-sizing={props.fieldSizing}
				ref={_ref}
				id={state._id}
				data-resize={props.resize}
				data-hide-resizer={getHideProp(props.showResizer ?? true)}
				disabled={getBoolean(props.disabled, 'disabled')}
				required={getBoolean(props.required, 'required')}
				readOnly={
					getBoolean(props.readOnly, 'readOnly') ||
					getBoolean(props.readonly, 'readonly')
				}
				form={props.form}
				maxLength={getNumber(props.maxLength, props.maxlength)}
				minLength={getNumber(props.minLength, props.minlength)}
				name={props.name}
				wrap={props.wrap}
				spellcheck={props.spellCheck}
				autocomplete={props.autocomplete}
				onInput={(event: ChangeEvent<HTMLTextAreaElement>) =>
					state.handleInput(event)
				}
				onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
					state.handleChange(event)
				}
				onBlur={(event: InteractionEvent<HTMLTextAreaElement>) =>
					state.handleBlur(event)
				}
				onFocus={(event: InteractionEvent<HTMLTextAreaElement>) =>
					state.handleFocus(event)
				}
				value={props.value ?? state._value}
				aria-describedby={props.ariaDescribedBy ?? state._descByIds}
				placeholder={props.placeholder ?? DEFAULT_PLACEHOLDER}
				rows={getNumber(props.rows, DEFAULT_ROWS)}
				cols={getNumber(props.cols)}
			/>

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

			<Show when={state.hasInvalidState()}>
				<DBInfotext
					id={state._invalidMessageId}
					size="small"
					semantic="critical">
					{state._invalidMessage}
				</DBInfotext>
			</Show>

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
