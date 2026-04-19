import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
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
					commandfor="drawer-rounded-false"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: (Default) False
				</DBButton>
				<DBDrawer id="drawer-rounded-false" rounded={false}>
					(Default) False
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-rounded-true"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: True
				</DBButton>
				<DBDrawer id="drawer-rounded-true" rounded={true}>
					True
				</DBDrawer>
			</div>
		</Fragment>
	);
}
