import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Backdrop',
	storybookNames: ['(Default) Strong', 'Weak', 'Invisible', 'No Backdrop'],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DrawerBackdrop() {
	// A non-modal drawer (backdrop none) opens via show(), which has no native
	// invoker command, so only that drawer is driven through the open prop.
	const [noBackdropOpen, setNoBackdropOpen] = useState<boolean>(false);

	return (
		<Fragment>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-backdrop-strong">
					Open: (Default) Strong
				</DBButton>
				<DBDrawer
					id="drawer-backdrop-strong"
					backdrop="strong"
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>(Default) Strong</h2>
						</DBDrawerHeader>
					}>
					(Default) Strong
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-backdrop-weak">
					Open: Weak
				</DBButton>
				<DBDrawer
					id="drawer-backdrop-weak"
					backdrop="weak"
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Weak</h2>
						</DBDrawerHeader>
					}>
					Weak
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-backdrop-invisible">
					Open: Invisible
				</DBButton>
				<DBDrawer
					id="drawer-backdrop-invisible"
					backdrop="invisible"
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Invisible</h2>
						</DBDrawerHeader>
					}>
					Invisible
				</DBDrawer>
			</div>
			<div>
				<DBButton onClick={() => setNoBackdropOpen(true)}>
					Open: No Backdrop
				</DBButton>
				<DBDrawer
					id="drawer-backdrop-none"
					backdrop="none"
					open={noBackdropOpen}
					onClose={() => setNoBackdropOpen(false)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>No Backdrop</h2>
						</DBDrawerHeader>
					}>
					No Backdrop
				</DBDrawer>
			</div>
		</Fragment>
	);
}
