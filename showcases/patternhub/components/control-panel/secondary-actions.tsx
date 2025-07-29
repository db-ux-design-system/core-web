import { DBControlPanelSecondaryActions } from '@components';
import VersionSwitcher from '../version-switcher';

const SecondaryActions = () => {
	return (
		<DBControlPanelSecondaryActions>
			<VersionSwitcher />
		</DBControlPanelSecondaryActions>
	);
};

export default SecondaryActions;
