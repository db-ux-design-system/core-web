import { DBTooltip, DBButton } from '../../../../../output/react/src';
import DefaultComponent from '../default-component';
import defaultComponentVariants from '../../../../shared/tooltip.json';
import type { DBTooltipProps } from '../../../../../output/react/src/components/tooltip/model';
import { getVariants } from '../data';
import { type BaseComponentProps } from '../base-component-data';

const getTooltip = ({
	children,
	width,
	emphasis,
	placement,
	delay,
	content,
	animation,
	showArrow
}: DBTooltipProps & { content: string }) => (
	<DBButton>
		{children}
		<DBTooltip
			width={width}
			emphasis={emphasis}
			placement={placement}
			animation={animation}
			delay={delay}
			showArrow={showArrow}>
			{content}
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
