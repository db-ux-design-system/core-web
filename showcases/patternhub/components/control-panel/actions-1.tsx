import { DBControlPanelActions1, DBSwitch, DBTooltip } from '@components';

export default function Actions1({
	mode,
	toggleColorMode
}: {
	mode: boolean;
	toggleColorMode: () => void;
}) {
	return (
		<DBControlPanelActions1>
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
		</DBControlPanelActions1>
	);
}
