import { DBControlPanelActions2 } from '@components';
import FrameworkSwitcher from '../framework-switcher';
import VersionSwitcher from '../version-switcher';

export default function Actions2() {
	return (
		<DBControlPanelActions2>
			<FrameworkSwitcher />
			<VersionSwitcher />
		</DBControlPanelActions2>
	);
}
