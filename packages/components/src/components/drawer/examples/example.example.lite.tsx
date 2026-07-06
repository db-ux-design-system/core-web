import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBButton from '../../button/button.lite';
import DBDrawerFooter from '../../drawer-footer/drawer-footer.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBLink from '../../link/link.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Example',
	storybookNames: ['(Default) As modal', 'Inside', 'With slots'],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DrawerExample() {
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<div>
				<DBButton
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpenIndex(0)}>
					Open: (Default) As modal
				</DBButton>
				<DBDrawer
					variant="modal"
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader>(Default) As modal</DBDrawerHeader>
					}>
					(Default) As modal
				</DBDrawer>
			</div>
			<div>
				<DBButton
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpenIndex(1)}>
					Open: Inside
				</DBButton>
				<DBDrawer
					variant="inside"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={<DBDrawerHeader>Inside</DBDrawerHeader>}>
					Inside
				</DBDrawer>
			</div>
			<div>
				<DBButton
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpenIndex(2)}>
					Open: With slots
				</DBButton>
				<DBDrawer
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader endSlot={<DBBadge>New</DBBadge>}>
							With slots
						</DBDrawerHeader>
					}
					footer={
						<DBDrawerFooter>
							<DBLink href="#">Link 1</DBLink>
							<DBLink href="#">Link 2</DBLink>
						</DBDrawerFooter>
					}>
					With slots
				</DBDrawer>
			</div>
		</Fragment>
	);
}
