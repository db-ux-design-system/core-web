import { Fragment, useMetadata, useState, useStore } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBButton from '../../button/button.lite';
import DBDrawerFooter from '../../drawer-footer/drawer-footer.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBIcon from '../../icon/icon.lite';
import DBLink from '../../link/link.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Examples',
	storybookNames: [
		'(Default) As modal',
		'Inside',
		'With slots',
		'Close and Cancel',
		'With text prop',
		'With header start slot',
		'With header end slot',
		'With footer'
	],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DrawerExamples() {
	// The inside variant is non-modal (opens via show(), which has no native
	// invoker command) and the events example demonstrates opening via the open
	// property, so both are driven through the open prop.
	const [insideOpen, setInsideOpen] = useState<boolean>(false);
	const [eventsOpen, setEventsOpen] = useState<boolean>(false);
	const state = useStore({
		handleClose: () => {
			console.log('onClose fired');
			setEventsOpen(false);
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
					commandfor="drawer-example-modal">
					Open: (Default) As modal
				</DBButton>
				<DBDrawer
					id="drawer-example-modal"
					variant="modal"
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>(Default) As modal</h2>
						</DBDrawerHeader>
					}>
					(Default) As modal
				</DBDrawer>
			</div>
			<div>
				<DBButton onClick={() => setInsideOpen(true)}>
					Open: Inside
				</DBButton>
				<DBDrawer
					id="drawer-example-inside"
					variant="inside"
					open={insideOpen}
					onClose={() => setInsideOpen(false)}
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
					onClick={() => setEventsOpen(true)}>
					Cancel and close Events in console
				</DBButton>
				<DBDrawer
					open={eventsOpen}
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
			<div>
				<DBButton command="show-modal" commandfor="drawer-areas-text">
					Open: With text prop
				</DBButton>
				<DBDrawer
					id="drawer-areas-text"
					header={
						<DBDrawerHeader
							text="With text prop"
							closeButtonText="Close"
						/>
					}>
					Lorem ipsum dolor sit amet.
				</DBDrawer>
			</div>
			<div>
				<DBButton command="show-modal" commandfor="drawer-areas-start">
					Open: With header start slot
				</DBButton>
				<DBDrawer
					id="drawer-areas-start"
					header={
						<DBDrawerHeader
							closeButtonText="Close"
							startSlot={<DBIcon icon="person" />}>
							<h2>With header start slot</h2>
						</DBDrawerHeader>
					}>
					Lorem ipsum dolor sit amet.
				</DBDrawer>
			</div>
			<div>
				<DBButton command="show-modal" commandfor="drawer-areas-end">
					Open: With header end slot
				</DBButton>
				<DBDrawer
					id="drawer-areas-end"
					header={
						<DBDrawerHeader
							closeButtonText="Close"
							endSlot={<DBBadge>New</DBBadge>}>
							<h2>With header end slot</h2>
						</DBDrawerHeader>
					}>
					Lorem ipsum dolor sit amet.
				</DBDrawer>
			</div>
			<div>
				<DBButton command="show-modal" commandfor="drawer-areas-footer">
					Open: With footer
				</DBButton>
				<DBDrawer
					id="drawer-areas-footer"
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>With footer</h2>
						</DBDrawerHeader>
					}
					footer={
						<DBDrawerFooter>
							<DBLink href="#">Link 1</DBLink>
							<DBLink href="#">Link 2</DBLink>
						</DBDrawerFooter>
					}>
					Lorem ipsum dolor sit amet.
				</DBDrawer>
			</div>
		</Fragment>
	);
}
