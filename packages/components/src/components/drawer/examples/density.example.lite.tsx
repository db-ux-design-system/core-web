import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
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
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<div data-density="functional">
				<DBButton
					command="show-modal"
					commandfor="drawer-density-functional">
					Open: Functional
				</DBButton>
				<DBDrawer
					id="drawer-density-functional"
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Functional</h2>
						</DBDrawerHeader>
					}>
					Functional
				</DBDrawer>
			</div>
			<div data-density="regular">
				<DBButton
					command="show-modal"
					commandfor="drawer-density-regular">
					Open: (Default) Regular
				</DBButton>
				<DBDrawer
					id="drawer-density-regular"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>(Default) Regular</h2>
						</DBDrawerHeader>
					}>
					(Default) Regular
				</DBDrawer>
			</div>
			<div data-density="expressive">
				<DBButton
					command="show-modal"
					commandfor="drawer-density-expressive">
					Open: Expressive
				</DBButton>
				<DBDrawer
					id="drawer-density-expressive"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Expressive</h2>
						</DBDrawerHeader>
					}>
					Expressive
				</DBDrawer>
			</div>
		</Fragment>
	);
}
