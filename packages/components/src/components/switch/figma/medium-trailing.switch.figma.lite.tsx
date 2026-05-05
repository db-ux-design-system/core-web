import { useMetadata } from '@builder.io/mitosis';
import { DBSwitch } from '../index';
import { FigmaSwitchProps, mediumTrailingSwitches } from './switch.figma';

useMetadata({
	figma: mediumTrailingSwitches
});

export default function MediumTrailingSwitchFigmaLite(props: FigmaSwitchProps) {
	return (
		<DBSwitch
			size="medium"
			variant="trailing"
			disabled={props.disabled}
			checked={props.checked}
			validation={props.validation}
			name="switch">
			Label
		</DBSwitch>
	);
}
