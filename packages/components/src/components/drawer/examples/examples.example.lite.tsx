import { Fragment, useMetadata, useState, useStore } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBButton from '../../button/button.lite';
import DBDrawerFooter from '../../drawer-footer/drawer-footer.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBLink from '../../link/link.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Examples',
	storybookNames: [
		'(Default) As modal',
		'Inside',
		'With slots',
		'Close and Cancel'
	],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DrawerExamples() {
	const [openIndex, setOpenIndex] = useState<number>(-1);
	const state = useStore({
		handleClose: () => {
			console.log('onClose fired');
			setOpenIndex(-1);
		},
		handleCancel: () => {
			console.log('onCancel fired');
		}
	});

	return (
		<Fragment>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-example-modal"
					onClick={() => setOpenIndex(0)}>
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
				<DBButton onClick={() => setOpenIndex(1)}>
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
					commandfor="drawer-example-slots"
					onClick={() => setOpenIndex(2)}>
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
			<div>
				<DBButton
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpenIndex(3)}>
					Cancel and close Events in console
				</DBButton>
				<DBDrawer
					open={openIndex === 3}
					onClose={() => state.handleClose()}
					onCancel={() => state.handleCancel()}
					header={
						<DBDrawerHeader closeButtonText="Close">
							Events Test
						</DBDrawerHeader>
					}>
					Press ESC or click backdrop to test events
				</DBDrawer>
			</div>
		</Fragment>
	);
}
