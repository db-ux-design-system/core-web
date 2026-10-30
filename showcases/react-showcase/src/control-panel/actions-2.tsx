import { DBButton, DBControlPanelActions2 } from '@components';

export default function Actions2() {
	return (
		<DBControlPanelActions2>
			<DBButton icon="x_placeholder" variant="ghost" noText>
				Information
			</DBButton>
			<DBButton icon="x_placeholder" variant="ghost" noText>
				Notification
			</DBButton>
			<DBButton icon="x_placeholder" variant="ghost" noText>
				Help
			</DBButton>
		</DBControlPanelActions2>
	);
}
