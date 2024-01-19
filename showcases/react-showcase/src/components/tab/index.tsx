import { DBTab } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/tab.json';
import type { DBTabProps } from '../../../../../output/react/src/components/tab/model';
import { getVariants } from '../data';

const getTab = ({
	children,
	active,
	label,
	noText,
	icon,
	iconAfter,
	width,
	alignment
}: DBTabProps) => (
	<DBTab
		active={active}
		label={label}
		noText={noText}
		icon={icon}
		iconAfter={iconAfter}
		width={width}
		alignment={alignment}>
		{children}
	</DBTab>
);

const TabComponent = () => {
	return (
		<DefaultComponent
			title="DBTab"
			variants={getVariants(
				defaultComponentVariants,
				getTab
			)}></DefaultComponent>
	);
};

export default TabComponent;
