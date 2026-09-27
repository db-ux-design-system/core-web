import { useMetadata } from '@builder.io/mitosis';
import DBHeadingH5 from '../heading-h5.lite';
import { FigmaHeadingProps, headingH5 } from './heading.figma';

useMetadata({ figma: headingH5 });

export default function HeadingH5FigmaLite(props: FigmaHeadingProps) {
	return (
		<DBHeadingH5
			size={props.size}
			fontWeight={props.fontWeight}
			alignment={props.alignment}
			paragraphSpacing={props.paragraphSpacing}>
			{props.text}
		</DBHeadingH5>
	);
}
