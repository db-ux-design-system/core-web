import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
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
	return (
		<Fragment>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-backdrop-strong"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: (Default) Strong
				</DBButton>
				<DBDrawer id="drawer-backdrop-strong" backdrop="strong">
					(Default) Strong
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-backdrop-weak"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: Weak
				</DBButton>
				<DBDrawer id="drawer-backdrop-weak" backdrop="weak">
					Weak
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-backdrop-invisible"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: Invisible
				</DBButton>
				<DBDrawer id="drawer-backdrop-invisible" backdrop="invisible">
					Invisible
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-backdrop-none"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: No Backdrop
				</DBButton>
				<DBDrawer id="drawer-backdrop-none" backdrop="none">
					No Backdrop
				</DBDrawer>
			</div>
		</Fragment>
	);
}
