import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Show Spacing',
	storybookNames: ['(Default) With Spacing', 'Without Spacing'],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DrawerShowSpacing() {
	return (
		<Fragment>
			<div>
				<DBButton command="show-modal" commandfor="drawer-spacing-with">
					Open: (Default) With Spacing
				</DBButton>
				<DBDrawer
					propOverrides={{ id: 'drawer-spacing-with' }}
					showSpacing
					containerSize="full"
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>(Default) With Spacing</h2>
						</DBDrawerHeader>
					}>
					(Default) With Spacing
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-spacing-without">
					Open: Without Spacing
				</DBButton>
				<DBDrawer
					propOverrides={{ id: 'drawer-spacing-without' }}
					showSpacing={false}
					containerSize="full"
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Without Spacing</h2>
						</DBDrawerHeader>
					}>
					Without Spacing
				</DBDrawer>
			</div>
		</Fragment>
	);
}
