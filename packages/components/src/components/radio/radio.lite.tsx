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
import { DBRadioProps, DBRadioState } from './model';
import { cls, getBoolean, getHideProp, uuid } from '../../utils';
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
useDefaultProps<DBRadioProps>({});

export default function DBRadio(props: DBRadioProps) {
	const _ref = useRef<HTMLInputElement | undefined>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBRadioState>({
		initialized: false,
		_id: undefined,
		handleChange: (event: ChangeEvent<HTMLInputElement> | any) => {
			if (props.onChange) {
				props.onChange(event);
			}

			useTarget({
				angular: () => handleFrameworkEventAngular(state, event),
				vue: () => handleFrameworkEventVue(() => {}, event)
			});
		},
		handleBlur: (event: InteractionEvent<HTMLInputElement> | any) => {
			if (props.onBlur) {
				props.onBlur(event);
			}
		},
		handleFocus: (event: InteractionEvent<HTMLInputElement> | any) => {
			if (props.onFocus) {
				props.onFocus(event);
			}
		}
	});

	onMount(() => {
		state.initialized = true;
		state._id = props.id ?? `radio-${uuid()}`;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (props.checked && state.initialized && _ref) {
			_ref.checked = true;
		}
	}, [state.initialized, _ref, props.checked]);

	return (
		<label
			data-size={props.size}
			data-hide-label={getHideProp(props.showLabel)}
			class={cls('db-radio', props.className)}
			htmlFor={state._id}>
			<input
				aria-invalid={props.validation === 'invalid'}
				data-custom-validity={props.validation}
				ref={_ref}
				type="radio"
				id={state._id}
				name={props.name}
				checked={getBoolean(props.checked, 'checked')}
				disabled={getBoolean(props.disabled, 'disabled')}
				aria-describedby={props.describedbyid}
				value={props.value}
				required={getBoolean(props.required, 'required')}
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
