import { DBPopover, DBButton } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import defaultComponentVariants from '../../../../shared/popover.json';
import type { DBPopoverProps } from '../../../../../output/react/src/components/popover/model';
import { getVariants } from '../data';

const getPopover = ({
	id,
	children,
	width,
	gap,
	spacing,
	placement,
	delay,
	content,
	animation
}: DBPopoverProps & { content: string }) => (
	<DBButton describedbyid={id} type="button">
		{children}
		<DBPopover
			width={width}
			gap={gap}
			spacing={spacing}
			placement={placement}
			animation={animation}
			delay={delay}
			id={id}>
			{content}
		</DBPopover>
	</DBButton>
);

const PopoverComponent = () => {
	return (
		<DefaultComponent
			title="DBPopover"
			variants={getVariants(
				defaultComponentVariants,
				getPopover
			)}></DefaultComponent>
	);
};

export default PopoverComponent;
