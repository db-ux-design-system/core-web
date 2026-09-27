import { useMetadata } from '@builder.io/mitosis';
import DBHeadingH4 from '../heading-h4.lite';
import { FigmaHeadingProps, headingH4 } from './heading.figma';

useMetadata({ figma: headingH4 });

export default function HeadingH4FigmaLite(props: FigmaHeadingProps) {
	return (
		<DBHeadingH4
			size={props.size}
			fontWeight={props.fontWeight}
			alignment={props.alignment}
			paragraphSpacing={props.paragraphSpacing}>
			{props.text}
		</DBHeadingH4>
	);
}
