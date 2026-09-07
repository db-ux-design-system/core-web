import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Direction',
	storybookNames: [
		'(Default) To-Left',
		'To-Right',
		'Up',
		'Down',
		'Up (Full)',
		'Down (Full)'
	],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DrawerDirection() {
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-direction-to-left">
					Open: (Default) To-Left
				</DBButton>
				<DBDrawer
					id="drawer-direction-to-left"
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>(Default) To-Left</h2>
						</DBDrawerHeader>
					}>
					(Default) To-Left
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-direction-to-right">
					Open: To-Right
				</DBButton>
				<DBDrawer
					id="drawer-direction-to-right"
					direction="to-right"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>To-Right</h2>
						</DBDrawerHeader>
					}>
					To-Right
				</DBDrawer>
			</div>
			<div>
				<DBButton command="show-modal" commandfor="drawer-direction-up">
					Open: Up
				</DBButton>
				<DBDrawer
					id="drawer-direction-up"
					direction="up"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Up</h2>
						</DBDrawerHeader>
					}>
					Up
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-direction-down">
					Open: Down
				</DBButton>
				<DBDrawer
					id="drawer-direction-down"
					direction="down"
					open={openIndex === 3}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Down</h2>
						</DBDrawerHeader>
					}>
					Down
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-direction-up-full">
					Open: Up (Full)
				</DBButton>
				<DBDrawer
					id="drawer-direction-up-full"
					direction="up"
					containerSize="full"
					open={openIndex === 4}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Up (Full)</h2>
						</DBDrawerHeader>
					}>
					Up (Full)
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-direction-down-full">
					Open: Down (Full)
				</DBButton>
				<DBDrawer
					id="drawer-direction-down-full"
					direction="down"
					containerSize="full"
					open={openIndex === 5}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Down (Full)</h2>
						</DBDrawerHeader>
					}>
					Down (Full)
				</DBDrawer>
			</div>
		</Fragment>
	);
}
