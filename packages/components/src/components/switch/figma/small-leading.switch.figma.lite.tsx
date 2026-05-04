import { useMetadata } from '@builder.io/mitosis';
import { DBSwitch } from '../index';
import { FigmaSwitchProps, smallLeadingSwitches } from './switch.figma';

useMetadata({
	figma: smallLeadingSwitches
});

export default function SmallLeadingSwitchFigmaLite(props: FigmaSwitchProps) {
	return (
		<DBSwitch
			size="small"
			variant="leading"
			disabled={props.disabled}
			checked={props.checked}
			name="switch">
			Label
		</DBSwitch>
	);
}
