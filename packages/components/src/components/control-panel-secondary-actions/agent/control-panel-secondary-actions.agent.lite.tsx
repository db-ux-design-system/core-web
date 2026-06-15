import { DBButton } from '../../button';
import { DBControlPanelSecondaryActions } from '../index';

export default function ControlPanelSecondaryActions() {
	return (
		<>
			<h1>DBControlPanelSecondaryActions Documentation Examples</h1>

			<h2>1. Default Secondary Actions</h2>
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
		</>
	);
}
