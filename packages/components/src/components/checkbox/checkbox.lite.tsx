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
		nativeAttributes: [
			'disabled',
			'required',
			'checked',
			'indeterminate',
			'value'
		],
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
		mInitialized: false,
		mId: undefined,
		mMessageId: undefined,
		mValidMessageId: undefined,
		mInvalidMessageId: undefined,
		mInvalidMessage: undefined,
		mDescByIds: undefined,
		mVoiceOverFallback: '',
		mAbortController: undefined,
		resetIds: () => {
			const _mId = props.id ?? props._id ?? `checkbox-${uuid()}`;
			state.mId = _mId;
			state.mMessageId = _mId + DEFAULT_MESSAGE_ID_SUFFIX;
			state.mValidMessageId = _mId + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
			state.mInvalidMessageId = _mId + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
			state.mInvalidMessage =
				props.invalidMessage || DEFAULT_INVALID_MESSAGE;
		},
		hasValidState: () => {
			return !!(props.validMessage ?? props.validation === 'valid');
		},
		handleValidation: () => {
			/* For a11y reasons we need to map the correct message with the checkbox */
			if (!_ref?.validity.valid || props.validation === 'invalid') {
				state.mDescByIds = state.mInvalidMessageId;
				state.mInvalidMessage =
					props.invalidMessage ||
					_ref?.validationMessage ||
					DEFAULT_INVALID_MESSAGE;
				if (hasVoiceOver()) {
					state.mVoiceOverFallback = state.mInvalidMessage;
					delay(() => (state.mVoiceOverFallback = ''), 1000);
				}
			} else if (
				state.hasValidState() &&
				_ref?.validity.valid &&
				props.required
			) {
				state.mDescByIds = state.mValidMessageId;
				if (hasVoiceOver()) {
					state.mVoiceOverFallback =
						props.validMessage ?? DEFAULT_VALID_MESSAGE;
					delay(() => (state.mVoiceOverFallback = ''), 1000);
				}
			} else if (stringPropVisible(props.message, props.showMessage)) {
				state.mDescByIds = state.mMessageId;
			} else {
				state.mDescByIds = undefined;
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
		state.mInitialized = true;
		state.resetIds();
	});

	onUpdate(() => {
		if (props.id ?? props._id) {
			state.resetIds();
		}
	}, [props.id, props._id]);

	onUpdate(() => {
		state.mInvalidMessage =
			props.invalidMessage ||
			_ref?.validationMessage ||
			DEFAULT_INVALID_MESSAGE;
	}, [_ref, props.invalidMessage]);

	onUpdate(() => {
		if (state.mId) {
			const messageId = state.mId + DEFAULT_MESSAGE_ID_SUFFIX;
			state.mMessageId = messageId;
			state.mValidMessageId = state.mId + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
			state.mInvalidMessageId =
				state.mId + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;

			if (stringPropVisible(props.message, props.showMessage)) {
				state.mDescByIds = messageId;
			}
			state.handleValidation();
		}
	}, [state.mId]);

	onUpdate(() => {
		if (_ref) {
			useTarget({
				angular: () => {
					if (
						state.mInitialized &&
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
	}, [state.mInitialized, _ref, props.indeterminate]);

	onUpdate(() => {
		if (state.mInitialized && _ref) {
			// in angular this must be set via native element
			if (props.checked != undefined) {
				_ref.checked = !!getBoolean(props.checked);
			}

			state.mInitialized = false;
		}
	}, [state.mInitialized, _ref, props.checked]);

	onUpdate(() => {
		if (_ref) {
			const defaultChecked = useTarget({
				react: (props as any).defaultChecked,
				default: undefined
			});

			let controller = state.mAbortController;
			if (!controller) {
				controller = new AbortController();
				state.mAbortController = controller;
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
		state.mAbortController?.abort();
	});
	// jscpd:ignore-end

	return (
		<div
			class={cls('db-checkbox', props.className)}
			data-size={props.size}
			data-hide-asterisk={getHideProp(props.showRequiredAsterisk)}
			data-hide-label={getHideProp(props.showLabel)}>
			<label htmlFor={state.mId}>
				<input
					aria-invalid={props.validation === 'invalid'}
					data-custom-validity={props.validation}
					ref={_ref}
					type="checkbox"
					id={state.mId}
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
					aria-describedby={props.ariaDescribedBy ?? state.mDescByIds}
				/>
				<Show when={props.label} else={props.children}>
					{props.label}
				</Show>
			</label>

			<Show when={stringPropVisible(props.message, props.showMessage)}>
				<DBInfotext
					size="small"
					icon={props.messageIcon}
					id={state.mMessageId}>
					{props.message}
				</DBInfotext>
			</Show>
			<Show when={state.hasValidState()}>
				<DBInfotext
					id={state.mValidMessageId}
					size="small"
					semantic="successful">
					{props.validMessage || DEFAULT_VALID_MESSAGE}
				</DBInfotext>
			</Show>

			<DBInfotext
				id={state.mInvalidMessageId}
				size="small"
				semantic="critical">
				{state.mInvalidMessage}
			</DBInfotext>

			{/* * https://www.davidmacd.com/blog/test-aria-describedby-errormessage-aria-live.html
			 * Currently VoiceOver isn't supporting changes from aria-describedby.
			 * This is an internal Fallback */}
			<span data-visually-hidden="true" role="status">
				{state.mVoiceOverFallback}
			</span>
		</div>
	);
}
