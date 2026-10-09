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
 Fixture for the cross-framework interaction e2e tests
 (see showcases/e2e/drawer/drawer-interaction.spec.ts).
 A drawer whose open state is controlled by external buttons, so opening and
 closing (via the header close button, which fires onClose) is observable.

 It also sets the deprecated `rounded` property so the e2e spec can assert the
 `data-rounded` styling still applies. `rounded` has no public showcase example
 (it is deprecated and should not be advertised to consumers), so this fixture
 is the only place that keeps it under regression coverage.
 */
export default function DrawerInteraction() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div>
			{/* Excluded from story generation: it has no nested DBDrawer, so
			 * the Storybook plugin's component lookup for this story would
			 * fail on it. It still renders in the showcase/e2e output. */}
			<DBButton
				data-sb-ignore="true"
				data-testid="open-button"
				onClick={() => setOpen(true)}>
				Open
			</DBButton>
			<DBDrawer
				open={open}
				rounded
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
