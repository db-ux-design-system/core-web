import { DBTab } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/tab.json';
import type { DBTabProps } from '../../../../../output/react/src/components/tab/model';
import { getVariants } from '../data';

const getTab = ({
	children,
	active,
	noText,
	icon,
	iconAfter,
	width,
	alignment,
	disabled
}: DBTabProps) => (
	<DBTab
		active={active}
		noText={noText}
		icon={icon}
		iconAfter={iconAfter}
		width={width}
		disabled={disabled}
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
