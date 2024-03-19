import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBTextareaProps, DBTextareaState } from './model';
import { DBInfotext } from '../infotext';
import { cls, uuid } from '../../utils';
import {
	DEFAULT_ID,
	DEFAULT_INVALID_MESSAGE,
	DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
	DEFAULT_LABEL,
	DEFAULT_MESSAGE_ID_SUFFIX,
	DEFAULT_VALID_MESSAGE,
	DEFAULT_VALID_MESSAGE_ID_SUFFIX
} from '../../shared/constants';
import { ChangeEvent, InteractionEvent } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBTextarea(props: DBTextareaProps) {
	const ref = useRef<HTMLTextAreaElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTextareaState>({
		_id: DEFAULT_ID,
		_messageId: DEFAULT_ID + DEFAULT_MESSAGE_ID_SUFFIX,
		_validMessageId: DEFAULT_ID + DEFAULT_VALID_MESSAGE_ID_SUFFIX,
		_invalidMessageId: DEFAULT_ID + DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
		_descByIds: '',
		defaultValues: {
			label: DEFAULT_LABEL,
			placeholder: ' ',
			rows: '4'
		},
		handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}
			const target = event.target as HTMLTextAreaElement;

			// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
			// VUE:this.$emit("update:value", target.value);

			// Change event to work with reactive and template driven forms
			// ANGULAR: this.propagateChange(target.value);
			// ANGULAR: this.writeValue(target.value);
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
		state._id = props.id || 'textarea-' + uuid();
		state._messageId = state._id + DEFAULT_MESSAGE_ID_SUFFIX;
		state._validMessageId = state._id + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
		state._invalidMessageId = state._id + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;

		state._descByIds = [
			state._messageId,
			state._validMessageId,
			state._invalidMessageId
		].join(' ');
	});

	return (
		<div
			class={cls('db-textarea', props.className)}
			data-variant={props.variant}>
			<label htmlFor={state._id}>
				{props.label ?? state.defaultValues.label}
			</label>

			<textarea
				ref={ref}
				id={state._id}
				data-resize={props.resize}
				disabled={props.disabled}
				required={props.required}
				readOnly={props.readOnly}
				aria-invalid={props.invalid}
				form={props.form}
				maxLength={props.maxLength}
				minLength={props.minLength}
				name={props.name}
				wrap={props.wrap}
				spellcheck={props.spellCheck}
				autocomplete={props.autocomplete}
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
				aria-describedby={props.message && state._messageId}
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
				{props.validMessage || DEFAULT_VALID_MESSAGE}
			</DBInfotext>

			<DBInfotext
				id={state._invalidMessageId}
				size="small"
				semantic="critical">
				{props.invalidMessage || DEFAULT_INVALID_MESSAGE}
			</DBInfotext>
		</div>
	);
	// jscpd:ignore-end
}
