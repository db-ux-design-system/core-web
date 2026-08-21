import { DBButton } from '../../button';
import { DBControlPanelPrimaryActions } from '../index';

export default function ControlPanelPrimaryActions() {
	return (
		<>
			<h1>DBControlPanelPrimaryActions Documentation Examples</h1>

			<h2>1. Default Primary Actions</h2>
			<DBControlPanelPrimaryActions>
				<DBButton icon="magnifying_glass" variant="ghost" noText>
					Search
				</DBButton>
			</DBControlPanelPrimaryActions>
		</>
	);
}
