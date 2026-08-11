import { DBControlPanelSecondaryActions } from '@components';
import FrameworkSwitcher from '../framework-switcher';
import VersionSwitcher from '../version-switcher';

export default function SecondaryActions() {
	return (
		<DBControlPanelSecondaryActions>
			<FrameworkSwitcher />
			<VersionSwitcher />
		</DBControlPanelSecondaryActions>
	);
}
