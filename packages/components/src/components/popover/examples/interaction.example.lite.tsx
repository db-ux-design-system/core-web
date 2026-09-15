import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBPopover from '../popover.lite';
import { StorybookPopoverArgTypes } from './_popover.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookPopoverArgTypes
});

/**
 * Fixtures for the cross-framework interaction e2e tests
 * (see showcases/e2e/popover/popover-interaction.spec.ts).
 *
 * "Uncontrolled" opens on trigger focus/hover. "Controlled" binds `open` to
 * external state, so focus/hover must not open it - only the external toggle
 * button does.
 */
export default function PopoverInteraction() {
	const state = useStore({
		open: false,
		toggle() {
			state.open = !state.open;
		}
	});

	return (
		<Fragment>
			<div class="padding-box">
				<DBPopover
					animation="disabled"
					data-testid="popover"
					trigger={<DBButton data-testid="button">Button</DBButton>}>
					Test
				</DBPopover>
			</div>
			<div class="padding-box">
				<DBButton data-testid="toggle" onClick={() => state.toggle()}>
					Toggle
				</DBButton>
				<DBPopover
					open={state.open}
					animation="disabled"
					data-testid="controlled-popover"
					trigger={
						<DBButton data-testid="controlled-button">
							Button
						</DBButton>
					}>
					Test
				</DBPopover>
			</div>
		</Fragment>
	);
}
