import { useMetadata } from '@builder.io/mitosis';
import { DBSwitch } from '../index';
import { FigmaSwitchProps, smallTrailingSwitches } from './switch.figma';

useMetadata({
	figma: smallTrailingSwitches
});

export default function SmallTrailingSwitchFigmaLite(props: FigmaSwitchProps) {
	return (
		<DBSwitch
			size="small"
			variant="trailing"
			disabled={props.disabled}
			checked={props.checked}
			name="switch">
			Label
		</DBSwitch>
	);
}
