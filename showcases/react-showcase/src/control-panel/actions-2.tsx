import { DBButton, DBControlPanelActions2, DBSwitch } from '@components';
import useQuery from '../hooks/use-query';

export default function Actions2() {
	const { shell, setShell } = useQuery();

	return (
		<DBControlPanelActions2>
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
		</DBControlPanelActions2>
	);
}
