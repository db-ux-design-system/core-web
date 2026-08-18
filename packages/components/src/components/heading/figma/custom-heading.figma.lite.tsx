import { useMetadata } from '@builder.io/mitosis';
import DBCustomHeading from '../custom-heading.lite';
import { customHeading, FigmaCustomHeadingProps } from './heading.figma';

useMetadata({ figma: customHeading });

export default function CustomHeadingFigmaLite(props: FigmaCustomHeadingProps) {
	return (
		<DBCustomHeading
			semanticLevel={props.semanticLevel}
			size={props.size}
			fontWeight={props.fontWeight}
			alignment={props.alignment}
			paragraphSpacing={props.paragraphSpacing}>
			{props.text}
		</DBCustomHeading>
	);
}
