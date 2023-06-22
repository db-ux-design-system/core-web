import { For, onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBIcon } from '../icon';
import { uuid } from '../../utils';
import { DBInputProps, DBInputState } from './model';
import { DEFAULT_ID, DEFAULT_LABEL } from '../../shared/constants';
import {
	DefaultVariantType,
	DefaultVariantsIcon,
	KeyValueType
} from '../../shared/model';
import classNames from 'classnames';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
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
	// jscpd:ignore-start
	const state = useStore<DBInputState>({
		_id: DEFAULT_ID,
		_isValid: undefined,
		_dataListId: DEFAULT_ID,
		iconVisible: (icon?: string) => {
			return Boolean(icon && icon !== '_' && icon !== 'none');
		},
		getIcon: (variant?: DefaultVariantType) => {
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

			if (event.target?.validity?.valid != state._isValid) {
				state._isValid = event.target?.validity?.valid;
				if (props.validityChange) {
					props.validityChange(!!event.target?.validity?.valid);
				}
			}

			// TODO: Replace this with the solution out of https://github.com/BuilderIO/mitosis/issues/833 after this has been "solved"
			// VUE:this.$emit("update:value", event.target.value);
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
		getClassNames: (...args: classNames.ArgumentArray) => {
			return classNames(args);
		}
	});

	onMount(() => {
		state._id = props.id || 'input-' + uuid();
		state._dataListId = props.dataListId || `datalist-${uuid()}`;

		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<div
			class={state.getClassNames('db-input', props.className)}
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
				defaultValue={props.defaultValue}
				value={props.value}
				aria-invalid={props.invalid}
				maxLength={props.maxLength}
				minLength={props.minLength}
				max={props.max}
				min={props.min}
				pattern={props.pattern}
				onChange={(event) => state.handleChange(event)}
				onBlur={(event) => state.handleBlur(event)}
				onFocus={(event) => state.handleFocus(event)}
				list={props.dataList && state._dataListId}
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
					class="icon-state"
				/>
			</Show>
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
		</div>
	);
}
