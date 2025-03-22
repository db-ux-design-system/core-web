import {
	onMount,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import { DBTextareaProps, DBTextareaState } from './model';
import DBInfotext from '../infotext/infotext.lite';
import {
	cls,
	delay,
	getBoolean,
	getBooleanAsString,
	getHideProp,
	getNumber,
	hasVoiceOver,
	stringPropVisible,
	uuid
} from '../../utils';
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
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'required']
	}
});
useDefaultProps<DBTextareaProps>({});

export default function DBTextarea(props: DBTextareaProps) {
	const _ref = useRef<HTMLTextAreaElement | null>(null);
	// jscpd:ignore-start
	const state = useStore<DBTextareaState>({
		_id: undefined,
		_messageId: undefined,
		_validMessageId: undefined,
		_invalidMessageId: undefined,
		// Workaround for Vue output: TS for Vue would think that it could be a function, and by this we clarify that it's a string
		_descByIds: '',
		_value: '',
		_voiceOverFallback: '',
		handleInput: (event: InputEvent<HTMLTextAreaElement>) => {
			if (props.onInput) {
				props.onInput(event);
			}

			if (props.input) {
				props.input(event);
			}
		},
		handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}
			useTarget({
				angular: () => handleFrameworkEventAngular(this, event),
				vue: () => handleFrameworkEventVue(() => {}, event)
			});

			/* For a11y reasons we need to map the correct message with the textarea */
			if (!_ref?.validity.valid || props.validation === 'invalid') {
				state._descByIds = state._invalidMessageId;
				if (hasVoiceOver()) {
					state._voiceOverFallback =
						props.invalidMessage ??
						_ref?.validationMessage ??
						DEFAULT_INVALID_MESSAGE;
					delay(() => (state._voiceOverFallback = ''), 1000);
				}
			} else if (
				props.validation === 'valid' ||
				(_ref?.validity.valid &&
					(props.required || props.minLength || props.maxLength))
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
		handleBlur: (event: InteractionEvent<HTMLTextAreaElement>) => {
			if (props.onBlur) {
				props.onBlur(event);
			}

			if (props.blur) {
				props.blur(event);
			}
		},
		handleFocus: (event: InteractionEvent<HTMLTextAreaElement>) => {
			if (props.onFocus) {
				props.onFocus(event);
			}

			if (props.focus) {
				props.focus(event);
			}
		}
	});

	onMount(() => {
		const mId = props.id ?? `textarea-${uuid()}`;
		state._id = mId;
		state._messageId = mId + DEFAULT_MESSAGE_ID_SUFFIX;
		state._validMessageId = mId + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
		state._invalidMessageId = mId + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
	});

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
		}
	}, [state._id]);

	onUpdate(() => {
		state._value = props.value;
	}, [props.value]);

	return (
		<div
			class={cls('db-textarea', props.className)}
			data-variant={props.variant}
			data-hide-label={getHideProp(props.showLabel)}>
			<label htmlFor={state._id}>{props.label ?? DEFAULT_LABEL}</label>

			<textarea
				aria-invalid={props.validation === 'invalid'}
				data-custom-validity={props.validation}
				ref={_ref}
				id={state._id}
				data-resize={props.resize}
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
				aria-describedby={state._descByIds}
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
					_ref?.validationMessage ??
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
