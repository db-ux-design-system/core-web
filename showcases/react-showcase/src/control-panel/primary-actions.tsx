import {
	DBButton,
	DBControlPanelPrimaryActions
} from '@db-ux/react-core-components/src';

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
