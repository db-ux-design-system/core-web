import { DBControlPanelActions2, DBSwitch } from '@components';
import useQuery from '../hooks/use-query';

export default function Actions2() {
	const { shell, setShell, adaptiveColoring, setAdaptiveColoring } =
		useQuery();

	return (
		<DBControlPanelActions2>
			<DBSwitch
				checked={shell}
				onChange={() => {
					setShell(!shell);
				}}>
				Shell
			</DBSwitch>
			<DBSwitch
				checked={adaptiveColoring}
				onChange={() => {
					setAdaptiveColoring(!adaptiveColoring);
				}}>
				Adaptive coloring
			</DBSwitch>
		</DBControlPanelActions2>
	);
}
