import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Direction',
	storybookNames: ['(Default) Right', 'Left', 'Up', 'Down'],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DrawerDirection() {
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<div>
				<DBButton
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpenIndex(0)}>
					Open: (Default) Right
				</DBButton>
				<DBDrawer
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}>
					(Default) Right
				</DBDrawer>
			</div>
			<div>
				<DBButton
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpenIndex(1)}>
					Open: Left
				</DBButton>
				<DBDrawer
					direction="left"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}>
					Left
				</DBDrawer>
			</div>
			<div>
				<DBButton
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpenIndex(2)}>
					Open: Up
				</DBButton>
				<DBDrawer
					direction="up"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}>
					Up
				</DBDrawer>
			</div>
			<div>
				<DBButton
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpenIndex(3)}>
					Open: Down
				</DBButton>
				<DBDrawer
					direction="down"
					open={openIndex === 3}
					onClose={() => setOpenIndex(-1)}>
					Down
				</DBDrawer>
			</div>
		</Fragment>
	);
}
