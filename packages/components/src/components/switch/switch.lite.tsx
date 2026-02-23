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
import {
	ChangeEvent,
	GeneralKeyboardEvent,
	InteractionEvent
} from '../../shared/model';
import {
	cls,
	delay,
	getBoolean,
	getBooleanAsString,
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
import { DBSwitchProps, DBSwitchState } from './model';

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
useDefaultProps<DBSwitchProps>({});

export default function DBSwitch(props: DBSwitchProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLInputElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBSwitchState>({
		mId: undefined,
		mMessageId: undefined as string | undefined,
		mValidMessageId: undefined as string | undefined,
		mInvalidMessageId: undefined as string | undefined,
		mInvalidMessage: undefined as string | undefined,
		mDescByIds: undefined,
		mVoiceOverFallback: '' as string,
		mAbortController: undefined,
		hasValidState: () => {
			return !!(props.validMessage ?? props.validation === 'valid');
		},
		handleValidation: () => {
			if (!_ref?.validity?.valid || props.validation === 'invalid') {
				state.mDescByIds = state.mInvalidMessageId!;
				state.mInvalidMessage =
					props.invalidMessage ||
					_ref?.validationMessage ||
					DEFAULT_INVALID_MESSAGE;
				if (hasVoiceOver()) {
					state.mVoiceOverFallback =
						state.mInvalidMessage || DEFAULT_INVALID_MESSAGE;
					delay(() => {
						state.mVoiceOverFallback = '';
					}, 1000);
				}
				return;
			}
			if (
				state.hasValidState() &&
				_ref?.validity?.valid &&
				props.required
			) {
				state.mDescByIds = state.mValidMessageId!;
				if (hasVoiceOver()) {
					state.mVoiceOverFallback =
						props.validMessage ?? DEFAULT_VALID_MESSAGE;
					delay(() => {
						state.mVoiceOverFallback = '';
					}, 1000);
				}
				return;
			}

			if (stringPropVisible(props.message, props.showMessage)) {
				state.mDescByIds = state.mMessageId!;
				return;
			}

			state.mDescByIds = undefined;
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
			state.handleValidation();

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
		},
		handleKeyDown: (event: GeneralKeyboardEvent<HTMLInputElement>) => {
			// Support ENTER key for toggling the switch (a11y requirement)
			if (event.key === 'Enter') {
				event.preventDefault();
				// Toggle the switch by clicking it programmatically
				if (!props.disabled) {
					(_ref as HTMLInputElement)?.click();
				}
			}
		},
		resetIds: () => {
			const _mId = props.id ?? props._id ?? `switch-${uuid()}`;
			state.mId = _mId;
			state.mMessageId = `${_mId}${DEFAULT_MESSAGE_ID_SUFFIX}`;
			state.mValidMessageId = `${_mId}${DEFAULT_VALID_MESSAGE_ID_SUFFIX}`;
			state.mInvalidMessageId = `${_mId}${DEFAULT_INVALID_MESSAGE_ID_SUFFIX}`;
		}
	});

	onMount(() => {
		state.resetIds();
		state.handleValidation();
	});

	onUpdate(() => {
		if (props.id ?? props._id) {
			state.resetIds();
		}
	}, [props.id, props._id]);

	onUpdate(() => {
		state.handleValidation();
	}, [
		props.validation,
		props.required,
		props.message,
		props.showMessage,
		props.validMessage,
		props.invalidMessage,
		props.checked
	]);

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
			data-visual-aid={getBooleanAsString(props.visualAid)}
			data-size={props.size}
			data-hide-label={getHideProp(props.showLabel)}
			data-variant={props.variant}
			data-hide-asterisk={getHideProp(props.showRequiredAsterisk)}
			data-custom-validity={props.validation}
			class={cls('db-switch', props.className)}>
			<label htmlFor={state.mId}>
				<input
					id={state.mId}
					type="checkbox"
					role="switch"
					ref={_ref}
					checked={getBoolean(props.checked, 'checked')}
					value={props.value}
					disabled={getBoolean(props.disabled, 'disabled')}
					aria-invalid={
						props.validation === 'invalid' ? 'true' : undefined
					}
					aria-describedby={state.mDescByIds}
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
					onKeyDown={(
						event: GeneralKeyboardEvent<HTMLInputElement>
					) => state.handleKeyDown(event)}
				/>
				<Show when={props.label} else={props.children}>
					{props.label}
				</Show>
			</label>

			<Show when={stringPropVisible(props.message, props.showMessage)}>
				<DBInfotext
					id={state.mMessageId}
					size="small"
					icon={props.messageIcon}
					semantic="adaptive">
					{props.message}
				</DBInfotext>
			</Show>
			<Show when={state.hasValidState()}>
				<DBInfotext
					id={state.mValidMessageId}
					size="small"
					semantic="successful">
					{props.validMessage ?? DEFAULT_VALID_MESSAGE}
				</DBInfotext>
			</Show>
			<DBInfotext
				id={state.mInvalidMessageId}
				size="small"
				semantic="critical">
				{state.mInvalidMessage ??
					props.invalidMessage ??
					DEFAULT_INVALID_MESSAGE}
			</DBInfotext>
			<span data-visually-hidden="true" role="status">
				{state.mVoiceOverFallback}
			</span>
		</div>
	);
}
