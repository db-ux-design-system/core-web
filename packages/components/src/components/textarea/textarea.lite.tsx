import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBTextareaState, DBTextareaProps } from './model';
import { DBInfotext } from '../infotext';
import { cls, uuid } from '../../utils';
import { DEFAULT_ID, DEFAULT_LABEL } from '../../shared/constants';
import { DefaultVariantType, DefaultVariantsIcon } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: false,
		hasDisabledProp: true,
		properties: [
			// 	{ name: 'label', type: 'SingleLine.Text', required: true },
			// 	{ name: 'placeholder', type: 'SingleLine.Text' },
			// 	{ name: 'value', type: 'SingleLine.Text', onChange: 'value' }, // $event.target["value"|"checked"|...]
			// 	{
			// 		name: 'variant',
			// 		type: 'DefaultVariant' // this is a custom type not provided by ms
			// 	}
		]
	}
});

export default function DBTextarea(props: DBTextareaProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBTextareaState>({
		_id: DEFAULT_ID,
		_isValid: undefined,
		defaultValues: {
			label: DEFAULT_LABEL,
			placeholder: ' ',
			rows: '4'
		},
		iconVisible: (icon?: string) => {
			return Boolean(icon && icon !== '_' && icon !== 'none');
		},
		getVariantIcon: (icon?: string, variant?: string) => {
			if (state.iconVisible(icon)) {
				return icon;
			}

			return (variant && DefaultVariantsIcon[variant]) || 'none';
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

			// Angular: propagate change event to work with reactive and template driven forms
			this.propagateChange(event.target.value);
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
		},
		propagateChange: (_: any) => {}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}

		state._id = props.id || 'textarea-' + uuid();
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
				aria-hidden="true"
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
				readOnly={props.readonly}
				onChange={(event) => state.handleChange(event)}
				onBlur={(event) => state.handleBlur(event)}
				onFocus={(event) => state.handleFocus(event)}
				defaultValue={props.defaultValue ?? props.children}
				value={props.value}
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
					icon={state.getVariantIcon(
						props.messageIcon,
						props.variant
					)}>
					{props.message}
				</DBInfotext>
			</Show>
		</div>
	);
}
