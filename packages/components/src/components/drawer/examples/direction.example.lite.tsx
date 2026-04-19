import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Direction',
	storybookNames: ['(Default) Right', 'Left', 'Up', 'Down'],
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
					commandfor="drawer-direction-right"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: (Default) Right
				</DBButton>
				<DBDrawer id="drawer-direction-right">(Default) Right</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-direction-left"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: Left
				</DBButton>
				<DBDrawer id="drawer-direction-left" direction="left">
					Left
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-direction-up"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: Up
				</DBButton>
				<DBDrawer id="drawer-direction-up" direction="up">
					Up
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-direction-down"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: Down
				</DBButton>
				<DBDrawer id="drawer-direction-down" direction="down">
					Down
				</DBDrawer>
			</div>
		</Fragment>
	);
}
