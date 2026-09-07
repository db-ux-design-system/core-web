import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBButton from '../../button/button.lite';
import DBDrawerFooter from '../../drawer-footer/drawer-footer.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBIcon from '../../icon/icon.lite';
import DBLink from '../../link/link.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Areas',
	storybookNames: [
		'With text prop',
		'With start slot',
		'With end slot',
		'With footer'
	],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DrawerAreas() {
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<div>
				<DBButton command="show-modal" commandfor="drawer-areas-text">
					Open: With text prop
				</DBButton>
				<DBDrawer
					id="drawer-areas-text"
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}
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
					Open: With start slot
				</DBButton>
				<DBDrawer
					id="drawer-areas-start"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader
							closeButtonText="Close"
							startSlot={<DBIcon icon="person" />}>
							<h2>With start slot</h2>
						</DBDrawerHeader>
					}>
					Lorem ipsum dolor sit amet.
				</DBDrawer>
			</div>
			<div>
				<DBButton command="show-modal" commandfor="drawer-areas-end">
					Open: With end slot
				</DBButton>
				<DBDrawer
					id="drawer-areas-end"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader
							closeButtonText="Close"
							endSlot={<DBBadge>New</DBBadge>}>
							<h2>With end slot</h2>
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
					open={openIndex === 3}
					onClose={() => setOpenIndex(-1)}
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
