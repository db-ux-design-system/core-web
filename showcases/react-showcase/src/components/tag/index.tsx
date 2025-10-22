import { useState } from 'react';
import {
	DBButton,
	DBCheckbox,
	DBLink,
	DBRadio,
	DBTag,
	getBoolean
} from '../../../../../output/react/src';
import { type DBTagProps } from '../../../../../output/react/src/components/tag/model';
import defaultComponentVariants from '../../../../shared/tag.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

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
	identifier,
	content,
	showCheckState,
	lineBreak,
	showIcon,
	dbComponents
}: Omit<DBTagProps, 'disabled'> & {
	disabled?: boolean;
	checked?: boolean;
	component?: 'button' | 'link' | 'radio' | 'checkbox';
	dbComponents?: boolean;
	identifier?: string;
	lineBreak?: boolean;
}) => {
	const [checkedState, setCheckedState] = useState<boolean>(checked ?? false);

	if (lineBreak) {
		return <i className="line-break" />;
	}

	return (
		<DBTag
			semantic={semantic}
			icon={icon}
			noText={noText}
			behavior={behavior}
			emphasis={emphasis}
			overflow={overflow}
			removeButton={removeButton}
			showCheckState={showCheckState}
			showIcon={showIcon}
			content={
				content ? (
					<div className="default-content-slot">Swap Slot</div>
				) : undefined
			}
			onRemove={() => {
				// eslint-disable-next-line no-alert
				alert(children.toString());
			}}>
			{component === 'button' &&
				(dbComponents ? (
					<DBButton>{children}</DBButton>
				) : (
					<button>{children}</button>
				))}
			{component === 'link' &&
				(dbComponents ? (
					<DBLink href="#">{children}</DBLink>
				) : (
					<a href="#">{children}</a>
				))}
			{component === 'checkbox' &&
				(dbComponents ? (
					<DBCheckbox
						label={children}
						checked={checkedState}
						disabled={getBoolean(disabled)}
						onChange={(event) => {
							setCheckedState(event.target.checked);
						}}
					/>
				) : (
					<>
						<label>
							<input
								type="checkbox"
								checked={checkedState}
								disabled={getBoolean(disabled)}
								onChange={(event) => {
									setCheckedState(event.target.checked);
								}}
							/>
							{children}
						</label>
					</>
				))}
			{component === 'radio' &&
				(dbComponents ? (
					<DBRadio
						label={children}
						name={identifier}
						checked={checked}
					/>
				) : (
					<>
						<label>
							<input
								type="radio"
								checked={checked}
								name={identifier}
							/>
							{children}
						</label>
					</>
				))}

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
