import { useState } from 'react';
import {
	DBCustomSelect,
	DBInfotext,
	uuid
} from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/custom-select.json';
import type { DBCustomSelectProps } from '../../../../../output/react/src/components/custom-select/model';
import { getVariants } from '../data';
import type { BaseComponentProps } from '../base-component-data';

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
	disabled
}: DBCustomSelectProps & {
	lineBreak?: boolean;
	info?: boolean;
}) => {
	const [mValue, setValue] = useState<string[] | undefined>(values);

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
			ariaListLabel={uuid()}
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
			onOptionSelected={(val) => {
				setValue(val);
			}}
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
