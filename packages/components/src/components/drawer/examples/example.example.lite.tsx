import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Example',
	storybookNames: ['(Default) As modal', 'Inside'],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DrawerExample() {
	return (
		<Fragment>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-example-modal"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: (Default) As modal
				</DBButton>
				<DBDrawer id="drawer-example-modal" variant="modal">
					(Default) As modal
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-example-inside"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: Inside
				</DBButton>
				<DBDrawer id="drawer-example-inside" variant="inside">
					Inside
				</DBDrawer>
			</div>
		</Fragment>
	);
}
