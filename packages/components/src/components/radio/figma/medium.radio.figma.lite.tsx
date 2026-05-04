import { useMetadata } from '@builder.io/mitosis';
import { DBRadio } from '../index';
import { FigmaRadioProps, mediumRadios } from './radio.figma';

useMetadata({
	figma: mediumRadios
});

export default function MediumRadioFigmaLite(props: FigmaRadioProps) {
	return (
		<DBRadio
			size="medium"
			disabled={props.disabled}
			checked={props.checked}
			name="radio">
			Label
		</DBRadio>
	);
}
