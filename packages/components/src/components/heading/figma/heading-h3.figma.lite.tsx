import { useMetadata } from '@builder.io/mitosis';
import DBHeadingH3 from '../heading-h3.lite';
import { FigmaHeadingProps, headingH3 } from './heading.figma';

useMetadata({ figma: headingH3 });

export default function HeadingH3FigmaLite(props: FigmaHeadingProps) {
	return (
		<DBHeadingH3
			size={props.size}
			fontWeight={props.fontWeight}
			alignment={props.alignment}
			paragraphSpacing={props.paragraphSpacing}>
			{props.text}
		</DBHeadingH3>
	);
}
