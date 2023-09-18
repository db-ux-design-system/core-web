import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBTextareaProps, DBTextareaState } from './model';
import { DBInfotext } from '../infotext';
import { cls, getMessageIcon, uuid } from '../../utils';
import { DEFAULT_ID, DEFAULT_LABEL, DEFAULT_MESSAGE_ID_SUFFIX } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: false,
		hasDisabledProp: true,
		canvasSize: {
			height: 'controlled', // 'fixed', 'controlled'
			width: 'controlled' // 'fixed', 'dynamic' (requires width property), 'controlled'
		},
		properties: [
			{
				name: 'label',
				type: 'SingleLine.Text',
				defaultValue: 'Textarea',
				required: true
			},
			{ name: 'placeholder', type: 'SingleLine.Text' },
			{ name: 'value', type: 'SingleLine.Text', onChange: 'value' }, // $event.target["value"|"checked"|...]
			{
				name: 'variant',
				type: 'DefaultVariant', // this is a custom type not provided by ms
				defaultValue: 'adaptive'
			}
		]
	}
});

export default function DBTextarea(props: DBTextareaProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBTextareaState>({
		_id: DEFAULT_ID,
		_messageId: DEFAULT_ID + DEFAULT_MESSAGE_ID_SUFFIX,
		_isValid: undefined,
		defaultValues: {
			label: DEFAULT_LABEL,
			placeholder: ' ',
			rows: '4'
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
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}

		state._id = props.id || 'textarea-' + uuid();
		state._messageId = state._id + DEFAULT_MESSAGE_ID_SUFFIX;
	});
	// jscpd:ignore-end

	return (
		<div
			ref={component}
			class={cls('db-textarea', props.className)}
			data-variant={props.variant}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<label
				htmlFor={state._id}
				data-overflow={props.overflow}
				id={state._id + '-label'}>
				{props.label ?? state.defaultValues.label}
			</label>

			<textarea
				id={state._id}
				data-resize={props.resize}
				autoComplete={props.autoComplete}
				autoFocus={props.autoFocus}
				disabled={props.disabled}
				required={props.required}
				readOnly={props.readOnly}
				form={props.form}
				maxLength={props.maxLength}
				minLength={props.minLength}
				name={props.name}
				wrap={props.wrap}
				spellcheck={props.spellCheck}
				onChange={(event) => state.handleChange(event)}
				onBlur={(event) => state.handleBlur(event)}
				onFocus={(event) => state.handleFocus(event)}
				defaultValue={props.defaultValue ?? props.children}
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
					variant={props.variant}
					icon={getMessageIcon(props.variant, props.messageIcon)}
					id={state._messageId}>
					{props.message}
				</DBInfotext>
			</Show>
		</div>
	);
}
