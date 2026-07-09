import {
	DBButton,
	DBControlPanelSecondaryActions,
	DBSwitch
} from '@components';
import useQuery from '../hooks/use-query';

const SecondaryActions = () => {
	const { shell, setShell } = useQuery();

	return (
		<DBControlPanelSecondaryActions>
			<DBSwitch
				checked={shell}
				onChange={() => {
					setShell(!shell);
				}}>
				Shell
			</DBSwitch>
			<DBButton icon="x_placeholder" variant="ghost" noText>
				Notification
			</DBButton>
			<DBButton icon="x_placeholder" variant="ghost" noText>
				Help
			</DBButton>
		</DBControlPanelSecondaryActions>
	);
};

export default SecondaryActions;
