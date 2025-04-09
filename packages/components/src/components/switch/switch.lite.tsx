import {
	onMount,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import { DBSwitchProps, DBSwitchState } from './model';
import {
	cls,
	getBoolean,
	getBooleanAsString,
	getHideProp,
	uuid
} from '../../utils';
import { ChangeEvent, InteractionEvent } from '../../shared/model';
import {
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'required', 'checked', 'indeterminate']
	}
});
useDefaultProps<DBSwitchProps>({});

export default function DBSwitch(props: DBSwitchProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLInputElement | undefined>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBSwitchState>({
		_id: undefined,
		_checked: useTarget({
			react: (props as any)['defaultChecked'] ?? false,
			default: false
		}),
		handleChange: (event: ChangeEvent<HTMLInputElement>) => {
			if (props.onChange) {
				props.onChange(event);
			}

			if (props.change) {
				props.change(event);
			}

			// We have different ts types in different frameworks, so we need to use any here
			state._checked = (event.target as any)?.['checked'];

			useTarget({
				angular: () =>
					handleFrameworkEventAngular(state, event, 'checked'),
				vue: () => handleFrameworkEventVue(() => {}, event, 'checked')
			});
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
		state._id = props.id ?? `switch-${uuid()}`;
	});

	onUpdate(() => {
		if (props.checked !== undefined && props.checked !== null) {
			state._checked = getBoolean(props.checked);
		}
	}, [props.checked]);

	// jscpd:ignore-end

	return (
		<label
			data-visual-aid={getBooleanAsString(props.visualAid)}
			data-size={props.size}
			data-hide-label={getHideProp(props.showLabel)}
			data-emphasis={props.emphasis}
			htmlFor={state._id}
			class={cls('db-switch', props.className)}>
			<input
				id={state._id}
				type="checkbox"
				role="switch"
				aria-checked={getBooleanAsString(state._checked)}
				ref={_ref}
				checked={getBoolean(props.checked, 'checked')}
				value={props.value}
				disabled={getBoolean(props.disabled, 'disabled')}
				aria-describedby={props.describedbyid}
				aria-invalid={props.validation === 'invalid'}
				data-custom-validity={props.validation}
				name={props.name}
				required={getBoolean(props.required, 'required')}
				data-aid-icon={props.icon}
				data-aid-icon-after={props.iconAfter}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					state.handleChange(event)
				}
				onBlur={(event: InteractionEvent<HTMLInputElement>) =>
					state.handleBlur(event)
				}
				onFocus={(event: InteractionEvent<HTMLInputElement>) =>
					state.handleFocus(event)
				}
			/>
			<Show when={props.label} else={props.children}>
				{props.label}
			</Show>
		</label>
	);
}
