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

import { ChangeEvent, InteractionEvent } from '../../shared/model';
import {
	cls,
	getBoolean,
	getBooleanAsString,
	getHideProp,
	uuid
} from '../../utils';
import {
	addCheckedResetEventListener,
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';
import { DBSwitchProps, DBSwitchState } from './model';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'required', 'checked', 'indeterminate'],
		signals: {
			writeable: ['disabled', 'checked']
		}
	}
});
useDefaultProps<DBSwitchProps>({});

export default function DBSwitch(props: DBSwitchProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLInputElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBSwitchState>({
		_id: undefined,
		handleChange: (
			event: ChangeEvent<HTMLInputElement>,
			reset?: boolean
		) => {
			useTarget({
				angular: () => {
					if (props.onChange) {
						// We need to split the if statements for generation
						if (reset) {
							props.onChange(event);
						}
					}
				},
				default: () => {
					if (props.onChange) {
						props.onChange(event);
					}
				}
			});

			useTarget({
				angular: () => {
					handleFrameworkEventAngular(state, event, 'checked');
				},
				vue: () => handleFrameworkEventVue(() => {}, event, 'checked')
			});
		},
		handleBlur: (event: InteractionEvent<HTMLInputElement>) => {
			if (props.onBlur) {
				props.onBlur(event);
			}
		},
		handleFocus: (event: InteractionEvent<HTMLInputElement>) => {
			if (props.onFocus) {
				props.onFocus(event);
			}
		}
	});

	onMount(() => {
		state._id = props.id ?? `switch-${uuid()}`;
	});

	onUpdate(() => {
		if (_ref) {
			const defaultChecked = useTarget({
				react: (props as any).defaultChecked,
				default: undefined
			});
			addCheckedResetEventListener(
				_ref,
				{ checked: props.checked, defaultChecked },
				(event) => {
					state.handleChange(event, true);
				}
			);
		}
	}, [_ref]);
	// jscpd:ignore-end

	return (
		<label
			data-visual-aid={getBooleanAsString(props.visualAid)}
			data-size={props.size}
			data-hide-label={getHideProp(props.showLabel)}
			data-emphasis={props.emphasis}
			htmlFor={state._id}
			data-hide-asterisk={getHideProp(props.showRequiredAsterisk)}
			class={cls('db-switch', props.className)}>
			<input
				id={state._id}
				type="checkbox"
				role="switch"
				ref={_ref}
				checked={getBoolean(props.checked, 'checked')}
				value={props.value}
				disabled={getBoolean(props.disabled, 'disabled')}
				aria-invalid={props.validation === 'invalid'}
				data-custom-validity={props.validation}
				name={props.name}
				required={getBoolean(props.required, 'required')}
				data-aid-icon={props.iconLeading ?? props.icon}
				data-aid-icon-trailing={props.iconTrailing}
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
