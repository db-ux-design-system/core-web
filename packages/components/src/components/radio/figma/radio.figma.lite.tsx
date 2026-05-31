import { useMetadata } from '@builder.io/mitosis';
import { DBRadio } from '../index';
import { FigmaRadioProps, radios } from './radio.figma';

useMetadata({
	figma: radios
});

export default function RadioFigmaLite(props: FigmaRadioProps) {
	return <DBRadio name="radio">{props.label}</DBRadio>;
}
