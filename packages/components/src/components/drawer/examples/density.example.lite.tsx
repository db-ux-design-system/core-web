import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookDrawerArgTypes
});

export default function DrawerDensity() {
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<DBButton onClick={() => setOpenIndex(0)}>
				Open
				<DBDrawer
					data-density="functional"
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}>
					Functional
				</DBDrawer>
			</DBButton>
			<DBButton onClick={() => setOpenIndex(1)}>
				Open
				<DBDrawer
					data-density="regular"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}>
					(Default) Regular
				</DBDrawer>
			</DBButton>
			<DBButton onClick={() => setOpenIndex(2)}>
				Open
				<DBDrawer
					data-density="expressive"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}>
					Expressive
				</DBDrawer>
			</DBButton>
		</Fragment>
	);
}
