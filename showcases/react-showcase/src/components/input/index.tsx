import {
	DBInput,
	type LabelVariantType,
	type ValueLabelType
} from '@components';
import { type DBInputProps } from '@components/src/components/input/model';
import defaultComponentVariants from '../../../../shared/input.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getDataList = (
	variant?: LabelVariantType
): string[] | ValueLabelType[] => {
	if (variant === 'floating') {
		return ['Test 1', 'Test 2'];
	}

	return [
		{ value: 'test1', label: 'Test 1' },
		{ value: 'test2', label: 'Test 2' }
	];
};

const getInput = ({
	label,
	value,
	type,
	minLength,
	required,
	disabled,
	iconTrailing,
	showIcon,
	showIconTrailing,
	icon,
	children,
	message,
	variant,
	readOnly,
	dataList,
	showLabel,
	showMessage,
	validMessage,
	validation,
	invalidMessage,
	maxLength,
	max,
	min
}: DBInputProps & { dataList: boolean }) => {
	return (
		<DBInput
			label={label}
			message={message}
			placeholder={children}
			variant={variant}
			showLabel={showLabel}
			defaultValue={value}
			type={type}
			minLength={minLength}
			required={required}
			disabled={disabled}
			readOnly={readOnly}
			iconTrailing={iconTrailing}
			showIconTrailing={showIconTrailing}
			maxLength={maxLength}
			max={max}
			min={min}
			icon={icon}
			showIcon={showIcon}
			showMessage={showMessage}
			invalidMessage={invalidMessage}
			validMessage={validMessage}
			validation={validation}
			dataList={dataList ? getDataList(variant) : undefined}
		/>
	);
};

const InputComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title={'DBInput'}
			variants={getVariants(
				defaultComponentVariants,
				getInput,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default InputComponent;
