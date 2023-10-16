import { DBTooltip, DBButton } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/tooltip.json';
import type { DBTooltipProps } from '../../../../../output/react/src/components/tooltip/model';
import { getVariants } from '../data';

const getTooltip = ({
	children,
	width,
	emphasis,
	placement,
	delay,
	content,
	behaviour,
	variant
}: DBTooltipProps & { content: string }) => (
	<DBButton>
		{children}
		<DBTooltip
			width={width}
			emphasis={emphasis}
			placement={placement}
			behaviour={behaviour}
			delay={delay}
			variant={variant}>
			{content}
		</DBTooltip>
	</DBButton>
);

const TooltipComponent = () => {
	return (
		<DefaultComponent
			title="DBTooltip"
			variants={getVariants(
				defaultComponentVariants,
				getTooltip
			)}></DefaultComponent>
	);
};

export default TooltipComponent;
