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
		_messageId: undefined as string | undefined,
		_validMessageId: undefined as string | undefined,
		_invalidMessageId: undefined as string | undefined,
		_invalidMessage: undefined as string | undefined,
		_descByIds: undefined,
		_voiceOverFallback: '' as string,
		abortController: undefined,
		hasValidState: () => {
			return !!(props.validMessage ?? props.validation === 'valid');
		},
		handleValidation: () => {
			if (!_ref?.validity?.valid || props.validation === 'invalid') {
				state._descByIds = state._invalidMessageId!;
				state._invalidMessage =
					props.invalidMessage ||
					_ref?.validationMessage ||
					DEFAULT_INVALID_MESSAGE;
				if (hasVoiceOver()) {
					state._voiceOverFallback =
						state._invalidMessage || DEFAULT_INVALID_MESSAGE;
					delay(() => {
						state._voiceOverFallback = '';
					}, 1000);
				}
				return;
			}
			if (
				state.hasValidState() &&
				_ref?.validity?.valid &&
				props.required
			) {
				state._descByIds = state._validMessageId!;
				if (hasVoiceOver()) {
					state._voiceOverFallback =
						props.validMessage ?? DEFAULT_VALID_MESSAGE;
					delay(() => {
						state._voiceOverFallback = '';
					}, 1000);
				}
				return;
			}

			if (stringPropVisible(props.message, props.showMessage)) {
				state._descByIds = state._messageId!;
				return;
			}

			state._descByIds = undefined;
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
		}
	});

	onMount(() => {
		state._id = props.id ?? `switch-${uuid()}`;
		state._messageId = `${state._id}${DEFAULT_MESSAGE_ID_SUFFIX}`;
		state._validMessageId = `${state._id}${DEFAULT_VALID_MESSAGE_ID_SUFFIX}`;
		state._invalidMessageId = `${state._id}${DEFAULT_INVALID_MESSAGE_ID_SUFFIX}`;
		state.handleValidation();
	});

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
			data-visual-aid={getBooleanAsString(props.visualAid)}
			data-size={props.size}
			data-hide-label={getHideProp(props.showLabel)}
			data-variant={props.variant}
			data-hide-asterisk={getHideProp(props.showRequiredAsterisk)}
			data-custom-validity={props.validation}
			class={cls('db-switch', props.className)}>
			<label htmlFor={state._id}>
				<input
					id={state._id}
					type="checkbox"
					role="switch"
					ref={_ref}
					checked={getBoolean(props.checked, 'checked')}
					value={props.value}
					disabled={getBoolean(props.disabled, 'disabled')}
					aria-invalid={
						props.validation === 'invalid' ? 'true' : undefined
					}
					aria-describedby={state._descByIds}
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
					id={state._messageId}
					size="small"
					icon={props.messageIcon}
					semantic="adaptive">
					{props.message}
				</DBInfotext>
			</Show>
			<Show when={state.hasValidState()}>
				<DBInfotext
					id={state._validMessageId}
					size="small"
					semantic="successful">
					{props.validMessage ?? DEFAULT_VALID_MESSAGE}
				</DBInfotext>
			</Show>
			<Show
				when={!_ref?.validity?.valid || props.validation === 'invalid'}>
				<DBInfotext
					id={state._invalidMessageId}
					size="small"
					semantic="critical">
					{state._invalidMessage ??
						props.invalidMessage ??
						DEFAULT_INVALID_MESSAGE}
				</DBInfotext>
			</Show>
			<span data-visually-hidden="true" role="status">
				{state._voiceOverFallback}
			</span>
		</div>
	);
}
