import { DBControlPanelSecondaryActions } from '@components';
import FrameworkSwitcher from '../framework-switcher';
import VersionSwitcher from '../version-switcher';

const SecondaryActions = () => {
	return (
		<DBControlPanelSecondaryActions>
			<FrameworkSwitcher />
			<VersionSwitcher />
		</DBControlPanelSecondaryActions>
	);
};

export default SecondaryActions;
