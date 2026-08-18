import { useMetadata } from '@builder.io/mitosis';
import DBCustomHeading from '../custom-heading.lite';
import { customHeading, FigmaCustomHeadingProps } from './heading.figma';

useMetadata({ figma: customHeading });

export default function CustomHeadingFigmaLite(props: FigmaCustomHeadingProps) {
	return (
		<DBCustomHeading
			size={props.size}
			fontWeight={props.fontWeight}
			alignment={props.alignment}
			paragraphSpacing={props.paragraphSpacing}>
			<h2>{props.text}</h2>
		</DBCustomHeading>
	);
}
