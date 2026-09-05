import { COMPONENTS, MESSAGES, MESSAGE_IDS } from '../../shared/constants.js';
import { createHeaderRequiredRule } from '../../shared/slot-content.js';

export default createHeaderRequiredRule({
	parent: COMPONENTS.DBDrawer,
	header: COMPONENTS.DBDrawerHeader,
	messageId: MESSAGE_IDS.DRAWER_HEADER_REQUIRED,
	message: MESSAGES.DRAWER_HEADER_REQUIRED,
	description:
		'Ensure DBDrawer has a DBDrawerHeader for accessibility (provides close button and aria-labelledby)'
});
