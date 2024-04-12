import {
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBCheckboxProps, DBCheckboxState } from './model';
import { cls, uuid } from '../../utils';
import {
	DEFAULT_ID,
	DEFAULT_INVALID_MESSAGE,
	DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
	DEFAULT_MESSAGE_ID_SUFFIX,
	DEFAULT_VALID_MESSAGE,
	DEFAULT_VALID_MESSAGE_ID_SUFFIX
} from '../../shared/constants';
import { ChangeEvent, InteractionEvent } from '../../shared/model';
import { DBInfotext } from '../infotext';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBCheckbox(props: DBCheckboxProps) {
	const ref = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBCheckboxState>({
		initialized: false,
		_id: DEFAULT_ID,
		_messageId: DEFAULT_ID + DEFAULT_MESSAGE_ID_SUFFIX,
		_validMessageId: DEFAULT_ID + DEFAULT_VALID_MESSAGE_ID_SUFFIX,
		_invalidMessageId: DEFAULT_ID + DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
		_descByIds: '',

		handleChange: (event: ChangeEvent<HTMLInputElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			const target = event.target as HTMLInputElement;

			// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
			// VUE:this.$emit("update:checked", target.checked);

			// Change event to work with reactive and template driven forms
			// ANGULAR: this.propagateChange(target.checked);
			// ANGULAR: this.writeValue(target.checked);
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
		}
	});

	onMount(() => {
		state.initialized = true;
		state._id = props.id || 'checkbox-' + uuid();
	});

	onUpdate(() => {
		if (state.initialized && state._id) {
			state._messageId = state._id + DEFAULT_MESSAGE_ID_SUFFIX;
			state._validMessageId = state._id + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
			state._invalidMessageId =
				state._id + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;

			state._descByIds = [
				state._messageId,
				state._validMessageId,
				state._invalidMessageId
			].join(' ');
		}
	}, [state._id, state.initialized]);
	// jscpd:ignore-end

	// TODO we have to check how to update on every change..
	onUpdate(() => {
		if (state.initialized && document && state._id) {
			const checkboxElement = document?.getElementById(
				state._id
			) as HTMLInputElement;
			if (checkboxElement) {
				// in angular this must be set via native element
				if (props.checked != undefined) {
					checkboxElement.checked = props.checked;
				}

				if (props.indeterminate !== undefined) {
					// When indeterminate is set, the value of the checked prop only impacts the form submitted values.
					// It has no accessibility or UX implications. (https://mui.com/material-ui/react-checkbox/)
					checkboxElement.indeterminate = props.indeterminate;
				}
			}
		}
	}, [state.initialized, props.indeterminate, props.checked]);

	return (
		<div
			className={cls('db-checkbox', props.className)}
			data-size={props.size}
			data-variant={props.variant}>
			<label htmlFor={state._id}>
				<input
					aria-invalid={props.customValidity === 'invalid'}
					data-custom-validity={props.customValidity}
					ref={ref}
					type="checkbox"
					id={state._id}
					name={props.name}
					checked={props.checked}
					disabled={props.disabled}
					value={props.value}
					required={props.required}
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						state.handleChange(event)
					}
					onBlur={(event: InteractionEvent<HTMLInputElement>) =>
						state.handleBlur(event)
					}
					onFocus={(event: InteractionEvent<HTMLInputElement>) =>
						state.handleFocus(event)
					}
					aria-describedby={state._descByIds}
				/>
				<Show when={props.label}>
					<span>{props.label}</span>
				</Show>
				{props.children}
			</label>

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
				{props.invalidMessage ||
					ref?.validationMessage ||
					DEFAULT_INVALID_MESSAGE}
			</DBInfotext>
		</div>
	);
}
