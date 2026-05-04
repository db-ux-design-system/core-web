import { useMetadata } from '@builder.io/mitosis';
import { DBButton } from '../../button/index';
import { DBPopover } from '../index';
import { FigmaPopoverProps, popovers } from './popover.figma';

useMetadata({
	figma: popovers
});

export default function PopoverFigmaLite(props: FigmaPopoverProps) {
	return (
		<DBPopover
			spacing={props.spacing}
			trigger={<DBButton>Trigger</DBButton>}>
			Content
		</DBPopover>
	);
}
