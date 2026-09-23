import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDialogFooter from '../../dialog-footer/dialog-footer.lite';
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
					header={
						<DBDialogHeader closeButtonText="Close">
							<h2>Functional</h2>
						</DBDialogHeader>
					}
					footer={
						<DBDialogFooter>
							<DBButton
								variant="ghost"
								command="request-close"
								commandfor="dialog-density-functional">
								Cancel
							</DBButton>
							<DBButton
								variant="brand"
								command="request-close"
								commandfor="dialog-density-functional">
								Confirm
							</DBButton>
						</DBDialogFooter>
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
					header={
						<DBDialogHeader closeButtonText="Close">
							<h2>(Default) Regular</h2>
						</DBDialogHeader>
					}
					footer={
						<DBDialogFooter>
							<DBButton
								variant="ghost"
								command="request-close"
								commandfor="dialog-density-regular">
								Cancel
							</DBButton>
							<DBButton
								variant="brand"
								command="request-close"
								commandfor="dialog-density-regular">
								Confirm
							</DBButton>
						</DBDialogFooter>
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
					header={
						<DBDialogHeader closeButtonText="Close">
							<h2>Expressive</h2>
						</DBDialogHeader>
					}
					footer={
						<DBDialogFooter>
							<DBButton
								variant="ghost"
								command="request-close"
								commandfor="dialog-density-expressive">
								Cancel
							</DBButton>
							<DBButton
								variant="brand"
								command="request-close"
								commandfor="dialog-density-expressive">
								Confirm
							</DBButton>
						</DBDialogFooter>
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
