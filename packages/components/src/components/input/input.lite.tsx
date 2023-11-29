import {
	For,
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getMessageIcon, uuid } from '../../utils';
import { DBInputProps, DBInputState } from './model';
import {
	DEFAULT_ID,
	DEFAULT_LABEL,
	DEFAULT_MESSAGE_ID_SUFFIX
} from '../../shared/constants';
import {
	ChangeEvent,
	InteractionEvent,
	KeyValueType
} from '../../shared/model';
import { DBInfotext } from '../infotext';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBInput(props: DBInputProps) {
	const ref = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBInputState>({
		_id: DEFAULT_ID,
		_messageId: DEFAULT_ID + DEFAULT_MESSAGE_ID_SUFFIX,
		_dataListId: DEFAULT_ID,
		defaultValues: {
			label: DEFAULT_LABEL,
			placeholder: ' '
		},
		handleChange: (event: ChangeEvent<HTMLInputElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			const target = event.target as HTMLInputElement;

			// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
			// VUE:this.$emit("update:value", target.value);

			// Change event to work with reactive and template driven forms
			// ANGULAR: this.propagateChange(target.value);
			// ANGULAR: this.writeValue(target.value);
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
		state._id = props.id || 'input-' + uuid();
		state._messageId = state._id + DEFAULT_MESSAGE_ID_SUFFIX;
		state._dataListId = props.dataListId || `datalist-${uuid()}`;

		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<div
			class={cls('db-input', props.className)}
			data-variant={props.variant}
			data-label-variant={props.labelVariant}
			data-icon={props.icon}
			data-icon-after={props.iconAfter}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<label htmlFor={state._id}>
				{props.label ?? state.defaultValues.label}
			</label>
			<input
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
				aria-invalid={props.invalid}
				maxLength={props.maxLength}
				minLength={props.minLength}
				max={props.max}
				min={props.min}
				readOnly={props.readOnly}
				form={props.form}
				pattern={props.pattern}
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
				aria-describedby={props.message && state._messageId}
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
					variant={props.variant}
					icon={getMessageIcon(props.variant, props.messageIcon)}
					id={state._messageId}>
					{props.message}
				</DBInfotext>
			</Show>
		</div>
	);
}
