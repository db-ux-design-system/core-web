import { useMetadata } from '@builder.io/mitosis';
import DBCustomHeading from '../custom-heading.lite';
import { customHeading, FigmaCustomHeadingProps } from './heading.figma';

useMetadata({ figma: customHeading });

export default function CustomHeadingFigmaLite(props: FigmaCustomHeadingProps) {
	return (
		<DBCustomHeading
			visualSize={props.visualSize}
			fontWeight={props.fontWeight}>
			<h2>{props.text}</h2>
		</DBCustomHeading>
	);
}
