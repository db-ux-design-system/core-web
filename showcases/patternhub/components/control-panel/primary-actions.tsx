import { DBControlPanelPrimaryActions, DBSwitch, DBTooltip } from '@components';

const PrimaryActions = ({
	mode,
	setColorMode
}: {
	mode: boolean;
	setColorMode: (dark: boolean) => void;
}) => {
	return (
		<DBControlPanelPrimaryActions>
			<DBSwitch
				checked={mode}
				visualAid
				icon="sun"
				iconTrailing="moon"
				showLabel={false}
				onChange={() => {
					setColorMode(!mode);
				}}>
				<DBTooltip>Switch color scheme (light/dark)</DBTooltip>
				Switch color scheme (light/dark)
			</DBSwitch>
		</DBControlPanelPrimaryActions>
	);
};

export default PrimaryActions;
