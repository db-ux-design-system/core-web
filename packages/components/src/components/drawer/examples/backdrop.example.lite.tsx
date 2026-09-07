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
					commandfor="drawer-backdrop-strong">
					Open: (Default) Strong
				</DBButton>
				<DBDrawer
					id="drawer-backdrop-strong"
					backdrop="strong"
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							(Default) Strong
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
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							Weak
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
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							Invisible
						</DBDrawerHeader>
					}>
					Invisible
				</DBDrawer>
			</div>
			<div>
				<DBButton command="show" commandfor="drawer-backdrop-none">
					Open: No Backdrop
				</DBButton>
				<DBDrawer
					id="drawer-backdrop-none"
					backdrop="none"
					open={openIndex === 3}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							No Backdrop
						</DBDrawerHeader>
					}>
					No Backdrop
				</DBDrawer>
			</div>
		</Fragment>
	);
}
