import { DBButton, DBPopover } from '@components';
import type { DBPopoverProps } from '@components/src/components/popover/model';
import defaultComponentVariants from '../../../../shared/popover.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

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
		trigger={<DBButton>{children}</DBButton>}
		width={width}
		gap={gap}
		spacing={spacing}
		placement={placement}
		animation={animation}
		delay={delay}
		id={id}>
		{content ?? (
			<>
				<ul className="popover-list">
					<li>Popover Custom Item 1</li>
					<li>Popover Custom Item 2</li>
				</ul>
				<DBButton>Popover Custom Item 3</DBButton>
			</>
		)}
	</DBPopover>
);

const PopoverComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBPopover"
			variants={getVariants(
				defaultComponentVariants,
				getPopover,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default PopoverComponent;
