import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Backdrop',
	storybookNames: ['(Default) Strong', 'Weak', 'Invisible', 'No Backdrop'],
	storybookArgTypes: StorybookDrawerArgTypes
});

export default function DrawerBackdrop() {
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<div>
				<DBButton onClick={() => setOpenIndex(0)}>
					Open: (Default) Strong
				</DBButton>
				<DBDrawer
					backdrop="strong"
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}>
					(Default) Strong
				</DBDrawer>
			</div>
			<div>
				<DBButton onClick={() => setOpenIndex(1)}>Open: Weak</DBButton>
				<DBDrawer
					backdrop="weak"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}>
					Weak
				</DBDrawer>
			</div>
			<div>
				<DBButton onClick={() => setOpenIndex(2)}>
					Open: Invisible
				</DBButton>
				<DBDrawer
					backdrop="invisible"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}>
					Invisible
				</DBDrawer>
			</div>
			<div>
				<DBButton onClick={() => setOpenIndex(3)}>
					Open: No Backdrop
				</DBButton>
				<DBDrawer
					backdrop="none"
					open={openIndex === 3}
					onClose={() => setOpenIndex(-1)}>
					No Backdrop
				</DBDrawer>
			</div>
		</Fragment>
	);
}
