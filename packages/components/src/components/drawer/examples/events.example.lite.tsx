import { Fragment, useMetadata, useState, useStore } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Events',
	storybookNames: ['Close and Cancel'],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DrawerEvents() {
	const [open, setOpen] = useState<boolean>(false);
	const state = useStore({
		handleClose: () => {
			console.log('onClose fired');
			setOpen(false);
		},
		handleCancel: () => {
			console.log('onCancel fired');
		}
	});

	return (
		<Fragment>
			<div>
				<DBButton
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpen(true)}>
					Open Drawer
				</DBButton>
				<DBDrawer
					open={open}
					onClose={() => state.handleClose()}
					onCancel={() => state.handleCancel()}
					header={
						<DBDrawerHeader closeButtonText="Close">
							Events Test
						</DBDrawerHeader>
					}>
					Press ESC or click backdrop to test events
				</DBDrawer>
			</div>
		</Fragment>
	);
}
