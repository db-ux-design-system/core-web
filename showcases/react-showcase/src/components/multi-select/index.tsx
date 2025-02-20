import { useState } from 'react';
import { DBMultiSelect } from '../../../../../output/react/src';
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
	showLabel
}: DBMultiSelectProps) => {
	const [mValue, setValue] = useState<string[] | undefined>(values);

	return (
		<DBMultiSelect
			label={children}
			options={options}
			variant={variant}
			message={message}
			required={required}
			placeholder={placeholder}
			showLabel={showLabel}
			selectAllLabel="Select all"
			deSelectAllLabel="Deselect all"
			searchLabel="Search"
			selectedType={selectedType}
			tagWrapping={tagWrapping}
			width={width}
			noResultsText="No matching filter"
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
