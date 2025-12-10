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
import {
	DEFAULT_INVALID_MESSAGE,
	DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
	DEFAULT_MESSAGE_ID_SUFFIX,
	DEFAULT_VALID_MESSAGE,
	DEFAULT_VALID_MESSAGE_ID_SUFFIX
} from '../../shared/constants';
import { ChangeEvent, InteractionEvent } from '../../shared/model';
import {
	cls,
	delay,
	getBoolean,
	getHideProp,
	hasVoiceOver,
	stringPropVisible,
	uuid
} from '../../utils';
import {
	addCheckedResetEventListener,
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';
import DBInfotext from '../infotext/infotext.lite';
import { DBCheckboxProps, DBCheckboxState } from './model';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'required', 'checked', 'indeterminate'],
		signals: {
			writeable: ['disabled', 'checked']
		}
	}
});

useDefaultProps<DBCheckboxProps>({});

export default function DBCheckbox(props: DBCheckboxProps) {
	const _ref = useRef<HTMLInputElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBCheckboxState>({
		initialized: false,
		_id: undefined,
		_messageId: undefined,
		_validMessageId: undefined,
		_invalidMessageId: undefined,
		_invalidMessage: undefined,
		_descByIds: undefined,
		_voiceOverFallback: '',
		abortController: undefined,
		hasValidState: () => {
			return !!(props.validMessage ?? props.validation === 'valid');
		},
		handleValidation: () => {
			/* For a11y reasons we need to map the correct message with the checkbox */
			if (!_ref?.validity.valid || props.validation === 'invalid') {
				state._descByIds = state._invalidMessageId;
				state._invalidMessage =
					props.invalidMessage ||
					_ref?.validationMessage ||
					DEFAULT_INVALID_MESSAGE;
				if (hasVoiceOver()) {
					state._voiceOverFallback = state._invalidMessage;
					delay(() => (state._voiceOverFallback = ''), 1000);
				}
			} else if (
				state.hasValidState() &&
				_ref?.validity.valid &&
				props.required
			) {
				state._descByIds = state._validMessageId;
				if (hasVoiceOver()) {
					state._voiceOverFallback =
						props.validMessage ?? DEFAULT_VALID_MESSAGE;
					delay(() => (state._voiceOverFallback = ''), 1000);
				}
			} else if (stringPropVisible(props.message, props.showMessage)) {
				state._descByIds = state._messageId;
			} else {
				state._descByIds = undefined;
			}
		},
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
				angular: () =>
					handleFrameworkEventAngular(state, event, 'checked'),
				vue: () => handleFrameworkEventVue(() => {}, event, 'checked')
			});
			state.handleValidation();
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
		const mId = props.inputid ?? `checkbox-${uuid()}`;
		state._id = mId;
		state._messageId = mId + DEFAULT_MESSAGE_ID_SUFFIX;
		state._validMessageId = mId + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
		state._invalidMessageId = mId + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
		state._invalidMessage = props.invalidMessage || DEFAULT_INVALID_MESSAGE;
	});

	onUpdate(() => {
		state._invalidMessage =
			props.invalidMessage ||
			_ref?.validationMessage ||
			DEFAULT_INVALID_MESSAGE;
	}, [_ref, props.invalidMessage]);

	onUpdate(() => {
		if (state._id) {
			const messageId = state._id + DEFAULT_MESSAGE_ID_SUFFIX;
			state._messageId = messageId;
			state._validMessageId = state._id + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
			state._invalidMessageId =
				state._id + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;

			if (stringPropVisible(props.message, props.showMessage)) {
				state._descByIds = messageId;
			}
			state.handleValidation();
		}
	}, [state._id]);

	onUpdate(() => {
		if (_ref) {
			useTarget({
				angular: () => {
					if (
						state.initialized &&
						props.indeterminate !== undefined
					) {
						// When indeterminate is set, the value of the checked prop only impacts the form submitted values.
						// It has no accessibility or UX implications. (https://mui.com/material-ui/react-checkbox/)
						_ref.indeterminate = !!getBoolean(props.indeterminate);
					}
				},
				default: () => {
					if (props.indeterminate !== undefined) {
						// When indeterminate is set, the value of the checked prop only impacts the form submitted values.
						// It has no accessibility or UX implications. (https://mui.com/material-ui/react-checkbox/)
						_ref.indeterminate = !!getBoolean(props.indeterminate);
					}
				}
			});
		}
	}, [state.initialized, _ref, props.indeterminate]);

	onUpdate(() => {
		if (state.initialized && _ref) {
			// in angular this must be set via native element
			if (props.checked != undefined) {
				_ref.checked = !!getBoolean(props.checked);
			}

			state.initialized = false;
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

			addCheckedResetEventListener(
				_ref,
				{ checked: props.checked, defaultChecked },
				(event) => {
					state.handleChange(event, true);
				},
				controller.signal
			);
		}
	}, [_ref]);

	onUnMount(() => {
		state.abortController?.abort();
	});
	// jscpd:ignore-end

	return (
		<div
			class={cls('db-checkbox', props.className)}
			data-size={props.size}
			data-hide-asterisk={getHideProp(props.showRequiredAsterisk)}
			data-hide-label={getHideProp(props.showLabel)}>
			<label htmlFor={state._id}>
				<input
					aria-invalid={props.validation === 'invalid'}
					data-custom-validity={props.validation}
					ref={_ref}
					type="checkbox"
					id={state._id}
					name={props.name}
					checked={getBoolean(props.checked, 'checked')}
					disabled={getBoolean(props.disabled, 'disabled')}
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
					aria-describedby={props.ariaDescribedBy ?? state._descByIds}
				/>
				<Show when={props.label} else={props.children}>
					{props.label}
				</Show>
			</label>

			<Show when={stringPropVisible(props.message, props.showMessage)}>
				<DBInfotext
					size="small"
					icon={props.messageIcon}
					id={state._messageId}>
					{props.message}
				</DBInfotext>
			</Show>
			<Show when={state.hasValidState()}>
				<DBInfotext
					id={state._validMessageId}
					size="small"
					semantic="successful">
					{props.validMessage || DEFAULT_VALID_MESSAGE}
				</DBInfotext>
			</Show>

			<DBInfotext
				id={state._invalidMessageId}
				size="small"
				semantic="critical">
				{state._invalidMessage}
			</DBInfotext>

			{/* * https://www.davidmacd.com/blog/test-aria-describedby-errormessage-aria-live.html
			 * Currently VoiceOver isn't supporting changes from aria-describedby.
			 * This is an internal Fallback */}
			<span data-visually-hidden="true" role="status">
				{state._voiceOverFallback}
			</span>
		</div>
	);
}
