import { useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

/**
 * Fixture for the cross-framework interaction e2e tests
 * (see showcases/e2e/drawer/drawer-interaction.spec.ts).
 * A drawer whose open state is controlled by external buttons, so opening and
 * closing (via the header close button, which fires onClose) is observable.
 */
export default function DrawerInteraction() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div>
			<DBButton data-testid="open-button" onClick={() => setOpen(true)}>
				Open
			</DBButton>
			<DBDrawer
				open={open}
				onClose={() => setOpen(false)}
				header={
					<DBDrawerHeader closeButtonText="Close">
						Title
					</DBDrawerHeader>
				}>
				<span data-testid="drawer-content">Test</span>
			</DBDrawer>
		</div>
	);
}
