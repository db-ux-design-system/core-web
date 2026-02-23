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
		mId: undefined,
		mMessageId: undefined,
		mValidMessageId: undefined,
		mInvalidMessageId: undefined,
		mInvalidMessage: undefined,
		mSelectId: undefined,
		mLabelId: undefined,
		mSummaryId: undefined,
		mPlaceholderId: undefined,
		mInfoTextId: undefined,
		mValidity: 'no-validation',
		mUserInteraction: false,
		mAbortController: undefined,
		// Workaround for Vue output: TS for Vue would think that it could be a function, and by this we clarify that it's a string
		mDescByIds: undefined,
		mSelectedLabels: '',
		mSelectedLabelsId: undefined,
		mVoiceOverFallback: '',
		mSelectedOptions: [],
		selectAllEnabled: false,
		searchEnabled: false,
		amountOptions: 0,
		mValues: [],
		mOptions: [],
		mHasNoOptions: false,
		mDocumentClickListenerCallbackId: undefined,
		mInternalChangeTimestamp: 0,
		mDocumentScrollListenerCallbackId: undefined,
		mObserver: undefined,
		mSearchValue: undefined,
		handleDocumentScroll: (event: any) => {
			if (
				event?.target?.contains &&
				event?.target?.contains(detailsRef)
			) {
				state.handleAutoPlacement();
			}
		},
		hasValidState: () => {
			return !!(props.validMessage ?? props.validation === 'valid');
		},
		handleValidation: () => {
			if (selectRef) {
				selectRef.value = state.getNativeSelectValue();
			}
			/* For a11y reasons we need to map the correct message with the select */
			if (!selectRef?.validity.valid || props.validation === 'invalid') {
				state.setDescById(state.mInvalidMessageId);
				state.mInvalidMessage =
					props.invalidMessage ||
					selectRef?.validationMessage ||
					DEFAULT_INVALID_MESSAGE;
				if (hasVoiceOver()) {
					state.mVoiceOverFallback = state.mInvalidMessage;
					delay(() => (state.mVoiceOverFallback = ''), 1000);
				}
				if (state.mUserInteraction) {
					state.mValidity = props.validation ?? 'invalid';
				}
			} else if (
				state.hasValidState() &&
				selectRef?.validity.valid &&
				props.required
			) {
				state.setDescById(state.mValidMessageId);
				if (hasVoiceOver()) {
					state.mVoiceOverFallback =
						props.validMessage ?? DEFAULT_VALID_MESSAGE;
					delay(() => (state.mVoiceOverFallback = ''), 1000);
				}
				state.mValidity = props.validation ?? 'valid';
			} else if (stringPropVisible(props.message, props.showMessage)) {
				state.setDescById(state.mMessageId);
				state.mValidity = props.validation ?? 'no-validation';
			} else {
				state.setDescById(state.mPlaceholderId);
				state.mValidity = props.validation ?? 'no-validation';
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
				state.mDocumentClickListenerCallbackId =
					new DocumentClickListener().addCallback((event) =>
						state.handleDocumentClose(event)
					);

				state.mDocumentScrollListenerCallbackId =
					new DocumentScrollListener().addCallback((event) =>
						state.handleDocumentScroll(event)
					);

				state.handleAutoPlacement();
				state.mObserver?.observe(detailsRef);
				if (!event.target.dataset['test']) {
					// We need this workaround for snapshot testing
					state.handleOpenByKeyboardFocus();
				}
			} else {
				if (state.mDocumentClickListenerCallbackId) {
					new DocumentClickListener().removeCallback(
						state.mDocumentClickListenerCallbackId!
					);
				}
				if (state.mDocumentScrollListenerCallbackId) {
					new DocumentScrollListener().removeCallback(
						state.mDocumentScrollListenerCallbackId!
					);
				}
				state.mObserver?.unobserve(detailsRef);
			}
		},
		getNativeSelectValue: () => {
			if (state.mValues?.length) {
				return state.mValues!.at(0) ?? '';
			}

			return '';
		},
		setDescById: (descId?: string) => {
			const descByIds: string[] = [];
			if (descId) {
				descByIds.push(descId);
			}

			if (state.mSelectedLabelsId && state.mSelectedLabels?.length) {
				descByIds.push(state.mSelectedLabelsId!);
			}

			state.mDescByIds = descByIds.join(' ');
		},
		getSelectAllLabel: () => {
			return props.selectAllLabel ?? DEFAULT_LABEL;
		},
		getOptionLabel: (option: CustomSelectOptionType) => {
			return option.label ?? option.value?.toString() ?? '';
		},
		getOptionChecked: (value?: string) => {
			if (value && state.mValues?.includes) {
				return state.mValues?.includes(value!);
			}

			return false;
		},
		getTagRemoveLabel: (option: CustomSelectOptionType) => {
			const removeTexts = props.removeTagsTexts;
			const options = props.options;
			if (removeTexts && options) {
				// Find the index of the option in the original options array
				const optionIndex = options.findIndex(
					(opt) => opt.value === option.value
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
					} else if (
						activeElement.getAttribute('type') === 'search'
					) {
						// When Enter is pressed in search field, select the first available option
						const firstOption = state.mOptions?.find(
							(opt) => !opt.isGroupTitle && !opt.disabled
						);
						if (firstOption?.value) {
							state.handleSelect(firstOption.value);
							event.preventDefault();
						}
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
				new Date().getTime() - state.mInternalChangeTimestamp < 200;
			if (skip) return;

			state.mValues = values;
			state.mUserInteraction = true;
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
			state.mInternalChangeTimestamp = new Date().getTime();
		},
		handleSelect: (value?: string) => {
			if (value) {
				if (props.multiple) {
					if (state.mValues?.includes(value)) {
						state.handleOptionSelected(
							state.mValues!.filter((v: string) => v !== value)
						);
					} else {
						state.handleOptionSelected([
							...(state.mValues || []),
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
			if (state.mValues?.length === state.amountOptions) {
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
				state.mSearchValue = filterText;
			}

			if (!props.options || !filterText || filterText.length === 0) {
				state.mOptions = props.options;
			} else if (props.searchFilter) {
				state.mOptions = props.options!.filter((option) =>
					props.searchFilter!(option, filterText)
				);
			} else {
				state.mOptions = props.options!.filter(
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
		selectAllIndeterminate: false,
		resetIds: () => {
			const _mId = props.id ?? props._id ?? `custom-select-${uuid()}`;
			state.mId = _mId;
			state.mMessageId = _mId + DEFAULT_MESSAGE_ID_SUFFIX;
			state.mValidMessageId = _mId + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
			state.mInvalidMessageId = _mId + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
			state.mSelectId = _mId + DEFAULT_SELECT_ID_SUFFIX;
			state.mLabelId = _mId + DEFAULT_LABEL_ID_SUFFIX;
			state.mSummaryId = _mId + '-summary';
			state.mPlaceholderId = _mId + DEFAULT_PLACEHOLDER_ID_SUFFIX;
			state.mSelectedLabelsId = _mId + '-selected-labels';
			state.mInfoTextId = _mId + '-info';
			state.mInvalidMessage =
				props.invalidMessage || DEFAULT_INVALID_MESSAGE;
		}
	});
	// jscpd:ignore-end

	onMount(() => {
		state.resetIds();

		if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
			state.mObserver = new IntersectionObserver((payload) => {
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
		if (props.id ?? props._id) {
			state.resetIds();
		}
	}, [props.id, props._id]);

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
		if (state.mId) {
			const messageId = state.mId + DEFAULT_MESSAGE_ID_SUFFIX;
			state.mLabelId = state.mId + DEFAULT_LABEL_ID_SUFFIX;
			state.mSelectId = state.mId + DEFAULT_SELECT_ID_SUFFIX;
			state.mValidMessageId = state.mId + DEFAULT_VALID_MESSAGE_ID_SUFFIX;
			state.mInvalidMessageId =
				state.mId + DEFAULT_INVALID_MESSAGE_ID_SUFFIX;
			state.mPlaceholderId = state.mId + DEFAULT_PLACEHOLDER_ID_SUFFIX;

			if (stringPropVisible(props.message, props.showMessage)) {
				state.setDescById(messageId);
			} else {
				state.setDescById();
			}
		}
	}, [state.mId]);

	onUpdate(() => {
		if (detailsRef) {
			const summary = detailsRef.querySelector('summary');
			if (summary) {
				summary.setAttribute(
					'aria-describedby',
					props.ariaDescribedBy ?? (state.mDescByIds || '')
				);
			}
		}
	}, [detailsRef, state.mDescByIds]);

	onUpdate(() => {
		if (props.showNoResults !== undefined) {
			state.mHasNoOptions = props.showNoResults!;
		} else if (state.mOptions) {
			state.mHasNoOptions = state.mOptions!.length === 0;
		}
	}, [props.showNoResults, props.showLoading, state.mOptions]);

	onUpdate(() => {
		state.selectAllEnabled = Boolean(
			props.multiple && (props.showSelectAll ?? state.amountOptions > 5)
		);
	}, [props.showSelectAll, state.amountOptions, props.multiple]);

	onUpdate(() => {
		state.searchEnabled = props.showSearch ?? state.amountOptions > 9;
	}, [props.showSearch, state.amountOptions]);

	// If we inform the consumer we don't want to trigger the onOptionSelected event again
	onUpdate(() => {
		const v = props.values;

		if (Array.isArray(v)) {
			if (state.mValues !== v) {
				state.mValues = v;
			}
		} else if (v == null && state.mValues?.length !== 0) {
			state.mValues = [];
		}
	}, [props.values]);

	onUpdate(() => {
		if (selectRef) {
			state.handleValidation();
		}
	}, [state.mValues, selectRef]);

	onUpdate(() => {
		if (selectRef) {
			let controller = state.mAbortController;
			if (!controller) {
				controller = new AbortController();
				state.mAbortController = controller;
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
		state.mValidity = props.validation;
	}, [props.validation]);

	onUpdate(() => {
		if (state.mValues?.length === 0) {
			state.selectAllChecked = false;
			state.selectAllIndeterminate = false;
		} else if (state.mValues?.length === state.amountOptions) {
			state.selectAllIndeterminate = false;
			state.selectAllChecked = true;
		} else if (state.mValues) {
			state.selectAllIndeterminate = true;
		}
	}, [state.mValues, state.amountOptions]);

	onUpdate(() => {
		state.mOptions = props.options;
		state.amountOptions =
			props.options?.filter((option) => !option.isGroupTitle).length ?? 0;
	}, [props.options]);

	onUpdate(() => {
		state.mSearchValue = props.searchValue;
		if (props.searchValue) {
			const sValue = props.searchValue!; // <- workaround for Angular
			state.handleSearch(sValue);
		}
	}, [props.searchValue]);

	onUpdate(() => {
		if (props.options?.length) {
			state.mSelectedOptions = props.options?.filter(
				(option: CustomSelectOptionType) => {
					if (!option.value || !state.mValues?.['includes']) {
						return false;
					}

					return (
						!option.isGroupTitle &&
						state.mValues?.includes(option.value)
					);
				}
			);
		}
	}, [props.options, state.mValues]);

	onUpdate(() => {
		if (props.selectedLabels) {
			state.mSelectedLabels = props.selectedLabels;
			return;
		}

		if (state.mSelectedOptions?.length) {
			if (props.transformSelectedLabels) {
				// We need to add this to another ``const`` for Angular generated output to work
				const selectedOptions = state.mSelectedOptions;
				const transformFn = props.transformSelectedLabels!;
				state.mSelectedLabels = transformFn!(selectedOptions);
				return;
			}

			if (props.selectedType === 'amount') {
				state.mSelectedLabels = props.amountText
					? props.amountText
					: `${state.mSelectedOptions?.length} ${DEFAULT_SELECTED}`;
			} else {
				state.mSelectedLabels = state.mSelectedOptions
					?.map((option: CustomSelectOptionType) =>
						state.getOptionLabel(option)
					)
					.join(', ');
			}
		} else {
			state.mSelectedLabels = '';
		}
	}, [
		state.mSelectedOptions,
		props.selectedType,
		props.amountText,
		props.selectedLabels,
		props.transformSelectedLabels
	]);

	onUpdate(() => {
		if (props.onAmountChange) {
			props.onAmountChange(state.mSelectedOptions?.length ?? 0);
		}
	}, [state.mSelectedOptions]);

	onUpdate(() => {
		if (selectAllRef) {
			selectAllRef.indeterminate = Boolean(state.selectAllIndeterminate);
		}
	}, [state.selectAllIndeterminate, selectAllRef]);

	onUpdate(() => {
		state.mInvalidMessage =
			props.invalidMessage ||
			selectRef?.validationMessage ||
			DEFAULT_INVALID_MESSAGE;
	}, [selectRef, props.invalidMessage]);

	onUnMount(() => {
		state.mAbortController?.abort();
	});

	function satisfyReact(event: any) {
		// This is a function to satisfy React
		event.stopPropagation();
	}

	return (
		<div
			id={state.mId}
			ref={_ref}
			class={cls('db-custom-select', props.className)}
			aria-invalid={state.mValidity === 'invalid'}
			data-custom-validity={state.mValidity}
			data-width={props.formFieldWidth}
			data-variant={
				props.variant === 'floating' &&
				props.selectedType === 'tag' &&
				props.multiple
					? 'above'
					: props.variant
			}
			data-required={getBooleanAsString(props.required)}
			data-hide-asterisk={getHideProp(props.showRequiredAsterisk)}
			data-placement={props.placement}
			data-selected-type={props.multiple ? props.selectedType : 'text'}
			data-hide-label={getHideProp(props.showLabel)}
			data-icon={props.icon}
			data-show-icon={getBooleanAsString(props.showIcon)}>
			<label id={state.mLabelId}>
				{props.label ?? DEFAULT_LABEL}
				<select
					role="none"
					hidden
					id={state.mSelectId}
					tabIndex={-1}
					ref={selectRef}
					form={props.form}
					name={props.name}
					data-custom-validity={state.mValidity}
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
						id={state.mSummaryId}
						class="db-custom-select-form-field"
						aria-disabled={getBooleanAsString(props.disabled)}
						tabIndex={props.disabled ? -1 : undefined}
						aria-labelledby={state.mLabelId}>
						<Show when={state.mSelectedLabels?.length}>
							<span
								data-visually-hidden={getBooleanAsString(
									props.selectedType === 'tag'
								)}
								id={state.mSelectedLabelsId}>
								<Show when={props.selectedPrefix}>
									<span data-visually-hidden="true">
										{props.selectedPrefix}
									</span>
								</Show>
								{state.mSelectedLabels}
							</span>
						</Show>
						<Show when={props.selectedType === 'tag'}>
							<div>
								<For each={state.mSelectedOptions}>
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
									name={state.mId}
									form={state.mId}
									type="search"
									showLabel={false}
									value={state.mSearchValue}
									label={props.searchLabel ?? DEFAULT_LABEL}
									placeholder={
										props.searchPlaceholder ??
										props.searchLabel
									}
									ariaDescribedBy={
										state.mHasNoOptions || props.showLoading
											? state.mInfoTextId
											: undefined
									}
									onInput={(
										event: InputEvent<HTMLInputElement>
									) => state.handleSearch(event)}
								/>
							</div>
						</Show>

						<Show
							when={state.mHasNoOptions || props.showLoading}
							else={
								<>
									<Show when={state.selectAllEnabled}>
										<div>
											<div className="db-checkbox db-custom-select-list-item">
												<label>
													{/* We set a form name based on id for not sending checkboxes to a wrapping form */}
													<input
														ref={selectAllRef}
														form={state.mId}
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
										<For each={state.mOptions}>
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
													name={state.mId}
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
								id={state.mInfoTextId}
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
								name={state.mId}
								form={state.mId}
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
					(props.showClearSelection ?? true) && state.mValues?.length
				}>
				<DBButton
					icon="cross"
					variant="ghost"
					noText
					size="small"
					name={state.mId}
					form={state.mId}
					disabled={getBoolean(props.disabled, 'disabled')}
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
				id={state.mPlaceholderId}>
				{props.placeholder ?? props.label}
			</span>
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
