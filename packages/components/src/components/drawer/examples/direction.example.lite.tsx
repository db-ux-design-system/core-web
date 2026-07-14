import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Direction',
	storybookNames: ['(Default) To-Left', 'To-Right', 'Up', 'Down'],
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
					Open: (Default) To-Left
				</DBButton>
				<DBDrawer
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}
					header={<DBDrawerHeader>(Default) To-Left</DBDrawerHeader>}>
					(Default) To-Left
				</DBDrawer>
			</div>
			<div>
				<DBButton
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpenIndex(1)}>
					Open: To-Right
				</DBButton>
				<DBDrawer
					direction="to-right"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={<DBDrawerHeader>To-Right</DBDrawerHeader>}>
					To-Right
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
					onClose={() => setOpenIndex(-1)}
					header={<DBDrawerHeader>Up</DBDrawerHeader>}>
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
					onClose={() => setOpenIndex(-1)}
					header={<DBDrawerHeader>Down</DBDrawerHeader>}>
					Down
				</DBDrawer>
			</div>
		</Fragment>
	);
}
