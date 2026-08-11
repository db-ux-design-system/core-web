import { DBControlPanelPrimaryActions, DBSwitch, DBTooltip } from '@components';

export default function PrimaryActions({
	mode,
	setColorMode
}: {
	mode: boolean;
	setColorMode: (isDark: boolean) => void;
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
					setColorMode(!mode);
				}}>
				<DBTooltip>Switch color scheme (light/dark)</DBTooltip>
				Switch color scheme (light/dark)
			</DBSwitch>
		</DBControlPanelPrimaryActions>
	);
}
