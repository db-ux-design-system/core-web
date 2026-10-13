import { useMetadata } from '@builder.io/mitosis';
import DBHeadingH6 from '../heading-h6.lite';
import { FigmaHeadingProps, headingH6 } from './heading.figma';

useMetadata({ figma: headingH6 });

export default function HeadingH6FigmaLite(props: FigmaHeadingProps) {
	return (
		<DBHeadingH6
			visualSize={props.visualSize}
			fontWeight={props.fontWeight}>
			{props.text}
		</DBHeadingH6>
	);
}
