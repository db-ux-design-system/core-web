import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Spacing',
	storybookNames: ['(Default) Medium', 'Small', 'Large', 'None'],
	storybookArgTypes: StorybookDrawerArgTypes
});

export default function DrawerSpacing() {
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
					spacing="small"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}>
					Small
				</DBDrawer>
			</DBButton>
			<DBButton onClick={() => setOpenIndex(2)}>
				Open
				<DBDrawer
					spacing="large"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}>
					Large
				</DBDrawer>
			</DBButton>
			<DBButton onClick={() => setOpenIndex(3)}>
				Open
				<DBDrawer
					spacing="none"
					open={openIndex === 3}
					onClose={() => setOpenIndex(-1)}>
					None
				</DBDrawer>
			</DBButton>
		</Fragment>
	);
}
