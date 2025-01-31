import { useState } from 'react';
import { DBTag } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/tag.json';
import { type DBTagProps } from '../../../../../output/react/src/components/tag/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getTag = ({
	semantic,
	disabled,
	children,
	icon,
	overflow,
	noText,
	behavior,
	emphasis,
	removeButton,
	checked,
	component,
	identifier
}: DBTagProps & {
	checked?: boolean;
	component?: 'button' | 'link' | 'radio' | 'checkbox';
	identifier?: string;
}) => {
	const [checkedState, setCheckedState] = useState<boolean>(checked ?? false);
	return (
		<DBTag
			semantic={semantic}
			icon={icon}
			noText={noText}
			behavior={behavior}
			emphasis={emphasis}
			overflow={overflow}
			removeButton={removeButton}
			onRemove={() => {
				// eslint-disable-next-line no-alert
				alert(children.toString());
			}}>
			{component === 'button' && <button>{children}</button>}
			{component === 'link' && <a href="#">{children}</a>}
			{component === 'checkbox' && (
				<label>
					<input
						type="checkbox"
						checked={checkedState}
						disabled={disabled}
						onChange={(event) => {
							setCheckedState(event.target.checked);
						}}
					/>
					{children}
				</label>
			)}
			{component === 'radio' && (
				<label>
					<input type="radio" checked={checked} name={identifier} />
					{children}
				</label>
			)}

			{!component && !overflow && <>{children}</>}
			{!component && overflow && <span>{children}</span>}
		</DBTag>
	);
};

const TagComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBTag"
			variants={getVariants(
				defaultComponentVariants,
				getTag,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default TagComponent;
