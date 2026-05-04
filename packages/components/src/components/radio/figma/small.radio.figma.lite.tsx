import { useMetadata } from '@builder.io/mitosis';
import { DBRadio } from '../index';
import { FigmaRadioProps, smallRadios } from './radio.figma';

useMetadata({
	figma: smallRadios
});

export default function SmallRadioFigmaLite(props: FigmaRadioProps) {
	return (
		<DBRadio
			size="small"
			disabled={props.disabled}
			checked={props.checked}
			name="radio">
			Label
		</DBRadio>
	);
}
