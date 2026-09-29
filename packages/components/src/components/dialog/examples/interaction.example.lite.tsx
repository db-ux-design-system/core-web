import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDialogHeader from '../../dialog-header/dialog-header.lite';
import DBDialog from '../dialog.lite';
import { StorybookDialogArgTypes } from './_dialog.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookDialogArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

/**
 Fixtures for the cross-framework interaction e2e tests
 (see showcases/e2e/dialog/dialog-interaction.spec.ts).

 Each scenario is a self-contained dialog ported from the removed component
 test, addressable via its own `data-testid` and opened by its native
 command/commandfor launcher button. Event callbacks are reflected into
 readout elements (data-testid) so the spec can assert on observable DOM
 instead of a JS callback counter.

 Dialogs render `open` by default here (the interaction spec drives them via
 the launcher buttons), so the story generation overwrites `open` to false.
 */
type DialogInteractionState = {
	closeCount: number;
	cancelCount: number;
	clickCount: number;
	getCloseReadout: () => string;
	getCancelReadout: () => string;
	getClickReadout: () => string;
	handleClose: () => void;
	handleCancel: () => void;
	handleClick: () => void;
};

export default function DialogInteraction() {
	const state = useStore<DialogInteractionState>({
		closeCount: 0,
		cancelCount: 0,
		clickCount: 0,
		getCloseReadout: () => {
			return `close: ${state.closeCount}`;
		},
		getCancelReadout: () => {
			return `cancel: ${state.cancelCount}`;
		},
		getClickReadout: () => {
			return `click: ${state.clickCount}`;
		},
		handleClose: () => {
			state.closeCount = state.closeCount + 1;
		},
		handleCancel: () => {
			state.cancelCount = state.cancelCount + 1;
		},
		handleClick: () => {
			state.clickCount = state.clickCount + 1;
		}
	});

	return (
		<Fragment>
			<div data-testid="text-dialog">
				<DBButton
					command="show-modal"
					commandfor="interaction-dialog-text">
					Open: text and heading
				</DBButton>
				<DBDialog
					propOverrides={{ id: 'interaction-dialog-text' }}
					header={<DBDialogHeader text="Title" />}>
					<span data-testid="text-content">Test</span>
				</DBDialog>
			</div>

			<div data-testid="labelledby-dialog">
				<DBButton
					command="show-modal"
					commandfor="interaction-dialog-labelledby">
					Open: aria-labelledby composition
				</DBButton>
				<DBDialog
					propOverrides={{ id: 'interaction-dialog-labelledby' }}
					aria-labelledby="consumer-label"
					header={<DBDialogHeader text="Title" />}>
					<span>Test</span>
				</DBDialog>
			</div>

			<div data-testid="header-id-dialog">
				<DBButton
					command="show-modal"
					commandfor="interaction-dialog-header-id">
					Open: derived heading id
				</DBButton>
				<DBDialog
					propOverrides={{ id: 'interaction-dialog-header-id' }}
					header={
						<DBDialogHeader
							id="interaction-my-header"
							text="Title"
						/>
					}>
					<span>Test</span>
				</DBDialog>
			</div>

			<div data-testid="aria-label-dialog">
				<DBButton
					command="show-modal"
					commandfor="interaction-dialog-aria-label">
					Open: aria-label override
				</DBButton>
				<DBDialog
					propOverrides={{ id: 'interaction-dialog-aria-label' }}
					aria-label="Consumer name"
					header={<DBDialogHeader text="Title" />}>
					<span>Test</span>
				</DBDialog>
			</div>

			<div data-testid="commandfor-dialog">
				<DBButton
					command="show-modal"
					commandfor="interaction-dialog-commandfor">
					Open: close button commandfor
				</DBButton>
				<DBDialog
					propOverrides={{ id: 'interaction-dialog-commandfor' }}
					header={<DBDialogHeader text="Title" />}>
					<span>Test</span>
				</DBDialog>
			</div>

			<div data-testid="events-dialog">
				<DBButton
					command="show-modal"
					commandfor="interaction-dialog-events">
					Open: events
				</DBButton>
				<DBDialog
					propOverrides={{ id: 'interaction-dialog-events' }}
					onClose={() => state.handleClose()}
					onCancel={() => state.handleCancel()}
					onClick={() => state.handleClick()}
					header={<DBDialogHeader text="Title" />}>
					<span data-testid="events-content">Test</span>
				</DBDialog>
				<span data-testid="events-close-readout">
					{state.getCloseReadout()}
				</span>
				<span data-testid="events-cancel-readout">
					{state.getCancelReadout()}
				</span>
				<span data-testid="events-click-readout">
					{state.getClickReadout()}
				</span>
			</div>
		</Fragment>
	);
}
