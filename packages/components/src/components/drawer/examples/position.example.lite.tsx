import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Position',
	storybookNames: ['(Default) Fixed', 'Absolute'],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DrawerPosition() {
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<div
				style={{
					position: 'relative',
					height: '500px',
					width: '100%',
					border: '2px dashed currentColor',
					overflow: 'hidden'
				}}>
				<DBButton command="show" commandfor="drawer-position-absolute">
					Open: Absolute
				</DBButton>
				<DBDrawer
					id="drawer-position-absolute"
					position="absolute"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Absolute</h2>
						</DBDrawerHeader>
					}>
					Absolute
				</DBDrawer>
			</div>
		</Fragment>
	);
}
