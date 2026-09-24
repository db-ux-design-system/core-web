import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Rounded',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DrawerRounded() {
	return (
		<Fragment>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-rounded-false">
					Open: (Default) False
				</DBButton>
				<DBDrawer
					propOverrides={{ id: 'drawer-rounded-false' }}
					rounded={false}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>(Default) False</h2>
						</DBDrawerHeader>
					}>
					(Default) False
				</DBDrawer>
			</div>
			<div>
				<DBButton command="show-modal" commandfor="drawer-rounded-true">
					Open: True
				</DBButton>
				<DBDrawer
					propOverrides={{ id: 'drawer-rounded-true' }}
					rounded={true}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>True</h2>
						</DBDrawerHeader>
					}>
					True
				</DBDrawer>
			</div>
		</Fragment>
	);
}
