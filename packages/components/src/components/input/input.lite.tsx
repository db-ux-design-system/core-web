import { For, onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBIcon } from '../icon';
import { cls, getMessageIcon, uuid } from '../../utils';
import { DBInputProps, DBInputState } from './model';
import { DEFAULT_ID, DEFAULT_LABEL, DEFAULT_MESSAGE_ID_SUFFIX } from '../../shared/constants';
import { KeyValueType } from '../../shared/model';
import { DBInfotext } from '../infotext';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: true,
		hasDisabledProp: true,
		canvasSize: {
			height: 'fixed', // 'fixed', 'controlled'
			width: 'controlled' // 'fixed', 'dynamic' (requires width property), 'controlled'
		},
		properties: [
			{
				name: 'label',
				type: 'SingleLine.Text',
				required: true,
				defaultValue: 'Input'
			},
			{ name: 'placeholder', type: 'SingleLine.Text' },
			{ name: 'value', type: 'SingleLine.Text', onChange: 'value' }, // $event.target["value"|"checked"|...]
			{
				name: 'icon',
				type: 'Icon' // this is a custom type not provided by ms
			},
			{
				name: 'iconAfter',
				type: 'Icon'
			},
			{
				name: 'variant',
				type: 'DefaultVariant', // this is a custom type not provided by ms
				defaultValue: 'adaptive'
			}
		]
	}
});

export default function DBInput(props: DBInputProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBInputState>({
		_id: DEFAULT_ID,
		_messageId: DEFAULT_ID + DEFAULT_MESSAGE_ID_SUFFIX,
		_isValid: undefined,
		_dataListId: DEFAULT_ID,
		defaultValues: {
			label: DEFAULT_LABEL,
			placeholder: ' '
		},
		iconVisible: (icon?: string) => {
			return Boolean(icon && icon !== '_' && icon !== 'none');
		},
		handleChange: (event: any) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			if (event.target?.validity?.valid != state._isValid) {
				state._isValid = event.target?.validity?.valid;
				if (props.validityChange) {
					props.validityChange(!!event.target?.validity?.valid);
				}
			}

			// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
			// VUE:this.$emit("update:value", event.target.value);

			// Change event to work with reactive and template driven forms
			// ANGULAR: this.propagateChange(event.target.value);
			// ANGULAR: this.writeValue(event.target.value);
		},
		handleBlur: (event: any) => {
			if (props.onBlur) {
				props.onBlur(event);
			}

			if (props.blur) {
				props.blur(event);
			}
		},
		handleFocus: (event: any) => {
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
			data-variant={props.variant}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{/* TODO: move this icon to [data-icon] */}
			<Show when={state.iconVisible(props.icon)}>
				<DBIcon icon={props.icon} class="icon-before" />
			</Show>
			<input
				ref={component}
				id={state._id}
				name={props.name}
				type={props.type || 'text'}
				placeholder={
					props.placeholder ?? state.defaultValues.placeholder
				}
				aria-labelledby={state._id + '-label'}
				disabled={props.disabled}
				required={props.required}
				defaultValue={props.defaultValue}
				step={props.step}
				value={props.value}
				aria-invalid={props.invalid}
				maxLength={props.maxLength}
				minLength={props.minLength}
				max={props.max}
				min={props.min}
				readOnly={props.readOnly}
				form={props.form}
				autoComplete={props.autoComplete}
				autoFocus={props.autoFocus}
				pattern={props.pattern}
				onChange={(event) => state.handleChange(event)}
				onBlur={(event) => state.handleBlur(event)}
				onFocus={(event) => state.handleFocus(event)}
				list={props.dataList && state._dataListId}
				aria-describedby={props.message && state._messageId}
			/>
			<label
				htmlFor={state._id}
				aria-hidden="true"
				id={state._id + '-label'}>
				<span>{props.label ?? state.defaultValues.label}</span>
			</label>
			<Show when={state.iconVisible(props.iconAfter)}>
				<DBIcon icon={props.iconAfter} class="icon-after" />
			</Show>
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
