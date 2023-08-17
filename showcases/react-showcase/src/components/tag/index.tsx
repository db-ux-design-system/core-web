import { DBTag } from '../../../../../output/react/src';
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
	checked,
	noText,
	behaviour,
	emphasis,
	label,
	removeButton,
	name
}: DBTagProps) => (
	<DBTag
		variant={variant}
		disabled={disabled}
		icon={icon}
		noText={noText}
		behaviour={behaviour}
		emphasis={emphasis}
		checked={checked}
		label={label}
		overflow={overflow}
		removeButton={removeButton}
		name={name}
		onRemove={() => {
			// eslint-disable-next-line no-alert
			alert(children.toString());
		}}>
		{children}
	</DBTag>
);

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
