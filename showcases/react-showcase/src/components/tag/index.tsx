import { useState } from 'react';
import {
	DBButton,
	DBCheckbox,
	DBLink,
	DBRadio,
	DBTag
} from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/tag.json';
import { type DBTagProps } from '../../../../../output/react/src/components/tag/model';
import { getVariants } from '../data';

const getTag = ({
	variant,
	disabled,
	children,
	icon,
	overflow,
	noText,
	behaviour,
	emphasis,
	removeButton,
	checked,
	component
}: DBTagProps & {
	checked?: boolean;
	component?: 'button' | 'link' | 'radio' | 'checkbox';
}) => {
	const [checkedState, setCheckedState] = useState<boolean>(checked ?? false);
	return (
		<DBTag
			variant={variant}
			disabled={disabled}
			icon={icon}
			noText={noText}
			behaviour={behaviour}
			emphasis={emphasis}
			overflow={overflow}
			removeButton={removeButton}
			onRemove={() => {
				// eslint-disable-next-line no-alert
				alert(children.toString());
			}}>
			{component === 'button' && <DBButton>{children}</DBButton>}
			{component === 'link' && <DBLink href="#">{children}</DBLink>}
			{component === 'checkbox' && (
				<DBCheckbox
					checked={checkedState}
					onChange={(event) => {
						setCheckedState(event.target.checked);
					}}>
					{children}
				</DBCheckbox>
			)}
			{component === 'radio' && (
				<DBRadio checked={checked} name="radio">
					{children}
				</DBRadio>
			)}

			{!component && !overflow && <>{children}</>}
			{!component && overflow && <span>{children}</span>}
		</DBTag>
	);
};

const TagComponent = () => {
	return (
		<DefaultComponent
			title="DBTag"
			variants={getVariants(
				defaultComponentVariants,
				getTag
			)}></DefaultComponent>
	);
};

export default TagComponent;
