import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Spacing',
	storybookNames: ['(Default) Medium', 'Small', 'Large', 'None'],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DrawerSpacing() {
	return (
		<Fragment>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-spacing-medium"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: (Default) Medium
				</DBButton>
				<DBDrawer id="drawer-spacing-medium">(Default) Medium</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-spacing-small"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: Small
				</DBButton>
				<DBDrawer id="drawer-spacing-small" spacing="small">
					Small
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-spacing-large"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: Large
				</DBButton>
				<DBDrawer id="drawer-spacing-large" spacing="large">
					Large
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-spacing-none"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: None
				</DBButton>
				<DBDrawer id="drawer-spacing-none" spacing="none">
					None
				</DBDrawer>
			</div>
		</Fragment>
	);
}
