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
	variant,
	id
}: DBTooltipProps & { content: string }) => (
	<DBButton describedbyid={id}>
		{children}
		<DBTooltip
			width={width}
			emphasis={emphasis}
			placement={placement}
			behaviour={behaviour}
			delay={delay}
			variant={variant}
			id={id}>
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
