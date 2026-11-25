import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBDrawer from '../../drawer/drawer.lite';
import DBTooltip from '../tooltip.lite';
import { StorybookTooltipArgTypes } from './_tooltip.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookTooltipArgTypes
});

/**
 * Fixture for the cross-framework interaction e2e tests
 * (see showcases/e2e/tooltip/tooltip-interaction.spec.ts).
 * Focusing the button opens its tooltip.
 *
 * The drawer is closed on page load and contains a tooltip with a long text.
 * Its position must not be computed while the drawer is closed, so the first
 * hover after opening the drawer places it next to its trigger (#8873).
 */
export default function TooltipInteraction() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<Fragment>
			<div>
				<DBButton
					aria-describedby="interaction-tooltip"
					data-testid="button">
					Button
					<DBTooltip
						animation="disabled"
						id="interaction-tooltip"
						data-testid="tooltip">
						Test
					</DBTooltip>
				</DBButton>
			</div>
			<div>
				<DBButton
					data-sb-ignore="true"
					data-testid="open-drawer"
					onClick={() => setOpen(true)}>
					Open drawer
				</DBButton>
				<DBDrawer
					data-sb-ignore="true"
					open={open}
					onClose={() => setOpen(false)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							Drawer
						</DBDrawerHeader>
					}>
					<DBButton
						aria-describedby="drawer-tooltip"
						data-testid="drawer-tooltip-button">
						Hover me
						<DBTooltip
							animation="disabled"
							id="drawer-tooltip"
							data-testid="drawer-tooltip">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</DBTooltip>
					</DBButton>
				</DBDrawer>
			</div>
		</Fragment>
	);
}
