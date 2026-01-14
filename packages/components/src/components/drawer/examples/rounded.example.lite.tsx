import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Rounded',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookDrawerArgTypes
});

export default function DrawerRounded() {
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<DBButton onClick={() => setOpenIndex(0)}>
				Open
				<DBDrawer
					rounded={false}
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}>
					(Default) False
				</DBDrawer>
			</DBButton>
			<DBButton onClick={() => setOpenIndex(1)}>
				Open
				<DBDrawer
					rounded={true}
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}>
					True
				</DBDrawer>
			</DBButton>
		</Fragment>
	);
}
