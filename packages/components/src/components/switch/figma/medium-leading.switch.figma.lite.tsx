import { useMetadata } from '@builder.io/mitosis';
import { DBSwitch } from '../index';
import { FigmaSwitchProps, mediumLeadingSwitches } from './switch.figma';

useMetadata({
	figma: mediumLeadingSwitches
});

export default function MediumLeadingSwitchFigmaLite(props: FigmaSwitchProps) {
	return (
		<DBSwitch
			size="medium"
			variant="leading"
			disabled={props.disabled}
			checked={props.checked}
			validation={props.validation}
			name="switch">
			Label
		</DBSwitch>
	);
}
