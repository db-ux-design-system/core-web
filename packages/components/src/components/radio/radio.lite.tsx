import {
	onMount,
	onUnMount,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import { ChangeEvent, InteractionEvent } from '../../shared/model';
import { cls, delay, getBoolean, getHideProp, uuid } from '../../utils';
import {
	addResetEventListener,
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';
import { DBRadioProps, DBRadioState } from './model';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'required', 'checked', 'indeterminate'],
		signals: {
			writeable: ['disabled', 'value']
		}
	}
});
useDefaultProps<DBRadioProps>({});

export default function DBRadio(props: DBRadioProps) {
	const _ref = useRef<HTMLInputElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBRadioState>({
		initialized: false,
		_id: undefined,
		abortController: undefined,
		handleInput: (
			event: ChangeEvent<HTMLInputElement> | any,
			reset?: boolean
		) => {
			useTarget({
				angular: () => {
					if (props.onInput) {
						if (reset) {
							props.onInput(event);
						}
					}
				},
				vue: () => {
					if (props.input) {
						props.input(event);
					}
					if (props.onInput) {
						props.onInput(event);
					}
				},
				default: () => {
					if (props.onInput) {
						props.onInput(event);
					}
				}
			});

			useTarget({
				angular: () => handleFrameworkEventAngular(state, event),
				vue: () => handleFrameworkEventVue(() => {}, event)
			});
		},
		handleChange: (
			event: ChangeEvent<HTMLInputElement> | any,
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

	onUpdate(() => {
		if (props.checked && state.initialized && _ref) {
			_ref.checked = true;
		}
	}, [state.initialized, _ref, props.checked]);

	onUpdate(() => {
		if (_ref) {
			const defaultChecked = useTarget({
				react: (props as any).defaultChecked,
				default: undefined
			});

			let controller = state.abortController;
			if (!controller) {
				controller = new AbortController();
				state.abortController = controller;
			}

			addResetEventListener(
				_ref,
				(event: Event) => {
					void delay(() => {
						const resetChecked = props.checked
							? props.checked
							: defaultChecked
								? defaultChecked
								: _ref.checked;
						const valueEvent: any = {
							...event,
							target: {
								...event.target,
								value: '',
								checked: resetChecked
							}
						};
						state.handleChange(valueEvent, true);
						state.handleInput(valueEvent, true);
					}, 1);
				},
				controller.signal
			);
		}
	}, [_ref]);

	onUnMount(() => {
		if (state.abortController) {
			state.abortController.abort();
		}
	});
	// jscpd:ignore-end

	return (
		<label
			data-size={props.size}
			data-hide-label={getHideProp(props.showLabel)}
			data-hide-asterisk={getHideProp(props.showRequiredAsterisk)}
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
				value={props.value}
				required={getBoolean(props.required, 'required')}
				onInput={(event: ChangeEvent<HTMLInputElement>) =>
					state.handleInput(event)
				}
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
