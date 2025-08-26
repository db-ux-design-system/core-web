import { DBButton, DBTooltip } from '../../../../../output/react/src';
import type { DBTooltipProps } from '../../../../../output/react/src/components/tooltip/model';
import defaultComponentVariants from '../../../../shared/tooltip.json';
import { type BaseComponentProps } from '../base-component-data';
import type { ReactDefaultComponentVariants } from '../../../../shared/react-default-component-data';
import DefaultComponent from '../default-component';

const getTooltip = ({
	children,
	width,
	emphasis,
	placement,
	delay,
	animation,
	showArrow,
	buttonText
}: DBTooltipProps & { buttonText?: string }) => (
	<DBButton>
		{buttonText}
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

// Custom variant function for tooltips that separates button text from tooltip content
const getTooltipVariants = (
	defaultComponentVariants: ReactDefaultComponentVariants[]
): ReactDefaultComponentVariants[] =>
	defaultComponentVariants.map((variant) => ({
		...variant,
		examples: variant.examples.map((example) => ({
			...example,
			example: getTooltip({
				...example.props,
				id: example.props?.id ?? example.name,
				buttonText: example.name // Use example name for button text
				// children remains as the tooltip content from props
			})
		}))
	}));

const TooltipComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBTooltip"
			variants={getTooltipVariants(defaultComponentVariants)}></DefaultComponent>
	);
};

export default TooltipComponent;
