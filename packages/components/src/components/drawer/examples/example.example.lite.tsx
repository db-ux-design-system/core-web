import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBButton from '../../button/button.lite';
import DBDrawerFooter from '../../drawer-footer/drawer-footer.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBLink from '../../link/link.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Example',
	storybookNames: ['(Default) As modal', 'Inside', 'With slots'],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DrawerExample() {
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-example-modal">
					Open: (Default) As modal
				</DBButton>
				<DBDrawer
					id="drawer-example-modal"
					variant="modal"
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>(Default) As modal</h2>
						</DBDrawerHeader>
					}>
					(Default) As modal
				</DBDrawer>
			</div>
			<div>
				<DBButton command="show" commandfor="drawer-example-inside">
					Open: Inside
				</DBButton>
				<DBDrawer
					id="drawer-example-inside"
					variant="inside"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Inside</h2>
						</DBDrawerHeader>
					}>
					Inside
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-example-slots">
					Open: With slots
				</DBButton>
				<DBDrawer
					id="drawer-example-slots"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader
							closeButtonText="Close"
							endSlot={<DBBadge>New</DBBadge>}>
							<h2>With slots</h2>
						</DBDrawerHeader>
					}
					footer={
						<DBDrawerFooter>
							<DBLink href="#">Link 1</DBLink>
							<DBLink href="#">Link 2</DBLink>
						</DBDrawerFooter>
					}>
					With slots
				</DBDrawer>
			</div>
		</Fragment>
	);
}
