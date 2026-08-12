import { DBControlPanelPrimaryActions, DBSwitch, DBTooltip } from '@components';

export default function PrimaryActions({
	mode,
	toggleColorMode
}: {
	mode: boolean;
	toggleColorMode: () => void;
}) {
	return (
		<DBControlPanelPrimaryActions>
			<DBSwitch
				checked={mode}
				visualAid
				icon="sun"
				iconTrailing="moon"
				showLabel={false}
				onChange={() => {
					toggleColorMode();
				}}>
				<DBTooltip>Switch color scheme (light/dark)</DBTooltip>
				Switch color scheme (light/dark)
			</DBSwitch>
		</DBControlPanelPrimaryActions>
	);
}
