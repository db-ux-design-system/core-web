import {
	For,
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBSelectOptionType, DBSelectProps, DBSelectState } from './model';
import { cls, getMessageIcon, uuid } from '../../utils';
import {
	DEFAULT_ID,
	DEFAULT_LABEL,
	DEFAULT_MESSAGE_ID_SUFFIX,
	DEFAULT_PLACEHOLDER_ID_SUFFIX
} from '../../shared/constants';
import { DBInfotext } from '../infotext';
import { ChangeEvent, ClickEvent, InteractionEvent } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBSelect(props: DBSelectProps) {
	const ref = useRef<HTMLSelectElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBSelectState>({
		_id: DEFAULT_ID,
		_messageId: DEFAULT_ID + DEFAULT_MESSAGE_ID_SUFFIX,
		_placeholderId: DEFAULT_ID + DEFAULT_PLACEHOLDER_ID_SUFFIX,
		handleClick: (event: ClickEvent<HTMLSelectElement>) => {
			if (props.onClick) {
				props.onClick(event);
			}
		},
		handleChange: (event: ChangeEvent<HTMLSelectElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}
			const target = event.target as HTMLSelectElement;

			// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
			// VUE:this.$emit("update:value", target.value);

			// Change event to work with reactive and template driven forms
			// ANGULAR: this.propagateChange(target.value);
			// ANGULAR: this.writeValue(target.value);
		},
		handleBlur: (event: InteractionEvent<HTMLSelectElement>) => {
			if (props.onBlur) {
				props.onBlur(event);
			}

			if (props.blur) {
				props.blur(event);
			}
		},
		handleFocus: (event: InteractionEvent<HTMLSelectElement>) => {
			if (props.onFocus) {
				props.onFocus(event);
			}

			if (props.focus) {
				props.focus(event);
			}
		},
		getOptionLabel: (option: DBSelectOptionType) => {
			return option.label ?? option.value.toString();
		}
	});

	onMount(() => {
		const id = props.id || 'select-' + uuid();
		state._id = id;
		state._messageId = id + DEFAULT_MESSAGE_ID_SUFFIX;
		state._placeholderId = id + DEFAULT_PLACEHOLDER_ID_SUFFIX;

		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<div
			class={cls('db-select', props.className)}
			data-variant={props.variant}
			data-label-variant={props.labelVariant}
			data-icon={props.icon}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<label htmlFor={state._id}>{props.label ?? DEFAULT_LABEL}</label>
			<select
				ref={ref}
				aria-invalid={props.invalid}
				required={props.required}
				disabled={props.disabled}
				id={state._id}
				name={props.name}
				value={props.value}
				autocomplete={props.autocomplete}
				onClick={(event: ClickEvent<HTMLSelectElement>) =>
					state.handleClick(event)
				}
				onChange={(event: ChangeEvent<HTMLSelectElement>) =>
					state.handleChange(event)
				}
				onBlur={(event: InteractionEvent<HTMLSelectElement>) =>
					state.handleBlur(event)
				}
				onFocus={(event: InteractionEvent<HTMLSelectElement>) =>
					state.handleFocus(event)
				}
				aria-describedby={
					(props.message && state._messageId) || state._placeholderId
				}>
				{/* Empty option for floating label */}
				<option hidden></option>
				<Show when={props.options}>
					<For each={props.options}>
						{(option: DBSelectOptionType) => (
							<>
								<Show when={option.options}>
									<optgroup
										key={'optgroup-' + option.value}
										label={state.getOptionLabel(option)}>
										<For each={option.options}>
											{(
												optgroupOption: DBSelectOptionType
											) => (
												<option
													key={
														'option-' +
														optgroupOption.value
													}
													value={optgroupOption.value}
													disabled={
														optgroupOption.disabled
													}>
													{state.getOptionLabel(
														optgroupOption
													)}
												</option>
											)}
										</For>
									</optgroup>
								</Show>
								<Show when={!option.options}>
									<option
										key={'option-' + option.value}
										value={option.value}
										disabled={option.disabled}>
										{state.getOptionLabel(option)}
									</option>
								</Show>
							</>
						)}
					</For>
				</Show>
				{props.children}
			</select>
			<span id={state._placeholderId}>
				{props.placeholder ?? props.label}
			</span>
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
