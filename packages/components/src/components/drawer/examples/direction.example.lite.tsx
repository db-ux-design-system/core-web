import { Fragment, useMetadata } from '@builder.io/mitosis';
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
	return (
		<Fragment>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-direction-to-left">
					Open: (Default) To-Left
				</DBButton>
				<DBDrawer
					propOverrides={{ id: 'drawer-direction-to-left' }}
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
					propOverrides={{ id: 'drawer-direction-to-right' }}
					direction="to-right"
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
					propOverrides={{ id: 'drawer-direction-up' }}
					direction="up"
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
					propOverrides={{ id: 'drawer-direction-down' }}
					direction="down"
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
					propOverrides={{ id: 'drawer-direction-up-full' }}
					direction="up"
					containerSize="full"
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
					propOverrides={{ id: 'drawer-direction-down-full' }}
					direction="down"
					containerSize="full"
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
