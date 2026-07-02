import { DBButton, DBControlPanelSecondaryActions } from '@components';

const SecondaryActions = () => (
	<DBControlPanelSecondaryActions>
		<DBButton icon="x_placeholder" variant="ghost" noText>
			Profile
		</DBButton>
		<DBButton icon="x_placeholder" variant="ghost" noText>
			Notification
		</DBButton>
		<DBButton icon="x_placeholder" variant="ghost" noText>
			Help
		</DBButton>
	</DBControlPanelSecondaryActions>
);

export default SecondaryActions;
