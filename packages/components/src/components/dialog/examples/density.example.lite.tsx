import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDialogHeader from '../../dialog-header/dialog-header.lite';
import DBDialog from '../dialog.lite';
import { StorybookDialogArgTypes } from './_dialog.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookDialogArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DialogDensity() {
	const [openIndex, setOpenIndex] = useState<number>(-1);

	return (
		<Fragment>
			<div data-density="functional">
				<DBButton
					data-sb-replace="Open DBDialog by switching open property"
					onClick={() => setOpenIndex(0)}>
					Open: Functional
				</DBButton>
				<DBDialog
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader closeButtonText="Close">
							Functional
						</DBDialogHeader>
					}>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
					diam nonumy eirmod tempor invidunt ut labore et dolore magna
					aliquyam erat, sed diam voluptua.
				</DBDialog>
			</div>
			<div data-density="regular">
				<DBButton
					data-sb-replace="Open DBDialog by switching open property"
					onClick={() => setOpenIndex(1)}>
					Open: (Default) Regular
				</DBButton>
				<DBDialog
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader closeButtonText="Close">
							(Default) Regular
						</DBDialogHeader>
					}>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
					diam nonumy eirmod tempor invidunt ut labore et dolore magna
					aliquyam erat, sed diam voluptua.
				</DBDialog>
			</div>
			<div data-density="expressive">
				<DBButton
					data-sb-replace="Open DBDialog by switching open property"
					onClick={() => setOpenIndex(2)}>
					Open: Expressive
				</DBButton>
				<DBDialog
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader closeButtonText="Close">
							Expressive
						</DBDialogHeader>
					}>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
					diam nonumy eirmod tempor invidunt ut labore et dolore magna
					aliquyam erat, sed diam voluptua.
				</DBDialog>
			</div>
		</Fragment>
	);
}
