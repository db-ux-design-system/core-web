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
					command="show-modal"
					commandfor="dialog-density-functional">
					Open: Functional
				</DBButton>
				<DBDialog
					id="dialog-density-functional"
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader closeButtonText="Close">
							Functional
						</DBDialogHeader>
					}>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
				</DBDialog>
			</div>
			<div data-density="regular">
				<DBButton
					command="show-modal"
					commandfor="dialog-density-regular">
					Open: (Default) Regular
				</DBButton>
				<DBDialog
					id="dialog-density-regular"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader closeButtonText="Close">
							(Default) Regular
						</DBDialogHeader>
					}>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
				</DBDialog>
			</div>
			<div data-density="expressive">
				<DBButton
					command="show-modal"
					commandfor="dialog-density-expressive">
					Open: Expressive
				</DBButton>
				<DBDialog
					id="dialog-density-expressive"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDialogHeader closeButtonText="Close">
							Expressive
						</DBDialogHeader>
					}>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
				</DBDialog>
			</div>
		</Fragment>
	);
}
