import {
	For,
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, uuid } from '../../utils';
import { DBInputProps, DBInputState } from './model';
import {
	DEFAULT_INVALID_MESSAGE,
	DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
	DEFAULT_LABEL,
	DEFAULT_MESSAGE_ID_SUFFIX,
	DEFAULT_VALID_MESSAGE,
	DEFAULT_VALID_MESSAGE_ID_SUFFIX
} from '../../shared/constants';
import {
	InputEvent,
	ChangeEvent,
	InteractionEvent,
	KeyValueType
} from '../../shared/model';
import { DBInfotext } from '../infotext';
import { handleFrameworkEvent } from '../../utils/form-components';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBInput(props: DBInputProps) {
	const ref = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBInputState>({
		_id: 'input-' + uuid(),
		_messageId: this._id + DEFAULT_MESSAGE_ID_SUFFIX,
		_validMessageId: this._id + DEFAULT_VALID_MESSAGE_ID_SUFFIX,
		_invalidMessageId: this._id + DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
		_dataListId: `datalist-` + uuid(),
		_descByIds: this._messageId,
		defaultValues: {
			label: DEFAULT_LABEL,
			placeholder: ' '
		},
		handleInput: (event: InputEvent<HTMLInputElement>) => {
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
					(props.required ||
						props.minLength ||
						props.maxLength ||
						props.pattern))
			) {
				state._descByIds = state._validMessageId;
			} else if (props.message) {
				state._descByIds = state._messageId;
			} else {
				state._descByIds = '';
			}
		},
		handleChange: (event: ChangeEvent<HTMLInputElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			handleFrameworkEvent(this, event);
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
		state._id = props.id ?? state._id;
		state._dataListId = props.dataListId ?? state._dataListId;
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
			class={cls('db-input', props.className)}
			data-variant={props.variant}
			data-icon={props.icon}
			data-icon-after={props.iconAfter}>
			<label htmlFor={state._id}>
				{props.label ?? state.defaultValues.label}
			</label>
			<input
				aria-invalid={props.customValidity === 'invalid'}
				data-custom-validity={props.customValidity}
				ref={ref}
				id={state._id}
				name={props.name}
				type={props.type || 'text'}
				placeholder={
					props.placeholder ?? state.defaultValues.placeholder
				}
				disabled={props.disabled}
				required={props.required}
				step={props.step}
				value={props.value}
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
					<For each={props.dataList}>
						{(option: KeyValueType) => (
							<option
								key={
									state._dataListId + '-option-' + option.key
								}
								value={option.key}>
								{option.value}
							</option>
						)}
					</For>
				</datalist>
			</Show>
			{props.children}
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
