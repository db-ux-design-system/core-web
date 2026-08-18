import { useMetadata } from '@builder.io/mitosis';
import DBCustomHeading from '../custom-heading.lite';
import DBHeadingH2 from '../heading-h2.lite';
import { customHeading, FigmaCustomHeadingProps } from './heading.figma';

useMetadata({ figma: customHeading });

export default function CustomHeadingFigmaLite(props: FigmaCustomHeadingProps) {
	return (
		<DBCustomHeading alignment={props.alignment}>
			<DBHeadingH2>{props.text}</DBHeadingH2>
		</DBCustomHeading>
	);
}
