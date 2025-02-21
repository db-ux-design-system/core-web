import {
	For,
	Fragment,
	onMount,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import {
	DBMultiSelectProps,
	DBMultiSelectState,
	MultiSelectOptionType
} from './model';
import {
	cls,
	delay,
	getHideProp,
	getSearchInput,
	hasVoiceOver,
	stringPropVisible,
	uuid
} from '../../utils';
import {
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
import { ChangeEvent } from '../../shared/model';
import { DBMultiSelectList } from '../multi-select-list';
import { DBMultiSelectListItem } from '../multi-select-list-item';
import { DBMultiSelectDropdown } from '../multi-select-dropdown';
import { DBMultiSelectHeader } from '../multi-select-header';
import { DBNotification } from '../notification';
import { DBInfotext } from '../infotext';
import { DBMultiSelectFormField } from '../multi-select-form-field';
import { DBTag } from '../tag';
import { DBButton } from '../button';
import { DBTooltip } from '../tooltip';

useMetadata({});

useDefaultProps<DBMultiSelectProps>({
	clearSelectionLabel: 'Clear selection',
	showClearSelection: true
});

// TODO: Tags remove lose focus
// TODO: Check all paddings/margins again
// TODO: Test composition instead of config
// TODO: Test with screenreader

export default function DBMultiSelect(props: DBMultiSelectProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement>(null);
	const detailsRef = useRef<HTMLDetailsElement>(null);
	const selectRef = useRef<HTMLSelectElement>(null);
	// jscpd:ignore-start
	const state: DBMultiSelectState = useStore<DBMultiSelectState>({
		_id: undefined,
		_messageId: undefined,
		_validMessageId: undefined,
		_invalidMessageId: undefined,
		_selectId: undefined,
		_labelId: undefined,
		_placeholderId: undefined,
		// Workaround for Vue output: TS for Vue would think that it could be a function, and by this we clarify that it's a string
		_descByIds: '',
		_selectedLabels: '',
		_voiceOverFallback: '',
		_selectedOptions: [],
		headerEnabled: false,
		searchEnabled: false,
		amountOptions: 0,
		_values: [],
		_options: [],
		_hasNoOptions: false,
		getOptionLabel: (option: MultiSelectOptionType) => {
			return option.label ?? option.value?.toString() ?? '';
		},
		getOptionChecked: (value?: string) => {
			if (value && state._values && state._values.includes) {
				return state._values?.includes(value);
			}

			return false;
		},
		handleArrowDownUp: (event: KeyboardEvent) => {
			if (detailsRef.open) {
				if (document) {
					const activeElement = document.activeElement;
					if (activeElement) {
						// 1. we check if we are currently focusing a checkbox in the multiselect dropdown
						const isCheckbox = activeElement.classList.contains(
							'db-multi-select-list-item-checkbox'
						);

						if (isCheckbox) {
							const listElement = activeElement?.closest('li');
							if (event.key === 'ArrowDown') {
								if (listElement?.nextElementSibling) {
									listElement?.nextElementSibling
										.querySelector('input')
										?.focus();
								}
							} else {
								if (listElement?.previousElementSibling) {
									listElement?.previousElementSibling
										.querySelector('input')
										?.focus();
								} else {
									// We are on the top checkbox, we need to move to the search
									// or to the summary if no search is available
									const search = getSearchInput(detailsRef);
									delay(() => {
										(search ?? detailsRef).focus();
									}, 100);
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
								detailsRef.querySelector('summary')?.focus();
							} else {
								// 3. Otherwise, we need to move to the first checkbox
								state.handleFocusFirstDropdownCheckbox();
							}
						}
					}
				}

				event.stopPropagation();
				event.preventDefault();
			} else if (event.key === 'ArrowDown') {
				// Open dropdown with arrows see https://www.w3.org/WAI/ARIA/apg/patterns/combobox/#keyboardinteraction
				state.handleToggleOpen();
				detailsRef.open = true;
				state.handleOpenByKeyboardFocus();
				event.stopPropagation();
				event.preventDefault();
			}
		},
		handleKeyboardPress: (event: KeyboardEvent) => {
			if (event.key === 'Escape' && detailsRef.open) {
				state.handleClose('close');
				detailsRef.querySelector('summary')?.focus();
			} else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
				state.handleArrowDownUp(event);
			} else if (
				event.key === 'ArrowRight' ||
				event.key === 'ArrowLeft'
			) {
				// TODO: Handle ArrowRight and ArrowLeft
				if (detailsRef.open) {
				} else {
				}
			}
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleClose: (event: 'close' | MouseEvent) => {
			if (detailsRef) {
				if (event === 'close') {
					detailsRef.open = false;
					state.handleRemoveDocumentEvents();
				} else {
					const target = event.target as HTMLElement;
					const relatedTarget = event.relatedTarget as HTMLElement;
					if (
						!(
							target === detailsRef ||
							(relatedTarget &&
								detailsRef.contains(relatedTarget))
						)
					) {
						detailsRef.open = false;
						state.handleRemoveDocumentEvents();
					}
				}
			}
		},
		handleSelect: (value?: string) => {
			if (value) {
				if (state._values?.includes(value)) {
					state._values = state._values?.filter(
						(v: string) => v !== value
					);
				} else {
					state._values = [...(state._values || []), value];
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
							.filter((option) => !option.isGroup)
							.map((option) => option.value ?? '')
					: [];
			}
			state._internalChangeTimestamp = new Date().getTime();
		},
		handleRemoveDocumentEvents: () => {
			if (typeof document !== 'undefined') {
				document.removeEventListener('click', state.handleClose);
			}
		},
		handleToggleOpen: () => {
			// Add "popover" close to details summary
			if (
				props.enableClickOutside === undefined ||
				props.enableClickOutside
			) {
				if (typeof document !== 'undefined') {
					if (detailsRef?.open) {
						state.handleRemoveDocumentEvents();
					} else {
						document.addEventListener('click', state.handleClose);
					}
				}
			}
		},
		handleFocusFirstDropdownCheckbox: () => {
			if (detailsRef) {
				const checkbox = detailsRef.querySelector<HTMLInputElement>(
					`input[type="checkbox"]:not([class="db-multi-select-header-select-all"])`
				);
				if (checkbox) {
					delay(() => {
						// Takes some time until element can be focused
						checkbox.focus();
					}, 100);
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
								!option.isGroup &&
								state
									.getOptionLabel(option)
									.toLowerCase()
									.includes(filterText.toLowerCase())
						);
		},
		handleClearAll: () => {
			state._values = [];
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
	});

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
				state._descByIds = messageId;
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
					state.handleToggleOpen();
					state.handleOpenByKeyboardFocus(true);
				});
				summary.addEventListener('keydown', (event: KeyboardEvent) => {
					if (event.code === 'Space' && !detailsRef.open) {
						state.handleOpenByKeyboardFocus();
					}
				});
			}
		}
	}, [detailsRef]);

	onUpdate(() => {
		if (props.hasNoResults !== undefined) {
			state._hasNoOptions = props.hasNoResults;
		} else if (state._options) {
			state._hasNoOptions = state._options.length === 0;
		}
	}, [props.hasNoResults, state._options]);

	onUpdate(() => {
		// Enable header if
		// 1. User set it
		// 2. User disables click outside
		// 3. more than 5 options
		state.headerEnabled =
			props.enableHeader ||
			(props.enableClickOutside !== undefined &&
				!props.enableClickOutside) ||
			state.amountOptions > 5;
	}, [props.enableClickOutside, props.enableHeader, state.amountOptions]);

	onUpdate(() => {
		state.searchEnabled = props.enableSearch || state.amountOptions > 9;
	}, [props.enableSearch, state.amountOptions]);

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
		/* For a11y reasons we need to map the correct message with the select */
		if (!selectRef?.validity.valid || props.validation === 'invalid') {
			state._validity = 'invalid';
			state._descByIds = state._invalidMessageId;
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
			state._descByIds = state._validMessageId;
			if (hasVoiceOver()) {
				state._voiceOverFallback =
					props.validMessage ?? DEFAULT_VALID_MESSAGE;
				delay(() => (state._voiceOverFallback = ''), 1000);
			}
		} else if (props.message) {
			state._validity = 'no-validation';
			state._descByIds = state._messageId;
		} else {
			state._validity = 'no-validation';
			state._descByIds = state._placeholderId;
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
			props.options?.filter((option) => !option.isGroup).length ?? 0;
	}, [props.options]);

	onUpdate(() => {
		if (state._options?.length) {
			state._selectedOptions = state._options?.filter(
				(option: MultiSelectOptionType) => {
					if (!option.value || !state._values?.['includes']) {
						// TODO: Why is there no includes here
						return false;
					}

					return (
						!option.isGroup && state._values?.includes(option.value)
					);
				}
			);
		}
	}, [state._options, state._values]);

	onUpdate(() => {
		if (state._selectedOptions?.length) {
			if (props.selectedType !== 'tag') {
				if (props.selectedType === 'amount') {
					state._selectedLabels = props.getAmountText
						? props.getAmountText(
								state._selectedOptions?.length ?? 0
							)
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
		} else {
			state._selectedLabels = '';
		}
	}, [state._selectedOptions, props.selectedType, props.getAmountText]);

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
			data-selected-type={props.selectedType}
			data-wrapping={props.tagWrapping}
			data-header-enabled={state.headerEnabled}
			data-notification-enabled={state._hasNoOptions ?? props.isLoading}
			data-hide-label={getHideProp(props.showLabel)}>
			<select
				id={state._selectId}
				ref={selectRef}
				multiple
				value={state._values}
				// @ts-expect-error - Satisfy React
				readOnly={true}
				required={props.required}
				hidden>
				<For each={state._options}>
					{(option: MultiSelectOptionType) => (
						<Fragment
							key={(
								option.id ??
								option.value ??
								uuid()
							).toString()}>
							<option
								disabled={option.disabled}
								value={option.value}>
								{state.getOptionLabel(option)}
							</option>
						</Fragment>
					)}
				</For>
			</select>
			<label htmlFor={state._selectId} id={state._labelId}>
				{props.label ?? DEFAULT_LABEL}
			</label>
			<details
				ref={detailsRef}
				onBlur={(event) => state.handleClose(event)}
				onKeyDown={(event) => state.handleKeyboardPress(event)}>
				{props.children}
				<Show when={props.options}>
					<DBMultiSelectFormField>
						<Show
							when={
								props.selectedType !== 'tag' &&
								Boolean(state._selectedLabels?.length)
							}>
							<span>{state._selectedLabels}</span>
						</Show>
						<Show when={props.selectedType === 'tag'}>
							<div>
								<For each={state._selectedOptions}>
									{(option: MultiSelectOptionType) => (
										<DBTag
											removeButton={
												props.removeTagsText
													? props.removeTagsText(
															option
														)
													: `${DEFAULT_REMOVE} ${state.getOptionLabel(option)}`
											}
											onRemove={() =>
												state.handleSelect(option.value)
											}
											emphasis="strong"
											behavior="removable">
											{state.getOptionLabel(option)}
										</DBTag>
									)}
								</For>
							</div>
						</Show>
						<Show
							when={
								props.showClearSelection &&
								state._values?.length
							}>
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
					</DBMultiSelectFormField>
					<DBMultiSelectDropdown
						header={
							<DBMultiSelectHeader
								variant={
									state.searchEnabled ? 'search' : 'default'
								}
								closeButtonId={props.closeButtonId}
								closeButtonText={props.closeButtonText}
								deSelectAllLabel={props.deSelectAllLabel}
								searchLabel={props.searchLabel}
								searchPlaceholder={props.searchPlaceholder}
								selectAllLabel={props.selectAllLabel}
								checked={state.selectAllChecked}
								indeterminate={state.selectAllIndeterminate}
								onSelectAll={() => {
									state.handleSelectAll();
								}}
								onSearch={(
									event: ChangeEvent<HTMLInputElement>
								) => {
									state.handleSearch(event);
								}}
								onClose={() => {
									state.handleClose('close');
								}}
							/>
						}
						notification={
							<DBNotification
								closeable={false}
								semantic={
									state._hasNoOptions
										? 'warning'
										: 'informational'
								}>
								{(state._hasNoOptions
									? props.noResultsText
									: props.loadingText) ?? DEFAULT_MESSAGE}
							</DBNotification>
						}>
						<Show when={!(state._hasNoOptions ?? props.isLoading)}>
							<DBMultiSelectList>
								<For each={state._options}>
									{(option: MultiSelectOptionType) => (
										<Fragment
											key={(
												option.id ??
												option.value ??
												uuid()
											).toString()}>
											<DBMultiSelectListItem
												groupLabel={
													option.isGroup
														? state.getOptionLabel(
																option
															)
														: undefined
												}
												name={props.name}
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
												{state.getOptionLabel(option)}
											</DBMultiSelectListItem>
										</Fragment>
									)}
								</For>
							</DBMultiSelectList>
						</Show>
					</DBMultiSelectDropdown>
				</Show>
			</details>

			<span id={state._placeholderId}>
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
