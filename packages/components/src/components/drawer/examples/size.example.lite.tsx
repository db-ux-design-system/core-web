import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Size',
	storybookNames: ['(Default) Medium', 'Full'],
	storybookArgTypes: StorybookDrawerArgTypes
});

export default function DrawerSize() {
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<DBButton onClick={() => setOpenIndex(0)}>
				Open
				<DBDrawer
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}>
					(Default) Medium
				</DBDrawer>
			</DBButton>
			<DBButton onClick={() => setOpenIndex(1)}>
				Open
				<DBDrawer
					width="full"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}>
					Full
				</DBDrawer>
			</DBButton>
		</Fragment>
	);
}
