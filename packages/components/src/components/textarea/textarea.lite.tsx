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
		nativeAttributes: ['disabled', 'required', 'value'],
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
		mId: undefined,
		mMessageId: undefined,
		mValidMessageId: undefined,
		mInvalidMessageId: undefined,
		mInvalidMessage: undefined,
		// Workaround for Vue output: TS for Vue would think that it could be a function, and by this we clarify that it's a string
		mDescByIds: undefined,
		mValue: '',
		mVoiceOverFallback: '',
		mAbortController: undefined,
		hasValidState: () => {
			return !!(props.validMessage ?? props.validation === 'valid');
		},
		handleValidation: () => {
			/* For a11y reasons we need to map the correct message with the textarea */
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
				(props.required || props.minLength || props.maxLength)
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
		const mId = props.id ?? props._id ?? `textarea-${uuid()}`;
		state.mId = mId;
		state.mMessageId = mId + DEFAULT_MESSAGE_ID_SUFFIX;
		state.mValidMessageId = mId + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
		state.mInvalidMessageId = mId + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
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
			class={cls('db-textarea', props.className)}
			data-variant={props.variant}
			data-hide-asterisk={getHideProp(props.showRequiredAsterisk)}
			data-hide-label={getHideProp(props.showLabel)}>
			<label htmlFor={state.mId}>{props.label ?? DEFAULT_LABEL}</label>

			<textarea
				aria-invalid={props.validation === 'invalid'}
				data-custom-validity={props.validation}
				data-field-sizing={props.fieldSizing}
				ref={_ref}
				id={state.mId}
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
				value={props.value ?? state.mValue}
				aria-describedby={props.ariaDescribedBy ?? state.mDescByIds}
				placeholder={props.placeholder ?? DEFAULT_PLACEHOLDER}
				rows={getNumber(props.rows, DEFAULT_ROWS)}
				cols={getNumber(props.cols)}
			/>

			<Show when={stringPropVisible(props.message, props.showMessage)}>
				<DBInfotext
					size="small"
					icon={props.messageIcon}
					id={state.mMessageId}>
					{props.message}
				</DBInfotext>
			</Show>
			<Show when={state.hasValidState()}>
				<DBInfotext
					id={state.mValidMessageId}
					size="small"
					semantic="successful">
					{props.validMessage || DEFAULT_VALID_MESSAGE}
				</DBInfotext>
			</Show>

			<DBInfotext
				id={state.mInvalidMessageId}
				size="small"
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
