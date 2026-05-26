import { useMetadata } from '@builder.io/mitosis';
import { DBButton } from '../index';
import { FigmaButtonProps, buttons } from './button.figma';

useMetadata({
	figma: buttons
});

export default function ButtonFigmaLite(props: FigmaButtonProps) {
	return <DBButton type="button">{props.text}</DBButton>;
}
