/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	For,
	onMount,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import {
	DBCustomSelectProps,
	DBCustomSelectState,
	CustomSelectOptionType
} from './model';
import {
	cls,
	delay,
	getBoolean,
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
import DBCustomSelectList from '../custom-select-list/custom-select-list.lite';
import DBCustomSelectListItem from '../custom-select-list-item/custom-select-list-item.lite';
import DBCustomSelectDropdown from '../custom-select-dropdown/custom-select-dropdown.lite';
import DBInfotext from '../infotext/infotext.lite';
import DBTag from '../tag/tag.lite';
import DBButton from '../button/button.lite';
import DBTooltip from '../tooltip/tooltip.lite';
import {
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';
import DBInput from '../input/input.lite';
import { DocumentClickListener } from '../../utils/document-click-listener';

useMetadata({
	angular: {
		nativeAttributes: ['disabled']
	}
});

useDefaultProps<DBCustomSelectProps>({
	clearSelectionText: 'Clear selection',
	showClearSelection: true
});

// TODO: Test composition instead of config
// TODO: Test with screenreader

export default function DBCustomSelect(props: DBCustomSelectProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | null>(null);
	const detailsRef = useRef<HTMLDetailsElement | any>(null);
	const selectRef = useRef<HTMLSelectElement | any>(null);
	const selectAllRef = useRef<HTMLInputElement | any>(null);
	// jscpd:ignore-start
	const state: DBCustomSelectState = useStore<DBCustomSelectState>({
		_name: undefined,
		_id: undefined,
		_messageId: undefined,
		_validMessageId: undefined,
		_invalidMessageId: undefined,
		_invalidMessage: undefined,
		_selectId: undefined,
		_labelId: undefined,
		_summaryId: undefined,
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
		_documentClickListenerCallbackId: undefined,
		hasValidState: () => {
			return !!(props.validMessage ?? props.validation === 'valid');
		},
		handleValidation: () => {
			if (selectRef) {
				selectRef.value = state.getNativeSelectValue();
			}
			/* For a11y reasons we need to map the correct message with the select */
			if (!selectRef?.validity.valid || props.validation === 'invalid') {
				state._descByIds = state._invalidMessageId;
				state._invalidMessage =
					props.invalidMessage ||
					selectRef?.validationMessage ||
					DEFAULT_INVALID_MESSAGE;
				if (hasVoiceOver()) {
					state._voiceOverFallback = state._invalidMessage;
					delay(() => (state._voiceOverFallback = ''), 1000);
				}
				state._validity = props.validation ?? 'invalid';
			} else if (
				state.hasValidState() &&
				selectRef?.validity.valid &&
				props.required
			) {
				state._descByIds = state._validMessageId;
				if (hasVoiceOver()) {
					state._voiceOverFallback =
						props.validMessage ?? DEFAULT_VALID_MESSAGE;
					delay(() => (state._voiceOverFallback = ''), 1000);
				}
				state._validity = props.validation ?? 'valid';
			} else if (stringPropVisible(props.message, props.showMessage)) {
				state._descByIds = state._messageId;
				state._validity = props.validation ?? 'no-validation';
			} else {
				state._descByIds = state._placeholderId;
				state._validity = props.validation ?? 'no-validation';
			}
		},
		handleDropdownToggle: (event: any) => {
			if (props.onDropdownToggle) {
				props.onDropdownToggle(event);
			}
			if (event.target.open) {
				state._documentClickListenerCallbackId =
					new DocumentClickListener().addCallback((event) =>
						state.handleDocumentClose(event)
					);
			} else {
				if (state._documentClickListenerCallbackId) {
					new DocumentClickListener().removeCallback(
						state._documentClickListenerCallbackId!
					);
				}
			}
		},
		getNativeSelectValue: () => {
			if (state._values?.length) {
				return state._values!.at(0) ?? '';
			}

			return '';
		},
		setDescById: (descId?: string) => {
			const descByIds: string[] = [];
			if (descId) {
				descByIds.push(descId);
			}

			if (state._selectedLabelsId && state._selectedLabels?.length) {
				descByIds.push(state._selectedLabelsId!);
			}

			state._descByIds = descByIds.join(' ');
		},
		getSelectAllLabel: () => {
			return props.selectAllLabel ?? DEFAULT_LABEL;
		},
		getOptionLabel: (option: CustomSelectOptionType) => {
			return option.label ?? option.value?.toString() ?? '';
		},
		getOptionChecked: (value?: string) => {
			if (value && state._values?.includes) {
				return state._values?.includes(value!);
			}

			return false;
		},
		getOptionKey: (option: CustomSelectOptionType) => {
			return (option.id ?? option.value ?? uuid()).toString();
		},
		getTagRemoveLabel: (index: number) => {
			return props.removeTagsTexts &&
				props.removeTagsTexts!.length > index
				? props.removeTagsTexts!.at(index)!
				: `${DEFAULT_REMOVE} ${
						state._selectedOptions
							? state.getOptionLabel(
									state._selectedOptions![index]
								)
							: ''
					}`;
		},
		handleTagRemove: (option: CustomSelectOptionType, event: any) => {
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
						// 1. we check if we are currently focusing a checkbox in the dropdown
						const isCheckbox =
							activeElement.getAttribute('type') === 'checkbox' ||
							activeElement.getAttribute('type') === 'radio';

						if (isCheckbox) {
							const listElement = activeElement?.closest('li');
							if (
								event.key === 'ArrowDown' ||
								event.key === 'ArrowRight'
							) {
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
								(event.key === 'ArrowUp' ||
									event.key === 'ArrowLeft')
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
			} else if (
				event.key === 'ArrowDown' ||
				event.key === 'ArrowRight'
			) {
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
			} else if (
				event.key === 'ArrowDown' ||
				event.key === 'ArrowUp' ||
				event.key === 'ArrowLeft' ||
				event.key === 'ArrowRight'
			) {
				state.handleArrowDownUp(event);
			}
		},
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
		handleDocumentClose: (event: any) => {
			// stencil is sending a custom event which wraps the pointer event into details
			const target = useTarget({
				stencil:
					typeof event.detail === 'number'
						? event.target
						: event.detail.target,
				default: event.target
			});

			if (detailsRef?.open && !detailsRef.contains(target)) {
				detailsRef.open = false;
			}
		},
		handleSelect: (value?: string) => {
			// Angular and Stencil triggers handleSelect
			// twice which will select and deselect a multiple value
			const skip: boolean =
				new Date().getTime() - state._internalChangeTimestamp < 200;

			if (!skip && value) {
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
					? props
							.options!.filter((option) => !option.isGroupTitle)
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
		handleSearch: (event: any) => {
			const filterText = (event.target as HTMLInputElement).value;

			state._options =
				!props.options || !filterText || filterText.length === 0
					? props.options
					: props.options!.filter(
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
		const mId = props.id ?? `custom-select-${uuid()}`;
		state._id = mId;
		state._messageId = mId + DEFAULT_MESSAGE_ID_SUFFIX;
		state._validMessageId = mId + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
		state._invalidMessageId = mId + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
		state._selectId = mId + DEFAULT_SELECT_ID_SUFFIX;
		state._labelId = mId + DEFAULT_LABEL_ID_SUFFIX;
		state._summaryId = mId + '-summary';
		state._placeholderId = mId + DEFAULT_PLACEHOLDER_ID_SUFFIX;
		state._selectedLabelsId = mId + '-selected-labels';
		state._infoTextId = mId + '-info';
		state._invalidMessage = props.invalidMessage || DEFAULT_INVALID_MESSAGE;
	});

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
					state._descByIds || ''
				);
			}
		}
	}, [detailsRef, state._descByIds]);

	onUpdate(() => {
		if (props.showNoResults !== undefined) {
			state._hasNoOptions = props.showNoResults!;
		} else if (state._options) {
			state._hasNoOptions = state._options!.length === 0;
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
		if (props.onSelect) {
			const externalChange = Boolean(state._externalChangeTimestamp);
			const internalChange = Boolean(state._internalChangeTimestamp);

			const onlyInternalChange = internalChange && !externalChange;

			const bothChangeButInternalNew =
				internalChange &&
				externalChange &&
				state._internalChangeTimestamp > state._externalChangeTimestamp;

			if (onlyInternalChange || bothChangeButInternalNew) {
				props.onSelect(state._values ?? []);

				const fakeEvent = {
					target: { values: state._values }
				};
				useTarget({
					angular: () =>
						handleFrameworkEventAngular(state, fakeEvent, 'values'),
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
		state.handleValidation();
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
				(option: CustomSelectOptionType) => {
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
					?.map((option: CustomSelectOptionType) =>
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

	onUpdate(() => {
		state._invalidMessage =
			props.invalidMessage ||
			selectRef?.validationMessage ||
			DEFAULT_INVALID_MESSAGE;
	}, [selectRef, props.invalidMessage]);

	function satisfyReact() {
		// This is an empty function to satisfy React
	}

	return (
		<div
			id={state._id}
			ref={_ref}
			class={cls('db-custom-select', props.className)}
			aria-invalid={state._validity === 'invalid'}
			data-custom-validity={state._validity}
			data-width={props.width}
			data-variant={
				props.variant === 'floating' &&
				props.selectedType === 'tag' &&
				props.multiple
					? 'above'
					: props.variant
			}
			data-required={getBooleanAsString(props.required)}
			data-placement={props.placement}
			data-selected-type={props.multiple ? props.selectedType : 'text'}
			data-hide-label={getHideProp(props.showLabel)}
			data-icon={props.icon}
			data-hide-icon={getHideProp(props.showIcon)}>
			<label id={state._labelId}>
				{props.label ?? DEFAULT_LABEL}
				<select
					role="none"
					hidden
					id={state._selectId}
					tabIndex={-1}
					ref={selectRef}
					form={props.form}
					multiple={getBoolean(props.multiple, 'multiple')}
					disabled={getBoolean(props.disabled, 'disabled')}
					required={getBoolean(props.required, 'required')}
					onChange={() => satisfyReact()}>
					<Show when={state._options?.length}>
						<For each={state._options}>
							{(option: CustomSelectOptionType) => (
								<option
									key={useTarget({
										vue: undefined,
										stencil: undefined,
										default:
											'native-select-option-' +
											state.getOptionKey(option)
									})}
									disabled={option.disabled}
									value={option.value}>
									{state.getOptionLabel(option)}
								</option>
							)}
						</For>
					</Show>
				</select>
			</label>
			<details
				ref={detailsRef}
				open={props.open}
				/* @ts-expect-error details as an event named onToggle */
				onToggle={(event: any) => state.handleDropdownToggle(event)}
				onKeyDown={(event) => state.handleKeyboardPress(event)}>
				{props.children}
				<Show when={props.options}>
					{/* We use this because we cannot wrap summary for angular... */}
					<summary
						id={state._summaryId}
						class="db-custom-select-form-field"
						aria-disabled={getBooleanAsString(props.disabled)}
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
										option: CustomSelectOptionType,
										index: number
									) => (
										<DBTag
											key={useTarget({
												vue: undefined,
												stencil: undefined,
												default:
													'tag-' +
													state.getOptionKey(option)
											})}
											removeButton={state.getTagRemoveLabel(
												index
											)}
											onRemove={(
												event: ClickEvent<HTMLButtonElement>
											) =>
												state.handleTagRemove(
													option,
													event
												)
											}
											emphasis="strong"
											behavior="removable">
											{state.getOptionLabel(option)}
										</DBTag>
									)}
								</For>
							</div>
						</Show>
					</summary>
					<DBCustomSelectDropdown width={props.dropdownWidth}>
						<Show when={state.searchEnabled}>
							<div>
								<DBInput
									type="search"
									showLabel={false}
									label={props.searchLabel ?? DEFAULT_LABEL}
									placeholder={
										props.searchPlaceholder ??
										props.searchLabel
									}
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
											<div className="db-checkbox db-custom-select-list-item">
												<label>
													{/* We set a form name based on id for not sending checkboxes to a wrapping form */}
													<input
														ref={selectAllRef}
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
									<DBCustomSelectList
										multiple={getBoolean(
											props.multiple,
											'multiple'
										)}
										label={props.label ?? DEFAULT_LABEL}>
										<For each={state._options}>
											{(
												option: CustomSelectOptionType
											) => (
												<DBCustomSelectListItem
													key={useTarget({
														vue: undefined,
														stencil: undefined,
														default:
															'custom-select-list-item-' +
															state.getOptionKey(
																option
															)
													})}
													type={
														props.multiple
															? 'checkbox'
															: 'radio'
													}
													showDivider={
														option.showDivider
													}
													icon={option.icon}
													isGroupTitle={
														option.isGroupTitle
													}
													groupTitle={state.getOptionLabel(
														option
													)}
													name={state._name}
													checked={state.getOptionChecked(
														option.value
													)}
													disabled={option.disabled}
													value={option.value}
													onChange={() =>
														state.handleSelect(
															option.value
														)
													}>
													{!option.isGroupTitle &&
														state.getOptionLabel(
															option
														)}
												</DBCustomSelectListItem>
											)}
										</For>
									</DBCustomSelectList>
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
								onClick={() => state.handleClose('close')}>
								{props.mobileCloseButtonText ??
									DEFAULT_CLOSE_BUTTON}
							</DBButton>
						</div>
					</DBCustomSelectDropdown>
				</Show>
			</details>

			<Show
				when={
					(props.showClearSelection ?? true) && state._values?.length
				}>
				<DBButton
					icon="cross"
					variant="ghost"
					noText
					size="small"
					onClick={() => state.handleClearAll()}>
					{props.clearSelectionText}
					<DBTooltip placement="top">
						{props.clearSelectionText}
					</DBTooltip>
				</DBButton>
			</Show>

			<span
				aria-hidden={getBooleanAsString(true)}
				id={state._placeholderId}>
				{props.placeholder ?? props.label}
			</span>
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
