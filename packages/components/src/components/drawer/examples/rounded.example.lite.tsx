import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
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
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-rounded-false">
					Open: (Default) False
				</DBButton>
				<DBDrawer
					id="drawer-rounded-false"
					rounded={false}
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							(Default) False
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
					id="drawer-rounded-true"
					rounded={true}
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							True
						</DBDrawerHeader>
					}>
					True
				</DBDrawer>
			</div>
		</Fragment>
	);
}
