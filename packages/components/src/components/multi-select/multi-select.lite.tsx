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
import { cls, delay, hasVoiceOver, stringPropVisible, uuid } from '../../utils';
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

useMetadata({});

useDefaultProps<DBMultiSelectProps>({});

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
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleClose: (event: 'close' | MouseEvent) => {
			if (detailsRef) {
				if (event === 'close') {
					detailsRef.open = false;
				} else {
					const target = event.target as HTMLElement;
					if (
						state._id &&
						!Boolean(
							detailsRef.contains(target) ||
								target.id.includes(state._id)
						)
					) {
						detailsRef.open = false;
						document.removeEventListener(
							'click',
							state.handleClose
						);
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
		handleToggleOpen: () => {
			if (
				props.enableClickOutside === undefined ||
				props.enableClickOutside
			) {
				if (typeof window !== 'undefined') {
					if (detailsRef?.open) {
						document.removeEventListener(
							'click',
							state.handleClose
						);
					} else {
						document.addEventListener('click', state.handleClose);
					}
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
			const summaries = detailsRef.getElementsByTagName('summary');
			if (summaries && summaries.length > 0) {
				summaries[0].setAttribute(
					'aria-describedby',
					state._descByIds ?? ''
				);
			}
		}
	}, [detailsRef, state._descByIds]);

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
		if (Boolean(state._options?.length)) {
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
		if (Boolean(state._selectedOptions?.length)) {
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
			data-notification-enabled={state._hasNoOptions ?? props.isLoading}>
			<select
				id={state._selectId}
				ref={selectRef}
				multiple
				value={state._values}
				// @ts-ignore
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
			<details ref={detailsRef}>
				{props.children}
				<Show when={props.options}>
					<DBMultiSelectFormField
						onClick={() => state.handleToggleOpen()}>
						<Show
							when={
								props.selectedType !== 'tag' &&
								Boolean(state._selectedLabels?.length)
							}>
							<span>{state._selectedLabels}</span>
						</Show>
						<Show when={props.selectedType == 'tag'}>
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
											behaviour="removable">
											{state.getOptionLabel(option)}
										</DBTag>
									)}
								</For>
							</div>
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
								behaviour="permanent"
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
						<Show
							when={
								!Boolean(state._hasNoOptions ?? props.isLoading)
							}>
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
					selectRef?.validationMessage ??
					DEFAULT_INVALID_MESSAGE}
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
