/* eslint-disable @typescript-eslint/no-explicit-any */
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
import {
	ClickEvent,
	GeneralEvent,
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
	getSearchInput,
	hasVoiceOver,
	stringPropVisible,
	uuid
} from '../../utils';
import { DocumentClickListener } from '../../utils/document-click-listener';
import { DocumentScrollListener } from '../../utils/document-scroll-listener';
import { handleFixedDropdown } from '../../utils/floating-components';
import {
	addResetEventListener,
	handleFrameworkEventAngular,
	handleFrameworkEventVue
} from '../../utils/form-components';
import DBButton from '../button/button.lite';
import DBCustomSelectDropdown from '../custom-select-dropdown/custom-select-dropdown.lite';
import DBCustomSelectListItem from '../custom-select-list-item/custom-select-list-item.lite';
import DBCustomSelectList from '../custom-select-list/custom-select-list.lite';
import DBInfotext from '../infotext/infotext.lite';
import DBInput from '../input/input.lite';
import DBTag from '../tag/tag.lite';
import DBTooltip from '../tooltip/tooltip.lite';
import {
	CustomSelectOptionType,
	DBCustomSelectProps,
	DBCustomSelectState
} from './model';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'required', 'multiple'],
		signals: {
			writeable: ['disabled', 'values']
		}
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
	const _ref = useRef<HTMLDivElement | any>(null);
	const detailsRef = useRef<HTMLDetailsElement | any>(null);
	const selectRef = useRef<HTMLSelectElement | any>(null);
	const selectAllRef = useRef<HTMLInputElement | any>(null);
	const searchInputRef = useRef<HTMLInputElement | any>(null);
	// jscpd:ignore-start
	const state: DBCustomSelectState = useStore<DBCustomSelectState>({
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
		_userInteraction: false,
		abortController: undefined,
		// Workaround for Vue output: TS for Vue would think that it could be a function, and by this we clarify that it's a string
		_descByIds: undefined,
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
		_documentClickListenerCallbackId: undefined,
		_internalChangeTimestamp: 0,
		_documentScrollListenerCallbackId: undefined,
		_observer: undefined,
		handleDocumentScroll: (event: any) => {
			if (
				event?.target?.contains &&
				event?.target?.contains(detailsRef)
			) {
				state.handleAutoPlacement();
			}
		},
		_searchValue: undefined,
		hasValidState: () => {
			return !!(props.validMessage ?? props.validation === 'valid');
		},
		handleValidation: () => {
			if (selectRef) {
				selectRef.value = state.getNativeSelectValue();
			}
			/* For a11y reasons we need to map the correct message with the select */
			if (!selectRef?.validity.valid || props.validation === 'invalid') {
				state.setDescById(state._invalidMessageId);
				state._invalidMessage =
					props.invalidMessage ||
					selectRef?.validationMessage ||
					DEFAULT_INVALID_MESSAGE;
				if (hasVoiceOver()) {
					state._voiceOverFallback = state._invalidMessage;
					delay(() => (state._voiceOverFallback = ''), 1000);
				}
				if (state._userInteraction) {
					state._validity = props.validation ?? 'invalid';
				}
			} else if (
				state.hasValidState() &&
				selectRef?.validity.valid &&
				props.required
			) {
				state.setDescById(state._validMessageId);
				if (hasVoiceOver()) {
					state._voiceOverFallback =
						props.validMessage ?? DEFAULT_VALID_MESSAGE;
					delay(() => (state._voiceOverFallback = ''), 1000);
				}
				state._validity = props.validation ?? 'valid';
			} else if (stringPropVisible(props.message, props.showMessage)) {
				state.setDescById(state._messageId);
				state._validity = props.validation ?? 'no-validation';
			} else {
				state.setDescById(state._placeholderId);
				state._validity = props.validation ?? 'no-validation';
			}
		},
		handleDropdownToggle: (event: GeneralEvent<HTMLDetailsElement>) => {
			if (props.onDropdownToggle) {
				event.stopPropagation();
				props.onDropdownToggle(event);
			}
			if (
				event.target instanceof HTMLDetailsElement &&
				event.target.open
			) {
				state._documentClickListenerCallbackId =
					new DocumentClickListener().addCallback((event) =>
						state.handleDocumentClose(event)
					);

				state._documentScrollListenerCallbackId =
					new DocumentScrollListener().addCallback((event) =>
						state.handleDocumentScroll(event)
					);

				state.handleAutoPlacement();
				state._observer?.observe(detailsRef);
				if (!event.target.dataset['test']) {
					// We need this workaround for snapshot testing
					state.handleOpenByKeyboardFocus();
				}
			} else {
				if (state._documentClickListenerCallbackId) {
					new DocumentClickListener().removeCallback(
						state._documentClickListenerCallbackId!
					);
				}
				if (state._documentScrollListenerCallbackId) {
					new DocumentScrollListener().removeCallback(
						state._documentScrollListenerCallbackId!
					);
				}
				state._observer?.unobserve(detailsRef);
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
		getTagRemoveLabel: (option: CustomSelectOptionType) => {
			const removeTexts = props.removeTagsTexts;
			const currentOptions = props.options;
			if (removeTexts && currentOptions) {
				// Find the index of the option in the original options array
				const optionIndex = currentOptions.findIndex(
					(opt: CustomSelectOptionType) => opt.value === option.value
				);
				if (optionIndex >= 0 && optionIndex < removeTexts.length) {
					return removeTexts[optionIndex];
				}
			}
			// Fallback to default behavior
			return `${DEFAULT_REMOVE} ${state.getOptionLabel(option)}`;
		},
		handleTagRemove: (
			option: CustomSelectOptionType,
			event?: ClickEvent<HTMLButtonElement> | void | any
		) => {
			if (event) {
				event.stopPropagation();
			}

			state.handleSelect(option.value);
			state.handleSummaryFocus();
		},
		handleAutoPlacement: () => {
			if (detailsRef) {
				const dropdown = detailsRef.querySelector('article');
				if (dropdown) {
					// This is a workaround for Angular
					delay(() => {
						handleFixedDropdown(
							dropdown,
							detailsRef,
							(props.placement as unknown as string) ?? 'bottom'
						);
					}, 1);
				}
			}
		},
		handleArrowDownUp: (event: any) => {
			if (detailsRef?.open) {
				if (self.document) {
					const activeElement = self.document.activeElement;
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
								// Find next element with input, skipping group titles
								let nextElement =
									listElement?.nextElementSibling;
								while (nextElement) {
									const nextInput =
										nextElement.querySelector('input');
									if (nextInput) {
										nextInput.focus();
										break;
									}
									nextElement =
										nextElement.nextElementSibling;
								}

								if (!nextElement) {
									// We are on the last checkbox we move to the top checkbox
									state.handleFocusFirstDropdownCheckbox(
										activeElement
									);
								}
							} else {
								// Find previous element with input, skipping group titles
								let prevElement =
									listElement?.previousElementSibling;
								while (prevElement) {
									const prevInput =
										prevElement.querySelector('input');
									if (prevInput) {
										prevInput.focus();
										break;
									}
									prevElement =
										prevElement.previousElementSibling;
								}

								if (!prevElement) {
									// Check if we have a "select all" checkbox (only relevant for multi-select)
									const selectAllCheckbox =
										detailsRef.querySelector(
											`input[type="checkbox"]`
										);
									if (
										selectAllCheckbox &&
										selectAllCheckbox !== activeElement
									) {
										// We are on the top list checkbox but there is a select all checkbox as well
										state.handleFocusFirstDropdownCheckbox(
											activeElement
										);
									} else {
										// We are on the top checkbox, we need to move to the search
										// or to the last checkbox
										const search =
											getSearchInput(detailsRef);
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
							}
						} else {
							// 2. If we are on the search, and press up we go back to summary and close
							if (
								activeElement.getAttribute('type') ===
									'search' &&
								(event.key === 'ArrowUp' ||
									event.key === 'ArrowLeft')
							) {
								state.handleClose(undefined, true);
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
			}

			event.stopPropagation();
			event.preventDefault();
		},
		handleKeyboardPress: (event: any) => {
			event.stopPropagation();
			if (event.key === 'Escape' && detailsRef?.open) {
				state.handleClose(undefined, true);
				state.handleSummaryFocus();
			} else if (event.key === 'Enter' && detailsRef?.open) {
				// Handle Enter key to select option like Space key
				if (self.document) {
					const activeElement = self.document
						.activeElement as HTMLInputElement;
					if (
						['checkbox', 'radio'].includes(
							activeElement.getAttribute('type') || ''
						)
					) {
						// Trigger click to simulate Space key behavior
						activeElement.click();

						event.preventDefault();
					}
				}
			} else if (
				event.key === 'ArrowDown' ||
				event.key === 'ArrowUp' ||
				event.key === 'ArrowLeft' ||
				event.key === 'ArrowRight'
			) {
				state.handleArrowDownUp(event);
			}
		},
		handleClose: (
			event?: InteractionEvent<HTMLDetailsElement> | void,
			forceClose?: boolean
		) => {
			if (detailsRef) {
				if (forceClose) {
					detailsRef.open = false;
					state.handleSummaryFocus();
				} else if (detailsRef.open && event) {
					if (event.relatedTarget) {
						const relatedTarget =
							event.relatedTarget as HTMLElement;
						if (!detailsRef.contains(relatedTarget)) {
							// We need to use delay here because the combination of `contains`
							// and changing the DOM element causes a race condition inside browser
							delay(() => (detailsRef.open = false), 1);
						}
					}
				}
			}
		},
		handleDocumentClose: (event: any) => {
			if (event) {
				// stencil is sending a custom event which wraps the pointer event into details
				const target = useTarget({
					stencil:
						typeof event.detail === 'number'
							? event.target
							: event.detail?.target,
					default: event.target
				});

				if (detailsRef?.open && !detailsRef.contains(target)) {
					detailsRef.open = false;
				}
			}
		},
		handleOptionSelected: (values: string[]) => {
			const skip =
				new Date().getTime() - state._internalChangeTimestamp < 200;
			if (skip) return;

			state._values = values;
			state._userInteraction = true;
			if (props.onOptionSelected) {
				props.onOptionSelected(values ?? []);
			}

			useTarget({
				angular: () =>
					handleFrameworkEventAngular(
						state,
						{
							target: { values }
						},
						'values'
					),
				vue: () =>
					handleFrameworkEventVue(
						() => {},
						{
							target: { values }
						},
						'values'
					)
			});
			state._internalChangeTimestamp = new Date().getTime();
		},
		handleSelect: (value?: string) => {
			if (value) {
				if (getBoolean(props.multiple, 'multiple')) {
					if (state._values?.includes(value)) {
						state.handleOptionSelected(
							state._values!.filter((v: string) => v !== value)
						);
					} else {
						state.handleOptionSelected([
							...(state._values || []),
							value
						]);
					}
				} else {
					state.handleOptionSelected([value]);
					state.handleClose(undefined, true);
				}
			}
		},
		handleSelectAll: (event: any) => {
			event.stopPropagation();
			if (state._values?.length === state.amountOptions) {
				state.handleOptionSelected([]);
			} else {
				const searchValue: string | undefined =
					state.searchEnabled && searchInputRef
						? searchInputRef.value
						: undefined;

				state.handleOptionSelected(
					props.options
						? props
								.options!.filter(
									(option) =>
										!option.isGroupTitle &&
										(!searchValue ||
											option.value
												?.toLowerCase()
												.includes(
													searchValue.toLowerCase()
												))
								)
								.map((option) => option.value ?? '')
						: []
				);
			}
		},
		handleFocusFirstDropdownCheckbox: (activeElement?: Element) => {
			if (detailsRef) {
				const checkboxes: HTMLInputElement[] = Array.from(
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
						}, 1);
					}
				}
			}
		},
		handleOpenByKeyboardFocus: () => {
			if (detailsRef) {
				// Focus search if possible
				const search = getSearchInput(detailsRef);
				if (search) {
					delay(() => {
						// Takes some time until element can be focused
						search.focus();
					}, 1);
				} else {
					// Focus first checkbox otherwise
					state.handleFocusFirstDropdownCheckbox();
				}
			}
		},
		// Don't trigger onOptionSelected event
		handleSearch: (
			valueOrEvent?: InputEvent<HTMLInputElement> | string | void
		) => {
			if (valueOrEvent === undefined) {
				return;
			}

			let filterText;

			if (typeof valueOrEvent === 'string') {
				filterText = valueOrEvent;
			} else {
				const event = valueOrEvent as InputEvent<HTMLInputElement>;
				event.stopPropagation();

				if (props.onSearch) {
					props.onSearch(event);
				}

				filterText = (event.target as HTMLInputElement).value;
				state._searchValue = filterText;
			}

			if (!props.options || !filterText || filterText.length === 0) {
				state._options = props.options;
			} else if (props.searchFilter) {
				state._options = props.options!.filter((option) =>
					props.searchFilter!(option, filterText)
				);
			} else {
				state._options = props.options!.filter(
					(option) =>
						!option.isGroupTitle &&
						state
							.getOptionLabel(option)
							.toLowerCase()
							.includes(filterText.toLowerCase())
				);
			}
		},
		handleClearAll: (event: any) => {
			event.stopPropagation();

			state.handleOptionSelected([]);
			state.handleSummaryFocus();
		},
		handleSummaryFocus: () => {
			if (detailsRef) {
				(detailsRef as HTMLDetailsElement)
					.querySelector('summary')
					?.focus();
			}
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

		if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
			state._observer = new IntersectionObserver((payload) => {
				if (detailsRef) {
					const entry = payload.find(
						({ target }) => target === detailsRef
					);
					if (entry && !entry.isIntersecting && detailsRef.open) {
						detailsRef.open = false;
					}
				}
			});
		}
	});

	onUpdate(() => {
		if (detailsRef) {
			detailsRef.addEventListener(
				'focusout',
				(event: InteractionEvent<HTMLDetailsElement>) =>
					state.handleClose(event)
			);
		}
	}, [detailsRef]);

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
					props.ariaDescribedBy ?? (state._descByIds || '')
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
	}, [props.showNoResults, props.showLoading, state._options]);

	onUpdate(() => {
		state.selectAllEnabled = Boolean(
			getBoolean(props.multiple, 'multiple') &&
			(props.showSelectAll ?? state.amountOptions > 5)
		);
	}, [props.showSelectAll, state.amountOptions, props.multiple]);

	onUpdate(() => {
		state.searchEnabled = props.showSearch ?? state.amountOptions > 9;
	}, [props.showSearch, state.amountOptions]);

	// If we inform the consumer we don't want to trigger the onOptionSelected event again
	onUpdate(() => {
		const v = props.values;

		if (Array.isArray(v)) {
			if (state._values !== v) {
				state._values = v;
			}
		} else if (v == null && state._values?.length !== 0) {
			state._values = [];
		}
	}, [props.values]);

	onUpdate(() => {
		if (selectRef) {
			state.handleValidation();
		}
	}, [state._values, selectRef]);

	onUpdate(() => {
		if (selectRef) {
			let controller = state.abortController;
			if (!controller) {
				controller = new AbortController();
				state.abortController = controller;
			}

			const initialValues = props.values;
			addResetEventListener(
				selectRef,
				() => {
					const resetValue = initialValues
						? initialValues
						: selectRef.value
							? [selectRef.value]
							: [];
					state.handleOptionSelected(resetValue);
					state.handleValidation();
				},
				controller.signal
			);
		}
	}, [selectRef]);

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
		state._searchValue = props.searchValue;
		if (props.searchValue) {
			const sValue = props.searchValue!; // <- workaround for Angular
			state.handleSearch(sValue);
		}
	}, [props.searchValue]);

	onUpdate(() => {
		if (props.options?.length) {
			state._selectedOptions = props.options?.filter(
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
	}, [props.options, state._values]);

	onUpdate(() => {
		if (props.selectedLabels) {
			state._selectedLabels = props.selectedLabels;
			return;
		}

		if (state._selectedOptions?.length) {
			if (props.transformSelectedLabels) {
				// We need to add this to another ``const`` for Angular generated output to work
				const selectedOptions = state._selectedOptions;
				const transformFn = props.transformSelectedLabels!;
				state._selectedLabels = transformFn!(selectedOptions);
				return;
			}

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
	}, [
		state._selectedOptions,
		props.selectedType,
		props.amountText,
		props.selectedLabels,
		props.transformSelectedLabels
	]);

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

	onUnMount(() => {
		state.abortController?.abort();
	});

	function satisfyReact(event: any) {
		// This is a function to satisfy React
		event.stopPropagation();
	}

	return (
		<div
			id={state._id}
			ref={_ref}
			class={cls('db-custom-select', props.className)}
			aria-invalid={state._validity === 'invalid'}
			data-custom-validity={state._validity}
			data-width={props.formFieldWidth}
			data-variant={
				props.variant === 'floating' &&
				props.selectedType === 'tag' &&
				getBoolean(props.multiple, 'multiple')
					? 'above'
					: props.variant
			}
			data-required={getBooleanAsString(props.required)}
			data-hide-asterisk={getHideProp(props.showRequiredAsterisk)}
			data-placement={props.placement}
			data-selected-type={
				getBoolean(props.multiple, 'multiple')
					? props.selectedType
					: 'text'
			}
			data-hide-label={getHideProp(props.showLabel)}
			data-icon={props.icon}
			data-show-icon={getBooleanAsString(props.showIcon)}>
			<label id={state._labelId}>
				{props.label ?? DEFAULT_LABEL}
				<select
					role="none"
					hidden
					id={state._selectId}
					tabIndex={-1}
					ref={selectRef}
					form={props.form}
					name={props.name}
					multiple={getBoolean(props.multiple, 'multiple')}
					disabled={getBoolean(props.disabled, 'disabled')}
					required={getBoolean(props.required, 'required')}
					onChange={(event) => satisfyReact(event)}>
					<Show when={props.options?.length}>
						<For each={props.options}>
							{(option: CustomSelectOptionType) => (
								<option
									key={useTarget({
										vue: undefined,
										stencil: undefined,
										default: getOptionKey(
											option,
											'native-select-option-'
										)
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
				onToggle={(event) => state.handleDropdownToggle(event)}
				onKeyDown={(event) => state.handleKeyboardPress(event)}>
				{props.children}
				<Show when={props.options}>
					{/* We use this because we cannot wrap summary for Angular... */}
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
								<Show when={props.selectedPrefix}>
									<span data-visually-hidden="true">
										{props.selectedPrefix}
									</span>
								</Show>
								{state._selectedLabels}
							</span>
						</Show>
						<Show when={props.selectedType === 'tag'}>
							<div>
								<For each={state._selectedOptions!}>
									{(
										option: CustomSelectOptionType,
										index: number
									) => (
										<DBTag
											key={useTarget({
												vue: undefined,
												stencil: undefined,
												default: getOptionKey(
													option,
													'tag-'
												)
											})}
											removeButton={state.getTagRemoveLabel(
												option
											)}
											onRemove={(
												event?: ClickEvent<HTMLButtonElement> | void
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
									ref={searchInputRef}
									name={state._id}
									form={state._id}
									type="search"
									showLabel={false}
									value={state._searchValue}
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
										event: InputEvent<HTMLInputElement>
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
														onChange={(event) =>
															state.handleSelectAll(
																event
															)
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
										label={
											props.listLabel ??
											props.label ??
											DEFAULT_LABEL
										}>
										<For each={state._options!}>
											{(
												option: CustomSelectOptionType
											) => (
												<DBCustomSelectListItem
													key={useTarget({
														vue: undefined,
														stencil: undefined,
														default: getOptionKey(
															option,
															'custom-select-list-item-'
														)
													})}
													type={
														getBoolean(
															props.multiple,
															'multiple'
														)
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
													name={state._id}
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
									props.showLoading
										? 'circular_arrows'
										: undefined
								}
								semantic={
									props.showLoading
										? 'informational'
										: 'warning'
								}>
								{(props.showLoading
									? props.loadingText
									: props.noResultsText) ?? DEFAULT_MESSAGE}
							</DBInfotext>
						</Show>

						<div>
							<DBButton
								variant="ghost"
								width="full"
								icon="cross"
								size="small"
								name={state._id}
								form={state._id}
								onClick={() =>
									state.handleClose(undefined, true)
								}>
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
					name={state._id}
					form={state._id}
					onClick={(event) => state.handleClearAll(event)}>
					{props.clearSelectionText}
					<DBTooltip placement="top">
						{props.clearSelectionText}
					</DBTooltip>
				</DBButton>
			</Show>

			<span
				class="db-custom-select-placeholder"
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
