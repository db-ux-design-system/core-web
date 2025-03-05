import { useState } from 'react';
import { DBMultiSelect, DBInfotext } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/multi-select.json';
import type { DBMultiSelectProps } from '../../../../../output/react/src/components/multi-select/model';
import { getVariants } from '../data';

const getMultiSelect = ({
	children,
	message,
	variant,
	values,
	required,
	options,
	placeholder,
	selectedType,
	tagWrapping,
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
	dropdownWidth
}: DBMultiSelectProps & {
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
		<DBMultiSelect
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
				console.log('React app onSelect', val);
				setValue(val);
			}}
		/>
	);
};

const MultiSelectComponent = () => {
	return (
		<DefaultComponent
			title="DBMultiSelect"
			variants={getVariants(
				defaultComponentVariants,
				getMultiSelect
			)}></DefaultComponent>
	);
};

export default MultiSelectComponent;
