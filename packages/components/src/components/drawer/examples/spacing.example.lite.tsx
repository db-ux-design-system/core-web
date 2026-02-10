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
			<div data-sb-decorator="true">
				<DBButton onClick={() => setOpenIndex(0)}>
					Open: (Default) Medium
				</DBButton>
				<DBDrawer
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}>
					(Default) Medium
				</DBDrawer>
			</div>
			<div data-sb-decorator="true">
				<DBButton onClick={() => setOpenIndex(1)}>Open: Small</DBButton>
				<DBDrawer
					spacing="small"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}>
					Small
				</DBDrawer>
			</div>
			<div data-sb-decorator="true">
				<DBButton onClick={() => setOpenIndex(2)}>Open: Large</DBButton>
				<DBDrawer
					spacing="large"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}>
					Large
				</DBDrawer>
			</div>
			<div data-sb-decorator="true">
				<DBButton onClick={() => setOpenIndex(3)}>Open: None</DBButton>
				<DBDrawer
					spacing="none"
					open={openIndex === 3}
					onClose={() => setOpenIndex(-1)}>
					None
				</DBDrawer>
			</div>
		</Fragment>
	);
}
