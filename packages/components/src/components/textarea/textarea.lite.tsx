import {
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBTextareaProps, DBTextareaState } from './model';
import { DBInfotext } from '../infotext';
import { cls, uuid } from '../../utils';
import {
	DEFAULT_INVALID_MESSAGE,
	DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
	DEFAULT_LABEL,
	DEFAULT_MESSAGE_ID_SUFFIX,
	DEFAULT_VALID_MESSAGE,
	DEFAULT_VALID_MESSAGE_ID_SUFFIX
} from '../../shared/constants';
import { ChangeEvent, InputEvent, InteractionEvent } from '../../shared/model';
import { handleFrameworkEvent } from '../../utils/form-components';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBTextarea(props: DBTextareaProps) {
	const ref = useRef<HTMLTextAreaElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTextareaState>({
		_id: 'textarea-' + uuid(),
		_messageId: this._id + DEFAULT_MESSAGE_ID_SUFFIX,
		_validMessageId: this._id + DEFAULT_VALID_MESSAGE_ID_SUFFIX,
		_invalidMessageId: this._id + DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
		// Workaround for Vue output: TS for Vue would think that it could be a function, and by this we clarify that it's a string
		_descByIds: `${this._messageId}`,
		defaultValues: {
			label: DEFAULT_LABEL,
			placeholder: ' ',
			rows: '4'
		},
		handleInput: (event: InputEvent<HTMLTextAreaElement>) => {
			if (props.onInput) {
				props.onInput(event);
			}

			if (props.input) {
				props.input(event);
			}

			if (!ref?.validity.valid || props.customValidity === 'invalid') {
				state._descByIds = state._invalidMessageId;
			} else if (
				props.customValidity === 'valid' ||
				(ref?.validity.valid &&
					(props.required || props.minLength || props.maxLength))
			) {
				state._descByIds = state._validMessageId;
			} else if (props.message) {
				state._descByIds = state._messageId;
			} else {
				state._descByIds = '';
			}
		},
		handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			handleFrameworkEvent(this, event);
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
		},
		getValidMessage: () => {
			return props.validMessage || DEFAULT_VALID_MESSAGE;
		},
		getInvalidMessage: () => {
			return (
				props.invalidMessage ||
				ref?.validationMessage ||
				DEFAULT_INVALID_MESSAGE
			);
		}
	});

	onMount(() => {
		state._id = props.id || state._id;
	});

	onUpdate(() => {
		if (state._id) {
			const messageId = state._id + DEFAULT_MESSAGE_ID_SUFFIX;
			const validMessageId = state._id + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
			const invalidMessageId =
				state._id + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
			state._messageId = messageId;
			state._validMessageId = validMessageId;
			state._invalidMessageId = invalidMessageId;
		}
	}, [state._id]);

	return (
		<div
			class={cls('db-textarea', props.className)}
			data-variant={props.variant}>
			<label htmlFor={state._id}>
				{props.label ?? state.defaultValues.label}
			</label>

			<textarea
				aria-invalid={props.customValidity === 'invalid'}
				data-custom-validity={props.customValidity}
				ref={ref}
				id={state._id}
				data-resize={props.resize}
				disabled={props.disabled}
				required={props.required}
				readOnly={props.readOnly}
				form={props.form}
				maxLength={props.maxLength}
				minLength={props.minLength}
				name={props.name}
				wrap={props.wrap}
				spellcheck={props.spellCheck}
				autocomplete={props.autocomplete}
				onInput={(event: ChangeEvent<HTMLInputElement>) =>
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
				value={props.value}
				aria-describedby={state._descByIds}
				placeholder={
					props.placeholder ?? state.defaultValues.placeholder
				}
				rows={props.rows ?? state.defaultValues.rows}
				cols={props.cols}
			/>

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
				{state.getValidMessage()}
			</DBInfotext>

			<DBInfotext
				id={state._invalidMessageId}
				size="small"
				semantic="critical">
				{state.getInvalidMessage()}
			</DBInfotext>
		</div>
	);
	// jscpd:ignore-end
}
