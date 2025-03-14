import { useState } from 'react';
import { DBCustomSelect, DBInfotext } from '../../../../../output/react/src';
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
	width,
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
	showIcon
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
			icon={icon}
			showIcon={showIcon}
			dropdownWidth={dropdownWidth}
			showClearSelection={showClearSelection}
			showSelectAll={showSelectAll}
			showSearch={showSearch}
			showLoading={showLoading}
			showNoResults={showNoResults}
			multiple={multiple}
			label={children}
			options={options}
			variant={variant}
			message={message}
			required={required}
			placeholder={placeholder}
			showLabel={showLabel}
			placement={placement}
			selectAllLabel="Select all"
			deSelectAllLabel="Deselect all"
			searchLabel="Search"
			selectedType={selectedType}
			width={width}
			loadingText={loadingText}
			noResultsText={noResultsText ?? 'No matching filter'}
			values={mValue}
			onSelect={(val) => {
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
