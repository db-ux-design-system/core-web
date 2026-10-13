import { useMetadata } from '@builder.io/mitosis';
import DBHeadingH3 from '../heading-h3.lite';
import { FigmaHeadingProps, headingH3 } from './heading.figma';

useMetadata({ figma: headingH3 });

export default function HeadingH3FigmaLite(props: FigmaHeadingProps) {
	return (
		<DBHeadingH3
			visualSize={props.visualSize}
			fontWeight={props.fontWeight}>
			{props.text}
		</DBHeadingH3>
	);
}
