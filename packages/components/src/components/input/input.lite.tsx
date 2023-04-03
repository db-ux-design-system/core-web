import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBIcon } from '../icon';
import { uuid } from '../../utils';
import { DBInputProps, DBInputState } from './model';
import { DEFAULT_ID, DEFAULT_LABEL } from '../../shared/constants';
import { DefaultVariantProps, DefaultVariantsIcon } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: true,
		hasDisabledProp: true,
		properties: [
			{ name: 'label', type: 'SingleLine.Text', required: true },
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
				type: 'DefaultVariant' // this is a custom type not provided by ms
			}
		]
	}
});

const DEFAULT_VALUES = {
	label: DEFAULT_LABEL,
	placeholder: ' '
};

export default function DBInput(props: DBInputProps) {
	// This is used as forwardRef
	let component: any;
	const state = useStore<DBInputState>({
		_id: DEFAULT_ID,
		_isValid: undefined,
		_value: '',
		iconVisible: (icon?: string) => {
			return icon && icon !== '_' && icon !== 'none';
		},
		getIcon: (variant?: DefaultVariantProps) => {
			if (variant) {
				return DefaultVariantsIcon[variant];
			}

			return '';
		},
		handleChange: (event: any) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			// using controlled components for react forces us to using state for value
			state._value = event.target.value;

			if (event.target?.validity?.valid != state._isValid) {
				state._isValid = event.target?.validity?.valid;
				if (props.validityChange) {
					props.validityChange(!!event.target?.validity?.valid);
				}
			}
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
		state._id = props.id ? props.id : 'input-' + uuid();

		if (props.value) {
			state._value = props.value;
		}

		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<div
			class={'db-input ' + (props.className || '')}
			data-variant={props.variant}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<Show when={state.iconVisible(props.icon)}>
				<DBIcon icon={props.icon} class="icon-before" />
			</Show>
			<input
				ref={component}
				id={state._id}
				name={props.name}
				type={props.type || 'text'}
				placeholder={props.placeholder ?? DEFAULT_VALUES.placeholder}
				aria-labelledby={state._id + '-label'}
				disabled={props.disabled}
				required={props.required}
				value={state._value}
				maxLength={props.maxLength}
				minLength={props.minLength}
				pattern={props.pattern}
				onChange={(event) => state.handleChange(event)}
				onBlur={(event) => state.handleBlur(event)}
				onFocus={(event) => state.handleFocus(event)}
			/>
			<label
				htmlFor={state._id}
				aria-hidden="true"
				id={state._id + '-label'}>
				<span>{props.label ?? DEFAULT_VALUES.label}</span>
			</label>
			<Show when={props.description}>
				<p class="description">{props.description}</p>
			</Show>
			<Show when={props.variant || props.required || props.pattern}>
				<DBIcon
					icon={state.getIcon(props.variant)}
					class="icon-input-state"
				/>
			</Show>
			<Show when={state.iconVisible(props.iconAfter)}>
				<DBIcon icon={props.iconAfter} class="icon-after" />
			</Show>
		</div>
	);
}
