import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DrawerDensity() {
	return (
		<Fragment>
			<div data-density="functional">
				<DBButton
					command="show-modal"
					commandfor="drawer-density-functional"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: Functional
				</DBButton>
				<DBDrawer id="drawer-density-functional">Functional</DBDrawer>
			</div>
			<div data-density="regular">
				<DBButton
					command="show-modal"
					commandfor="drawer-density-regular"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: (Default) Regular
				</DBButton>
				<DBDrawer id="drawer-density-regular">
					(Default) Regular
				</DBDrawer>
			</div>
			<div data-density="expressive">
				<DBButton
					command="show-modal"
					commandfor="drawer-density-expressive"
					data-sb-replace="Open DBDrawer via command and commandfor">
					Open: Expressive
				</DBButton>
				<DBDrawer id="drawer-density-expressive">Expressive</DBDrawer>
			</div>
		</Fragment>
	);
}
