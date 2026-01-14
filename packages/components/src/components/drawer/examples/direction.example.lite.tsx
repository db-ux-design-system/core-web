import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Direction',
	storybookNames: ['(Default) Right', 'Left', 'Up', 'Down'],
	storybookArgTypes: StorybookDrawerArgTypes
});

export default function DrawerDirection() {
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<DBButton onClick={() => setOpenIndex(0)}>
				Open
				<DBDrawer
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}>
					(Default) Right
				</DBDrawer>
			</DBButton>
			<DBButton onClick={() => setOpenIndex(1)}>
				Open
				<DBDrawer
					direction="left"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}>
					Left
				</DBDrawer>
			</DBButton>
			<DBButton onClick={() => setOpenIndex(2)}>
				Open
				<DBDrawer
					direction="up"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}>
					Up
				</DBDrawer>
			</DBButton>
			<DBButton onClick={() => setOpenIndex(3)}>
				Open
				<DBDrawer
					direction="down"
					open={openIndex === 3}
					onClose={() => setOpenIndex(-1)}>
					Down
				</DBDrawer>
			</DBButton>
		</Fragment>
	);
}
