import { DBCustomSelect, DBInfotext } from '@components';
import type { DBCustomSelectProps } from '@components/src/components/custom-select/model';
import { type CustomSelectOptionType } from '@db-ux/core-components/src/components/custom-select/model';
import { useState } from 'react';
import defaultComponentVariants from '../../../../shared/custom-select.json';
import type { BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getCustomSelect = ({
	children,
	message,
	variant,
	values,
	required,
	options,
	placeholder,
	selectedType,
	formFieldWidth,
	showLabel,
	placement,
	lineBreak,
	info,
	showLoading,
	showNoResults,
	showSelectAll,
	showClearSelection,
	showSearch,
	noResultsText,
	loadingText,
	multiple,
	dropdownWidth,
	icon,
	showIcon,
	showMessage,
	disabled,
	id,
	searchValue,
	selectedLabels,
	transformSelectedLabels,
	searchFilter,
	validMessage,
	validation,
	invalidMessage,
	showRequiredAsterisk,
	removeTagsTexts
}: DBCustomSelectProps & {
	lineBreak?: boolean;
	info?: boolean;
}) => {
	const [mValue, setValue] = useState<string[] | undefined>(values);

	const getTransformSelectedLabels = (selectedOptions?: any): string => {
		return selectedOptions
			.map((option: any) => option.value.at(-1))
			.join(', ');
	};

	const getSearchFilter = (
		option: CustomSelectOptionType,
		_: string
	): boolean => option.value === 'Option 1';

	if (info) {
		return (
			<DBInfotext size="small" semantic="informational">
				{children}
			</DBInfotext>
		);
	}

	if (lineBreak) {
		return <i className="line-break" />;
	}

	return (
		<DBCustomSelect
			showRequiredAsterisk={showRequiredAsterisk}
			disabled={disabled}
			icon={icon}
			showMessage={showMessage}
			showIcon={showIcon}
			dropdownWidth={dropdownWidth}
			showClearSelection={showClearSelection}
			showSelectAll={showSelectAll}
			showSearch={showSearch}
			showLoading={showLoading}
			showNoResults={showNoResults}
			multiple={multiple}
			label={children}
			listLabel={`${id}-${children}`}
			options={options}
			variant={variant}
			message={message}
			required={required}
			placeholder={placeholder}
			showLabel={showLabel}
			placement={placement}
			selectAllLabel="Select all"
			searchLabel="Search"
			selectedType={selectedType}
			formFieldWidth={formFieldWidth}
			loadingText={loadingText}
			noResultsText={noResultsText ?? 'No matching filter'}
			values={mValue}
			searchValue={searchValue}
			selectedLabels={selectedLabels}
			selectedPrefix="Selected"
			invalidMessage={invalidMessage}
			validMessage={validMessage}
			validation={validation}
			transformSelectedLabels={
				transformSelectedLabels ? getTransformSelectedLabels : undefined
			}
			searchFilter={searchFilter ? getSearchFilter : undefined}
			onOptionSelected={(value) => {
				setValue(value);
			}}
			removeTagsTexts={removeTagsTexts}
		/>
	);
};

const CustomSelectComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBCustomSelect"
			variants={getVariants(
				defaultComponentVariants,
				getCustomSelect,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default CustomSelectComponent;
