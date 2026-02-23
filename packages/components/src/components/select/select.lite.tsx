import {
	For,
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
	DEFAULT_LABEL,
	DEFAULT_MESSAGE_ID_SUFFIX,
	DEFAULT_PLACEHOLDER_ID_SUFFIX,
	DEFAULT_VALID_MESSAGE,
	DEFAULT_VALID_MESSAGE_ID_SUFFIX
} from '../../shared/constants';
import {
	ChangeEvent,
	ClickEvent,
	InputEvent,
	InteractionEvent
} from '../../shared/model';
import {
	cls,
	delay,
	getBoolean,
	getBooleanAsString,
	getHideProp,
	getOptionKey,
	hasVoiceOver,
	stringPropVisible,
	uuid
} from '../../utils';
import {
	addValueResetEventListener,
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';
import DBInfotext from '../infotext/infotext.lite';
import { DBSelectOptionType, DBSelectProps, DBSelectState } from './model';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'required', 'value'],
		signals: {
			writeable: ['disabled', 'value']
		}
	}
});
useDefaultProps<DBSelectProps>({});

export default function DBSelect(props: DBSelectProps) {
	const _ref = useRef<HTMLSelectElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBSelectState>({
		mId: undefined,
		mMessageId: undefined,
		mValidMessageId: undefined,
		mInvalidMessageId: undefined,
		mInvalidMessage: undefined,
		mPlaceholderId: '',
		mDescByIds: undefined,
		mValue: '',
		mInitialized: false,
		mVoiceOverFallback: '',
		mAbortController: undefined,
		hasValidState: () => {
			return !!(props.validMessage ?? props.validation === 'valid');
		},
		handleValidation: () => {
			/* For a11y reasons we need to map the correct message with the select */
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
			} else if (props.placeholder) {
				state.mDescByIds = state.mPlaceholderId;
			} else {
				state.mDescByIds = undefined;
			}
		},
		handleClick: (event: ClickEvent<HTMLSelectElement> | any) => {
			if (props.onClick) {
				props.onClick(event);
			}
		},
		handleInput: (
			event: InputEvent<HTMLSelectElement> | any,
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
			state.handleValidation();
		},
		handleChange: (
			event: ChangeEvent<HTMLSelectElement> | any,
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
			state.handleValidation();
		},
		handleBlur: (event: InteractionEvent<HTMLSelectElement> | any) => {
			if (props.onBlur) {
				props.onBlur(event);
			}
		},
		handleFocus: (event: InteractionEvent<HTMLSelectElement> | any) => {
			if (props.onFocus) {
				props.onFocus(event);
			}
		},
		getOptionLabel: (option: DBSelectOptionType) => {
			return option.label ?? option.value?.toString();
		},
		shouldShowEmptyOption: () => {
			const hasPlaceholderOrFloating =
				props.variant === 'floating' || !!props.placeholder;
			if (!hasPlaceholderOrFloating) {
				return false;
			}
			if (props.showEmptyOption !== undefined) {
				return props.showEmptyOption;
			}
			// Default: show empty option for non-required selects
			return !props.required;
		},
		resetIds: () => {
			const _mId = props.id ?? props._id ?? `select-${uuid()}`;
			state.mId = _mId;
			state.mMessageId = _mId + DEFAULT_MESSAGE_ID_SUFFIX;
			state.mValidMessageId = _mId + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
			state.mInvalidMessageId = _mId + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
			state.mPlaceholderId = _mId + DEFAULT_PLACEHOLDER_ID_SUFFIX;
			state.mInvalidMessage =
				props.invalidMessage || DEFAULT_INVALID_MESSAGE;
		}
	});

	onMount(() => {
		state.mInitialized = true;
		state.resetIds();
		useTarget({
			angular: () => {
				// @ts-ignore
				this.writeValue?.(this.value?.() ?? '');
			}
		});
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
		if (state.mId && state.mInitialized) {
			const messageId = state.mId + DEFAULT_MESSAGE_ID_SUFFIX;
			const placeholderId = state.mId + DEFAULT_PLACEHOLDER_ID_SUFFIX;
			state.mMessageId = messageId;
			state.mValidMessageId = state.mId + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
			state.mInvalidMessageId =
				state.mId + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
			state.mPlaceholderId = placeholderId;

			if (stringPropVisible(props.message, props.showMessage)) {
				state.mDescByIds = messageId;
			} else if (props.placeholder) {
				state.mDescByIds = placeholderId;
			} else {
				state.mDescByIds = undefined;
			}

			state.handleValidation();
			state.mInitialized = false;
		}
	}, [state.mId, state.mInitialized]);

	onUpdate(() => {
		state.mValue = props.value;
	}, [props.value]);

	onUpdate(() => {
		// If angular uses ngModel value and _value are null
		// then the value will be set afterward and the _ref will be refreshed
		const addResetListener = useTarget({
			angular: !(props.value === null && state.mValue === null),
			default: true
		});

		if (_ref && addResetListener) {
			const defaultValue = useTarget({
				react: (props as any).defaultValue,
				default: undefined
			});

			let controller = state.mAbortController;
			if (!controller) {
				controller = new AbortController();
				state.mAbortController = controller;
			}

			addValueResetEventListener(
				_ref,
				{ value: props.value, defaultValue },
				(event) => {
					state.handleChange(event, true);
					state.handleInput(event, true);
				},
				controller.signal
			);
		}
	}, [_ref]);

	onUnMount(() => {
		state.mAbortController?.abort();
	});

	return (
		<div
			class={cls('db-select', props.className)}
			data-variant={props.variant}
			data-hide-label={getHideProp(props.showLabel)}
			data-hide-asterisk={getHideProp(props.showRequiredAsterisk)}
			data-icon={props.icon}
			data-show-icon={getBooleanAsString(props.showIcon)}>
			<label htmlFor={state.mId}>{props.label ?? DEFAULT_LABEL}</label>
			<select
				aria-invalid={props.validation === 'invalid'}
				data-custom-validity={props.validation}
				ref={_ref}
				required={getBoolean(props.required, 'required')}
				disabled={getBoolean(props.disabled, 'disabled')}
				id={state.mId}
				name={props.name}
				size={props.size}
				value={props.value ?? state.mValue}
				autocomplete={props.autocomplete}
				multiple={props.multiple}
				onInput={(event: ChangeEvent<HTMLSelectElement>) =>
					state.handleInput(event)
				}
				onClick={(event: ClickEvent<HTMLSelectElement>) =>
					state.handleClick(event)
				}
				onChange={(event: ChangeEvent<HTMLSelectElement>) =>
					state.handleChange(event)
				}
				onBlur={(event: InteractionEvent<HTMLSelectElement>) =>
					state.handleBlur(event)
				}
				onFocus={(event: InteractionEvent<HTMLSelectElement>) =>
					state.handleFocus(event)
				}
				aria-describedby={props.ariaDescribedBy ?? state.mDescByIds}>
				{/* Empty option for floating label and placeholder */}
				<Show
					when={props.variant === 'floating' || !!props.placeholder}>
					<option
						class="placeholder"
						value=""
						data-show-empty-option={getBooleanAsString(
							state.shouldShowEmptyOption()
						)}></option>
				</Show>
				<Show when={props.options?.length} else={props.children}>
					<For each={props.options}>
						{(option: DBSelectOptionType) => (
							<>
								<Show
									when={option.options}
									else={
										<option
											key={useTarget({
												vue: undefined,
												stencil: undefined,
												default: getOptionKey(
													option,
													'select-option-'
												)
											})}
											value={option.value}
											disabled={option.disabled}
											selected={option.selected}>
											{state.getOptionLabel(option)}
										</option>
									}>
									<optgroup
										label={state.getOptionLabel(option)}
										key={useTarget({
											vue: undefined,
											stencil: undefined,
											default: getOptionKey(
												option,
												'select-optgroup-'
											)
										})}>
										<For each={option.options}>
											{(
												optgroupOption: DBSelectOptionType
											) => (
												<option
													key={useTarget({
														vue: undefined,
														stencil: undefined,
														default: getOptionKey(
															optgroupOption,
															'select-optgroup-option-'
														)
													})}
													value={optgroupOption.value}
													selected={
														optgroupOption.selected
													}
													disabled={
														optgroupOption.disabled
													}>
													{state.getOptionLabel(
														optgroupOption
													)}
												</option>
											)}
										</For>
									</optgroup>
								</Show>
							</>
						)}
					</For>
				</Show>
			</select>
			<Show when={props.placeholder}>
				<span class="db-select-placeholder" id={state.mPlaceholderId}>
					{props.placeholder}
				</span>
			</Show>
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
	// jscpd:ignore-end
}
