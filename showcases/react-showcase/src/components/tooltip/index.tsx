import { DBButton, DBTooltip } from '../../../../../output/react/src';
import type { DBTooltipProps } from '../../../../../output/react/src/components/tooltip/model';
import defaultComponentVariants from '../../../../shared/tooltip.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getTooltip = ({
	children,
	width,
	emphasis,
	placement,
	delay,
	animation,
	showArrow
}: DBTooltipProps) => (
	<DBButton>
		{children}
		<DBTooltip
			width={width}
			emphasis={emphasis}
			placement={placement}
			animation={animation}
			delay={delay}
			showArrow={showArrow}>
			{children}
		</DBTooltip>
	</DBButton>
);

const TooltipComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBTooltip"
			variants={getVariants(
				defaultComponentVariants,
				getTooltip,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default TooltipComponent;
