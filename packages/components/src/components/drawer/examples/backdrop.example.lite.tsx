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
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-backdrop-strong"
					onClick={() => setOpenIndex(0)}>
					Open: (Default) Strong
				</DBButton>
				<DBDrawer
					id="drawer-backdrop-strong"
					backdrop="strong"
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}
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
					commandfor="drawer-backdrop-weak"
					onClick={() => setOpenIndex(1)}>
					Open: Weak
				</DBButton>
				<DBDrawer
					id="drawer-backdrop-weak"
					backdrop="weak"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
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
					commandfor="drawer-backdrop-invisible"
					onClick={() => setOpenIndex(2)}>
					Open: Invisible
				</DBButton>
				<DBDrawer
					id="drawer-backdrop-invisible"
					backdrop="invisible"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Invisible</h2>
						</DBDrawerHeader>
					}>
					Invisible
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show"
					commandfor="drawer-backdrop-none"
					onClick={() => setOpenIndex(3)}>
					Open: No Backdrop
				</DBButton>
				<DBDrawer
					id="drawer-backdrop-none"
					backdrop="none"
					open={openIndex === 3}
					onClose={() => setOpenIndex(-1)}
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
