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
	<DBPopover
		slotTrigger={<DBButton>{children}</DBButton>}
		width={width}
		gap={gap}
		spacing={spacing}
		placement={placement}
		animation={animation}
		delay={delay}
		id={id}>
		{content ?? (
			<ul className="popover-list">
				<li>Popover Custom Item 1</li>
				<li>Popover Custom Item 2</li>
				<li>
					<DBButton>Popover Custom Item 3</DBButton>
				</li>
			</ul>
		)}
	</DBPopover>
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
