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
	// An absolute-positioned drawer is non-modal and opens via show(), which has
	// no native invoker command, so it is driven through the open prop.
	const [absoluteOpen, setAbsoluteOpen] = useState<boolean>(false);

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
				<DBButton onClick={() => setAbsoluteOpen(true)}>
					Open: Absolute
				</DBButton>
				<DBDrawer
					propOverrides={{ id: 'drawer-position-absolute' }}
					position="absolute"
					open={absoluteOpen}
					onClose={() => setAbsoluteOpen(false)}
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
