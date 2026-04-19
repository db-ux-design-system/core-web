import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['(Default) Medium', 'Full'],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DrawerSize() {
	return (
		<Fragment>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-size-medium"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: (Default) Medium
				</DBButton>
				<DBDrawer id="drawer-size-medium">(Default) Medium</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-size-full"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: Full
				</DBButton>
				<DBDrawer id="drawer-size-full" width="full">
					Full
				</DBDrawer>
			</div>
		</Fragment>
	);
}
