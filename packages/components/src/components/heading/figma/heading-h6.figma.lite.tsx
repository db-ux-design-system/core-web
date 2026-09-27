import { useMetadata } from '@builder.io/mitosis';
import DBHeadingH6 from '../heading-h6.lite';
import { FigmaHeadingProps, headingH6 } from './heading.figma';

useMetadata({ figma: headingH6 });

export default function HeadingH6FigmaLite(props: FigmaHeadingProps) {
	return (
		<DBHeadingH6
			size={props.size}
			fontWeight={props.fontWeight}
			alignment={props.alignment}
			paragraphSpacing={props.paragraphSpacing}>
			{props.text}
		</DBHeadingH6>
	);
}
