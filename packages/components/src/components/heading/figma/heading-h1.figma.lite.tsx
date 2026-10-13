import { useMetadata } from '@builder.io/mitosis';
import DBHeadingH1 from '../heading-h1.lite';
import { FigmaHeadingProps, headingH1 } from './heading.figma';

useMetadata({ figma: headingH1 });

export default function HeadingH1FigmaLite(props: FigmaHeadingProps) {
	return (
		<DBHeadingH1
			visualSize={props.visualSize}
			fontWeight={props.fontWeight}>
			{props.text}
		</DBHeadingH1>
	);
}
