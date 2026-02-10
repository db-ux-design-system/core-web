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
			<div data-sb-decorator="true">
				<DBButton onClick={() => setOpenIndex(0)}>
					Open: (Default) False
				</DBButton>
				<DBDrawer
					rounded={false}
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}>
					(Default) False
				</DBDrawer>
			</div>
			<div data-sb-decorator="true">
				<DBButton onClick={() => setOpenIndex(1)}>Open: True</DBButton>
				<DBDrawer
					rounded={true}
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}>
					True
				</DBDrawer>
			</div>
		</Fragment>
	);
}
