import { useMetadata } from '@builder.io/mitosis';
import { DBSwitch } from '../index';
import { FigmaSwitchProps, switches } from './switch.figma';

useMetadata({
	figma: switches
});

export default function SwitchFigmaLite(props: FigmaSwitchProps) {
	return <DBSwitch name="switch">{props.label}</DBSwitch>;
}
