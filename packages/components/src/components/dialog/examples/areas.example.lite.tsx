import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBButton from '../../button/button.lite';
import DBDialogFooter from '../../dialog-footer/dialog-footer.lite';
import DBDialogHeader from '../../dialog-header/dialog-header.lite';
import DBIcon from '../../icon/icon.lite';
import DBDialog from '../dialog.lite';
import { StorybookDialogArgTypes } from './_dialog.arg.types';

useMetadata({
	storybookTitle: 'Areas',
	storybookNames: [
		'With text prop',
		'With start slot',
		'With end slot',
		'With footer'
	],
	storybookArgTypes: StorybookDialogArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DialogAreas() {
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<div>
				<DBButton
					data-sb-replace="Open DBDialog by switching open property"
					onClick={() => setOpenIndex(0)}>
					Open: With text prop
				</DBButton>
				<DBDialog
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader
							text="With text prop"
							closeButtonText="Close"
						/>
					}>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
					diam nonumy eirmod tempor invidunt ut labore et dolore magna
					aliquyam erat, sed diam voluptua.
				</DBDialog>
			</div>
			<div>
				<DBButton
					data-sb-replace="Open DBDialog by switching open property"
					onClick={() => setOpenIndex(1)}>
					Open: With start slot
				</DBButton>
				<DBDialog
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader
							closeButtonText="Close"
							startSlot={<DBIcon icon="account" />}>
							With start slot
						</DBDialogHeader>
					}>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
					diam nonumy eirmod tempor invidunt ut labore et dolore magna
					aliquyam erat, sed diam voluptua.
				</DBDialog>
			</div>
			<div>
				<DBButton
					data-sb-replace="Open DBDialog by switching open property"
					onClick={() => setOpenIndex(2)}>
					Open: With end slot
				</DBButton>
				<DBDialog
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader
							closeButtonText="Close"
							endSlot={<DBBadge>New</DBBadge>}>
							With end slot
						</DBDialogHeader>
					}>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
					diam nonumy eirmod tempor invidunt ut labore et dolore magna
					aliquyam erat, sed diam voluptua.
				</DBDialog>
			</div>
			<div>
				<DBButton
					data-sb-replace="Open DBDialog by switching open property"
					onClick={() => setOpenIndex(3)}>
					Open: With footer
				</DBButton>
				<DBDialog
					open={openIndex === 3}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader closeButtonText="Close">
							With footer
						</DBDialogHeader>
					}
					footer={
						<DBDialogFooter>
							<DBButton
								variant="ghost"
								onClick={() => setOpenIndex(-1)}>
								Cancel
							</DBButton>
							<DBButton
								variant="brand"
								onClick={() => setOpenIndex(-1)}>
								Confirm
							</DBButton>
						</DBDialogFooter>
					}>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
					diam nonumy eirmod tempor invidunt ut labore et dolore magna
					aliquyam erat, sed diam voluptua.
				</DBDialog>
			</div>
		</Fragment>
	);
}
