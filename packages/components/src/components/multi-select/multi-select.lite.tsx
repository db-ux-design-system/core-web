import {
	For,
	Fragment,
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
	DBMultiSelectProps,
	DBMultiSelectState,
	MultiSelectOptionType
} from './model';
import {
	cls,
	delay,
	getBooleanAsString,
	getHideProp,
	getSearchInput,
	handleDataOutside,
	hasVoiceOver,
	stringPropVisible,
	uuid
} from '../../utils';
import {
	DEFAULT_CLOSE_BUTTON,
	DEFAULT_INVALID_MESSAGE,
	DEFAULT_INVALID_MESSAGE_ID_SUFFIX,
	DEFAULT_LABEL,
	DEFAULT_LABEL_ID_SUFFIX,
	DEFAULT_MESSAGE,
	DEFAULT_MESSAGE_ID_SUFFIX,
	DEFAULT_PLACEHOLDER_ID_SUFFIX,
	DEFAULT_REMOVE,
	DEFAULT_SELECT_ID_SUFFIX,
	DEFAULT_SELECTED,
	DEFAULT_VALID_MESSAGE,
	DEFAULT_VALID_MESSAGE_ID_SUFFIX
} from '../../shared/constants';
import { ChangeEvent, ClickEvent } from '../../shared/model';
import DBMultiSelectList from '../multi-select-list/multi-select-list.lite';
import DBMultiSelectListItem from '../multi-select-list-item/multi-select-list-item.lite';
import DBMultiSelectDropdown from '../multi-select-dropdown/multi-select-dropdown.lite';
import DBInfotext from '../infotext/infotext.lite';
import DBTag from '../tag/tag.lite';
import DBButton from '../button/button.lite';
import DBTooltip from '../tooltip/tooltip.lite';
import {
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';
import DBInput from '../input/input.lite';

useMetadata({
	angular: {
		nativeAttributes: ['disabled']
	}
});

useDefaultProps<DBMultiSelectProps>({
	clearSelectionLabel: 'Clear selection',
	showClearSelection: true
});

// TODO: Test composition instead of config
// TODO: Test with screenreader

export default function DBMultiSelect(props: DBMultiSelectProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | null>(null);
	const detailsRef = useRef<HTMLDetailsElement | null>(null);
	const selectRef = useRef<HTMLSelectElement | null>(null);
	const selectAllRef = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state: DBMultiSelectState = useStore<DBMultiSelectState>({
		_name: undefined,
		_id: undefined,
		_messageId: undefined,
		_validMessageId: undefined,
		_invalidMessageId: undefined,
		_selectId: undefined,
		_labelId: undefined,
		_placeholderId: undefined,
		_infoTextId: undefined,
		_validity: 'no-validation',
		// Workaround for Vue output: TS for Vue would think that it could be a function, and by this we clarify that it's a string
		_descByIds: '',
		_selectedLabels: '',
		_selectedLabelsId: undefined,
		_voiceOverFallback: '',
		_selectedOptions: [],
		selectAllEnabled: false,
		searchEnabled: false,
		amountOptions: 0,
		_values: [],
		_options: [],
		_hasNoOptions: false,
		_internalChangeTimestamp: -1,
		_externalChangeTimestamp: -1,
		getNativeSelectValue: () => {
			if (state._values?.length) {
				return state._values.at(0) ?? '';
			}

			return '';
		},
		setDescById: (descId?: string) => {
			const descByIds: string[] = [];
			if (descId) {
				descByIds.push(descId);
			}

			if (state._selectedLabelsId) {
				descByIds.push(state._selectedLabelsId);
			}

			state._descByIds = descByIds.join(' ');
		},
		getSelectAllLabel: () => {
			if (!selectAllRef) return props.selectAllLabel ?? DEFAULT_LABEL;
			if (selectAllRef.indeterminate || !state.selectAllChecked) {
				return props.selectAllLabel ?? DEFAULT_LABEL;
			} else {
				return props.deSelectAllLabel ?? DEFAULT_LABEL;
			}
		},
		getOptionLabel: (option: MultiSelectOptionType) => {
			return option.label ?? option.value?.toString() ?? '';
		},
		getOptionChecked: (value?: string) => {
			if (value && state._values && state._values.includes) {
				return state._values?.includes(value);
			}

			return false;
		},
		getOptionKey: (option: MultiSelectOptionType) => {
			return (option.id ?? option.value ?? uuid()).toString();
		},
		getTagRemoveLabel: (index: number) => {
			return props.removeTagsTexts && props.removeTagsTexts.length > index
				? props.removeTagsTexts.at(index)!
				: `${DEFAULT_REMOVE} ${state._selectedOptions ? state.getOptionLabel(state._selectedOptions[index]) : ''}`;
		},
		handleTagRemove: (option: MultiSelectOptionType, event: any) => {
			event.stopPropagation();
			state.handleSelect(option.value);
			state.handleSummaryFocus();
		},
		handleAutoPlacement: () => {
			if (detailsRef) {
				const dropdown = detailsRef.querySelector('article');
				if (dropdown) {
					delay(() => {
						handleDataOutside(dropdown);
					}, 100);
				}
			}
		},
		handleArrowDownUp: (event: any) => {
			if (detailsRef?.open) {
				if (document) {
					const activeElement = document.activeElement;
					if (activeElement) {
						// 1. we check if we are currently focusing a checkbox in the multiselect dropdown
						const isCheckbox =
							activeElement.getAttribute('type') === 'checkbox' ||
							activeElement.getAttribute('type') === 'radio';

						if (isCheckbox) {
							const listElement = activeElement?.closest('li');
							if (event.key === 'ArrowDown') {
								if (listElement?.nextElementSibling) {
									listElement?.nextElementSibling
										.querySelector('input')
										?.focus();
								} else {
									// We are on the last checkbox we move to the top checkbox
									state.handleFocusFirstDropdownCheckbox(
										activeElement
									);
								}
							} else {
								if (listElement?.previousElementSibling) {
									listElement?.previousElementSibling
										.querySelector('input')
										?.focus();
								} else if (
									detailsRef.querySelector(
										`input[type="checkbox"]`
									) !== activeElement
								) {
									// We are on the top list checkbox but there is a select all checkbox as well
									state.handleFocusFirstDropdownCheckbox(
										activeElement
									);
								} else {
									// We are on the top checkbox, we need to move to the search
									// or to the last checkbox
									const search = getSearchInput(detailsRef);
									if (search) {
										delay(() => {
											search.focus();
										}, 100);
									} else {
										const checkboxList: HTMLInputElement[] =
											Array.from(
												detailsRef?.querySelectorAll(
													`input[type="checkbox"],input[type="radio"]`
												)
											);
										if (checkboxList.length) {
											checkboxList.at(-1)?.focus();
										}
									}
								}
							}
						} else {
							// 2. If we are on the search, and press up we go back to summary and close
							if (
								activeElement.getAttribute('type') ===
									'search' &&
								event.key === 'ArrowUp'
							) {
								state.handleClose('close');
								state.handleSummaryFocus();
							} else {
								// 3. Otherwise, we need to move to the first checkbox
								state.handleFocusFirstDropdownCheckbox(
									activeElement
								);
							}
						}
					}
				}

				event.stopPropagation();
				event.preventDefault();
			} else if (event.key === 'ArrowDown') {
				// Open dropdown with arrows see https://www.w3.org/WAI/ARIA/apg/patterns/combobox/#keyboardinteraction
				state.handleAutoPlacement();
				if (detailsRef) {
					detailsRef.open = true;
				}
				state.handleOpenByKeyboardFocus();
				event.stopPropagation();
				event.preventDefault();
			}
		},
		handleKeyboardPress: (event: any) => {
			if (event.key === 'Escape' && detailsRef && detailsRef?.open) {
				state.handleClose('close');
				state.handleSummaryFocus();
			} else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
				state.handleArrowDownUp(event);
			}
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleClose: (event: any) => {
			if (detailsRef) {
				if (event === 'close') {
					detailsRef.open = false;
					state.handleSummaryFocus();
				} else if (detailsRef.open && event?.relatedTarget) {
					const relatedTarget = event.relatedTarget as HTMLElement;
					if (!detailsRef.contains(relatedTarget)) {
						detailsRef.open = false;
					}
				}
			}
		},
		handleSelect: (value?: string) => {
			if (value) {
				if (props.multiple) {
					if (state._values?.includes(value)) {
						state._values = state._values?.filter(
							(v: string) => v !== value
						);
					} else {
						state._values = [...(state._values || []), value];
					}
				} else {
					state._values = [value];
					state.handleClose('close');
				}
				state._internalChangeTimestamp = new Date().getTime();
			}
		},
		handleSelectAll: () => {
			if (state._values?.length === state.amountOptions) {
				state._values = [];
			} else {
				state._values = props.options
					? props.options
							.filter((option) => !option.isGroupTitle)
							.map((option) => option.value ?? '')
					: [];
			}
			state._internalChangeTimestamp = new Date().getTime();
		},
		handleFocusFirstDropdownCheckbox: (activeElement?: Element) => {
			if (detailsRef) {
				const checkboxes = Array.from(
					detailsRef.querySelectorAll(
						`input[type="checkbox"],input[type="radio"]`
					)
				);
				if (checkboxes.length) {
					const first = checkboxes.at(0);
					const checkbox =
						first === activeElement && checkboxes.length > 1
							? checkboxes.at(1)
							: first;

					if (checkbox) {
						delay(() => {
							// Takes some time until element can be focused
							(checkbox as HTMLInputElement).focus();
						}, 100);
					}
				}
			}
		},
		handleOpenByKeyboardFocus: (onlySearch?: boolean) => {
			if (detailsRef) {
				// Focus search if possible
				const search = getSearchInput(detailsRef);
				if (search) {
					delay(() => {
						// Takes some time until element can be focused
						search.focus();
					}, 100);
				} else if (!onlySearch) {
					// Focus first checkbox otherwise
					state.handleFocusFirstDropdownCheckbox();
				}
			}
		},
		handleSearch: (event: ChangeEvent<HTMLInputElement>) => {
			const filterText = (event.target as HTMLInputElement).value;

			state._options =
				!props.options || !filterText || filterText.length === 0
					? props.options
					: props.options.filter(
							(option) =>
								!option.isGroupTitle &&
								state
									.getOptionLabel(option)
									.toLowerCase()
									.includes(filterText.toLowerCase())
						);
		},
		handleClearAll: () => {
			state._values = [];
			state.handleSummaryFocus();
		},
		handleSummaryFocus: () => {
			detailsRef?.querySelector('summary')?.focus();
		},
		selectAllChecked: false,
		selectAllIndeterminate: false
	});
	// jscpd:ignore-end

	onMount(() => {
		const mId = props.id ?? `multi-select-${uuid()}`;
		state._id = mId;
		state._messageId = mId + DEFAULT_MESSAGE_ID_SUFFIX;
		state._validMessageId = mId + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
		state._invalidMessageId = mId + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
		state._selectId = mId + DEFAULT_SELECT_ID_SUFFIX;
		state._labelId = mId + DEFAULT_LABEL_ID_SUFFIX;
		state._placeholderId = mId + DEFAULT_PLACEHOLDER_ID_SUFFIX;
		state._selectedLabelsId = mId + '-selected-labels';
		state._infoTextId = mId + '-info';
	});

	onUpdate(() => {
		state._name = props.name ?? state._id;
	}, [props.name, state._id]);

	onUpdate(() => {
		if (state._id) {
			const messageId = state._id + DEFAULT_MESSAGE_ID_SUFFIX;
			state._labelId = state._id + DEFAULT_LABEL_ID_SUFFIX;
			state._selectId = state._id + DEFAULT_SELECT_ID_SUFFIX;
			state._validMessageId = state._id + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
			state._invalidMessageId =
				state._id + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
			state._placeholderId = state._id + DEFAULT_PLACEHOLDER_ID_SUFFIX;

			if (stringPropVisible(props.message, props.showMessage)) {
				state.setDescById(messageId);
			} else {
				state.setDescById();
			}
		}
	}, [state._id]);

	onUpdate(() => {
		if (detailsRef) {
			const summary = detailsRef.querySelector('summary');
			if (summary) {
				summary.setAttribute(
					'aria-describedby',
					state._descByIds ?? ''
				);
			}
		}
	}, [detailsRef, state._descByIds]);

	onUpdate(() => {
		if (detailsRef) {
			const summary = detailsRef.querySelector('summary');
			if (summary) {
				summary.addEventListener('click', () => {
					state.handleAutoPlacement();
					state.handleOpenByKeyboardFocus(true);
				});
				summary.addEventListener('keydown', (event: KeyboardEvent) => {
					if (event.code === 'Space' && !detailsRef?.open) {
						state.handleOpenByKeyboardFocus();
					}
				});
			}
			detailsRef.addEventListener('focusout', (event) =>
				state.handleClose(event)
			);
		}
	}, [detailsRef]);

	onUpdate(() => {
		if (props.showNoResults !== undefined) {
			state._hasNoOptions = props.showNoResults;
		} else if (state._options) {
			state._hasNoOptions = state._options.length === 0;
		}
	}, [props.showNoResults, state._options]);

	onUpdate(() => {
		state.selectAllEnabled = Boolean(
			props.multiple && (props.showSelectAll || state.amountOptions > 5)
		);
	}, [props.showSelectAll, state.amountOptions, props.multiple]);

	onUpdate(() => {
		state.searchEnabled = props.showSearch || state.amountOptions > 9;
	}, [props.showSearch, state.amountOptions]);

	onUpdate(() => {
		if (
			props.onSelect &&
			(state._externalChangeTimestamp || state._internalChangeTimestamp)
		) {
			const onlyInternalChange =
				state._internalChangeTimestamp &&
				!state._externalChangeTimestamp;

			const bothChangeButInternalNew =
				state._internalChangeTimestamp &&
				state._externalChangeTimestamp &&
				state._internalChangeTimestamp > state._externalChangeTimestamp;

			if (onlyInternalChange || bothChangeButInternalNew) {
				props.onSelect(state._values ?? []);

				const fakeEvent = {
					target: { values: state._values }
				};
				useTarget({
					angular: () =>
						handleFrameworkEventAngular(this, fakeEvent, 'values'),
					vue: () =>
						handleFrameworkEventVue(() => {}, fakeEvent, 'values')
				});
			}
		}
	}, [
		state._externalChangeTimestamp,
		state._internalChangeTimestamp,
		props.onSelect
	]);

	onUpdate(() => {
		if (props.values && Array.isArray(props.values)) {
			state._values = props.values ?? [];
			state._externalChangeTimestamp = new Date().getTime();
		}
	}, [props.values]);

	onUpdate(() => {
		if (selectRef) {
			selectRef.value = state.getNativeSelectValue();
		}
		/* For a11y reasons we need to map the correct message with the select */
		if (!selectRef?.validity.valid || props.validation === 'invalid') {
			state._validity = 'invalid';
			state.setDescById(state._invalidMessageId);
			if (hasVoiceOver()) {
				state._voiceOverFallback =
					props.invalidMessage ??
					selectRef?.validationMessage ??
					DEFAULT_INVALID_MESSAGE;
				delay(() => (state._voiceOverFallback = ''), 1000);
			}
		} else if (
			props.validation === 'valid' ||
			(selectRef?.validity.valid && props.required)
		) {
			state._validity = 'valid';
			state.setDescById(state._validMessageId);
			if (hasVoiceOver()) {
				state._voiceOverFallback =
					props.validMessage ?? DEFAULT_VALID_MESSAGE;
				delay(() => (state._voiceOverFallback = ''), 1000);
			}
		} else if (props.message) {
			state._validity = 'no-validation';
			state.setDescById(state._messageId);
		} else {
			state._validity = 'no-validation';
			state.setDescById(state._placeholderId);
		}
	}, [state._values]);

	onUpdate(() => {
		state._validity = props.validation;
	}, [props.validation]);

	onUpdate(() => {
		if (state._values?.length === 0) {
			state.selectAllChecked = false;
			state.selectAllIndeterminate = false;
		} else if (state._values?.length === state.amountOptions) {
			state.selectAllIndeterminate = false;
			state.selectAllChecked = true;
		} else if (state._values) {
			state.selectAllIndeterminate = true;
		}
	}, [state._values, state.amountOptions]);

	onUpdate(() => {
		state._options = props.options;
		state.amountOptions =
			props.options?.filter((option) => !option.isGroupTitle).length ?? 0;
	}, [props.options]);

	onUpdate(() => {
		if (state._options?.length) {
			state._selectedOptions = state._options?.filter(
				(option: MultiSelectOptionType) => {
					if (!option.value || !state._values?.['includes']) {
						return false;
					}

					return (
						!option.isGroupTitle &&
						state._values?.includes(option.value)
					);
				}
			);
		}
	}, [state._options, state._values]);

	onUpdate(() => {
		if (state._selectedOptions?.length) {
			if (props.selectedType === 'amount') {
				state._selectedLabels = props.amountText
					? props.amountText
					: `${state._selectedOptions?.length} ${DEFAULT_SELECTED}`;
			} else {
				state._selectedLabels = state._selectedOptions
					?.map((option: MultiSelectOptionType) =>
						state.getOptionLabel(option)
					)
					.join(', ');
			}
		} else {
			state._selectedLabels = '';
		}
	}, [state._selectedOptions, props.selectedType, props.amountText]);

	onUpdate(() => {
		if (props.onAmountChange) {
			props.onAmountChange(state._selectedOptions?.length ?? 0);
		}
	}, [state._selectedOptions]);

	onUpdate(() => {
		if (selectAllRef) {
			selectAllRef.indeterminate = Boolean(state.selectAllIndeterminate);
		}
	}, [state.selectAllIndeterminate, selectAllRef]);

	return (
		<div
			id={state._id}
			ref={_ref}
			class={cls('db-multi-select', props.className)}
			aria-invalid={state._validity === 'invalid'}
			data-custom-validity={state._validity}
			data-width={props.width}
			data-variant={props.variant}
			data-required={props.required}
			data-placement={props.placement}
			data-selected-type={props.multiple ? props.selectedType : 'text'}
			data-hide-label={getHideProp(props.showLabel)}
			data-icon={props.icon}
			data-hide-icon={getHideProp(props.showIcon)}>
			<select
				id={state._selectId}
				ref={selectRef}
				disabled={props.disabled}
				multiple={props.multiple}
				required={props.required}
				/* Satisfy React */
				onChange={() => {}}
				hidden>
				<For each={state._options}>
					{(option: MultiSelectOptionType) => (
						<option
							key={useTarget({
								react: state.getOptionKey?.(option),
								default: undefined
							})}
							disabled={option.disabled}
							value={option.value}>
							{state.getOptionLabel(option)}
						</option>
					)}
				</For>
			</select>
			<label htmlFor={state._selectId} id={state._labelId}>
				{props.label ?? DEFAULT_LABEL}
			</label>
			<details
				ref={detailsRef}
				aria-disabled={props.disabled}
				onKeyDown={(event) => state.handleKeyboardPress(event)}>
				{props.children}
				<Show when={props.options}>
					{/* We use this because we cannot wrap summary for angular... */}
					<summary
						class="db-multi-select-form-field"
						aria-labelledby={state._labelId}>
						<Show when={state._selectedLabels?.length}>
							<span
								data-visually-hidden={getBooleanAsString(
									props.selectedType === 'tag'
								)}
								id={state._selectedLabelsId}>
								{state._selectedLabels}
							</span>
						</Show>
						<Show when={props.selectedType === 'tag'}>
							<div>
								<For each={state._selectedOptions}>
									{(
										option: MultiSelectOptionType,
										index: number
									) => (
										<DBTag
											key={useTarget({
												react:
													'tag-' +
													state.getOptionKey(option),
												default: undefined
											})}
											removeButton={state.getTagRemoveLabel(
												index
											)}
											onRemove={(
												event: ClickEvent<HTMLButtonElement>
											) => {
												state.handleTagRemove(
													option,
													event
												);
											}}
											emphasis="strong"
											behavior="removable">
											{state.getOptionLabel(option)}
										</DBTag>
									)}
								</For>
							</div>
						</Show>
					</summary>
					<DBMultiSelectDropdown width={props.dropdownWidth}>
						<Show when={state.searchEnabled}>
							<div>
								<DBInput
									type="search"
									variant="floating"
									label={props.searchLabel ?? DEFAULT_LABEL}
									placeholder={props.searchPlaceholder}
									ariaDescribedBy={
										state._hasNoOptions || props.showLoading
											? state._infoTextId
											: undefined
									}
									onInput={(
										event: ChangeEvent<HTMLInputElement>
									) => state.handleSearch(event)}
								/>
							</div>
						</Show>

						<Show
							when={state._hasNoOptions || props.showLoading}
							else={
								<>
									<Show when={state.selectAllEnabled}>
										<div>
											<div className="db-checkbox db-multi-select-list-item">
												<label
													htmlFor={
														state._id +
														'-select-all'
													}>
													{/*We set a form name based on id for not sending checkboxes to a wrapping form */}
													<input
														ref={selectAllRef}
														id={
															state._id +
															'-select-all'
														}
														form={state._id}
														type="checkbox"
														value="select-all"
														checked={
															state.selectAllChecked
														}
														onChange={() =>
															state.handleSelectAll()
														}
													/>
													{state.getSelectAllLabel()}
												</label>
											</div>
										</div>
									</Show>
									<DBMultiSelectList>
										<For each={state._options}>
											{(
												option: MultiSelectOptionType
											) => (
												<DBMultiSelectListItem
													key={useTarget({
														react: state.getOptionKey?.(
															option
														),
														default: undefined
													})}
													type={
														props.multiple
															? 'checkbox'
															: 'radio'
													}
													divider={option.divider}
													icon={option.icon}
													groupLabel={
														option.isGroupTitle
															? state.getOptionLabel(
																	option
																)
															: undefined
													}
													name={state._name}
													checked={state.getOptionChecked(
														option.value
													)}
													disabled={option.disabled}
													value={option.value}
													onChange={() => {
														state.handleSelect(
															option.value
														);
													}}>
													{!option.isGroupTitle &&
														state.getOptionLabel(
															option
														)}
												</DBMultiSelectListItem>
											)}
										</For>
									</DBMultiSelectList>
								</>
							}>
							<DBInfotext
								id={state._infoTextId}
								icon={
									state._hasNoOptions
										? undefined
										: 'circular_arrows'
								}
								semantic={
									state._hasNoOptions
										? 'warning'
										: 'informational'
								}>
								{(state._hasNoOptions
									? props.noResultsText
									: props.loadingText) ?? DEFAULT_MESSAGE}
							</DBInfotext>
						</Show>

						<div>
							<DBButton
								variant="ghost"
								width="full"
								icon="cross"
								size="small"
								onClick={() => {
									state.handleClose('close');
								}}>
								{props.mobileCloseButtonText ??
									DEFAULT_CLOSE_BUTTON}
							</DBButton>
						</div>
					</DBMultiSelectDropdown>
				</Show>
			</details>

			<Show when={props.showClearSelection && state._values?.length}>
				<DBButton
					icon="cross"
					variant="ghost"
					noText
					size="small"
					onClick={() => state.handleClearAll()}>
					{props.clearSelectionLabel}
					<DBTooltip placement="top">
						{props.clearSelectionLabel}
					</DBTooltip>
				</DBButton>
			</Show>

			<span aria-hidden id={state._placeholderId}>
				{props.placeholder ?? props.label}
			</span>
			<Show when={props.message}>
				<DBInfotext
					size="small"
					icon={props.messageIcon}
					id={state._messageId}>
					{props.message}
				</DBInfotext>
			</Show>

			<DBInfotext
				id={state._validMessageId}
				size="small"
				semantic="successful">
				{props.validMessage ?? DEFAULT_VALID_MESSAGE}
			</DBInfotext>

			<DBInfotext
				id={state._invalidMessageId}
				size="small"
				semantic="critical">
				{props.invalidMessage ??
					(selectRef?.validationMessage || DEFAULT_INVALID_MESSAGE)}
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
