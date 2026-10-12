import { useMetadata } from '@builder.io/mitosis';
import DBHeadingH2 from '../heading-h2.lite';
import { FigmaHeadingProps, headingH2 } from './heading.figma';

useMetadata({ figma: headingH2 });

export default function HeadingH2FigmaLite(props: FigmaHeadingProps) {
	return (
		<DBHeadingH2
			visualSize={props.visualSize}
			fontWeight={props.fontWeight}>
			{props.text}
		</DBHeadingH2>
	);
}
