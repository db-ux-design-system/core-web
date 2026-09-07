import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
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
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<div>
				<DBButton command="show-modal" commandfor="drawer-spacing-with">
					Open: (Default) With Spacing
				</DBButton>
				<DBDrawer
					id="drawer-spacing-with"
					open={openIndex === 0}
					showSpacing
					containerSize="full"
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							(Default) With Spacing
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
					id="drawer-spacing-without"
					showSpacing={false}
					containerSize="full"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							Without Spacing
						</DBDrawerHeader>
					}>
					Without Spacing
				</DBDrawer>
			</div>
		</Fragment>
	);
}
