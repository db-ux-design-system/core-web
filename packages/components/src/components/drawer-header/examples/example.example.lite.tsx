import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBDrawer from '../../drawer/drawer.lite';
import DBDrawerHeader from '../drawer-header.lite';
import { StorybookDrawerHeaderArgTypes } from './_drawer-header.arg.types';

useMetadata({
	storybookTitle: 'Example',
	storybookNames: ['(Default) With children', 'With text prop'],
	storybookArgTypes: StorybookDrawerHeaderArgTypes
});

export default function DrawerHeaderExample() {
	return (
		<Fragment>
			<div>
				<DBDrawer
					open={true}
					position="absolute"
					backdrop="none"
					header={
						<DBDrawerHeader closeButtonText="Close">
							(Default) With children
						</DBDrawerHeader>
					}>
					Drawer content
				</DBDrawer>
			</div>
			<div>
				<DBDrawer
					open={true}
					position="absolute"
					backdrop="none"
					header={
						<DBDrawerHeader
							text="With text prop"
							closeButtonText="Close"
						/>
					}>
					Drawer content
				</DBDrawer>
			</div>
		</Fragment>
	);
}
