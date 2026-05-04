import { useMetadata } from '@builder.io/mitosis';
import { DBSection } from '../index';
import { FigmaSectionProps, sections } from './section.figma';

useMetadata({
	figma: sections
});

export default function SectionFigmaLite(props: FigmaSectionProps) {
	return (
		<DBSection spacing={props.spacing} width={props.width}>
			Content
		</DBSection>
	);
}
