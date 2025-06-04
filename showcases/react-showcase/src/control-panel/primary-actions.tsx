import {
	DBButton,
	DBControlPanelPrimaryActions
} from '@components';

const PrimaryActions = () => {
	return (
		<DBControlPanelPrimaryActions>
			<DBButton icon="magnifying_glass" variant="ghost" noText>
				Search
			</DBButton>
		</DBControlPanelPrimaryActions>
	);
};

export default PrimaryActions;
