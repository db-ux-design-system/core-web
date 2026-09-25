import { useMetadata, useStore } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBPopover from '../popover.lite';
import { StorybookPopoverArgTypes } from './_popover.arg.types';

useMetadata({
	storybookTitle: 'Controlled',
	storybookNames: ['Default'],
	storybookArgTypes: StorybookPopoverArgTypes
});

type PopoverControlledState = {
	isOpen: boolean;
	toggle: () => void;
};

export default function PopoverControlled() {
	const state = useStore<PopoverControlledState>({
		isOpen: false,
		toggle: () => {
			state.isOpen = !state.isOpen;
		}
	});

	return (
		<DBPopover
			id="popover-controlled"
			open={state.isOpen}
			animation={false}
			trigger={
				<DBButton
					id="popover-controlled-trigger"
					onClick={() => state.toggle()}>
					Toggle popover
				</DBButton>
			}>
			The parent owns the open state
		</DBPopover>
	);
}
