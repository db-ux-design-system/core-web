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
			<div data-density="functional" data-sb-decorator="true">
				<DBButton onClick={() => setOpenIndex(0)}>
					Open: Functional
				</DBButton>
				<DBDrawer
					data-density="functional"
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}>
					Functional
				</DBDrawer>
			</div>
			<div data-density="regular" data-sb-decorator="true">
				<DBButton onClick={() => setOpenIndex(1)}>
					Open: (Default) Regular
				</DBButton>
				<DBDrawer
					data-density="regular"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}>
					(Default) Regular
				</DBDrawer>
			</div>
			<div data-density="expressive" data-sb-decorator="true">
				<DBButton onClick={() => setOpenIndex(2)}>
					Open: Expressive
				</DBButton>
				<DBDrawer
					data-density="expressive"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}>
					Expressive
				</DBDrawer>
			</div>
		</Fragment>
	);
}
