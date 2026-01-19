import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Example',
	storybookNames: ['(Default) As modal', 'Inside'],
	storybookArgTypes: StorybookDrawerArgTypes
});

export default function DrawerExample() {
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<div>
				<DBButton onClick={() => setOpenIndex(0)}>
					Open: (Default) As modal
				</DBButton>
				<DBDrawer
					variant="modal"
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}>
					(Default) As modal
				</DBDrawer>
			</div>
			<div>
				<DBButton onClick={() => setOpenIndex(1)}>
					Open: Inside
				</DBButton>
				<DBDrawer
					variant="inside"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}>
					Inside
				</DBDrawer>
			</div>
		</Fragment>
	);
}
