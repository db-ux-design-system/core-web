import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import { createHeaderRequiredRule } from '../../shared/slot-content.js';

export default createHeaderRequiredRule({
	parent: COMPONENTS.DBDialog,
	header: COMPONENTS.DBDialogHeader,
	messageId: MESSAGE_IDS.DIALOG_HEADER_REQUIRED,
	message: MESSAGES.DIALOG_HEADER_REQUIRED,
	description:
		'Ensure DBDialog has a DBDialogHeader for accessibility (provides close button and aria-labelledby)'
});
