import { useMetadata } from '@builder.io/mitosis';
import { DBCustomSelect } from '../index';
import { FigmaCustomSelectProps, customSelects } from './custom-select.figma';

useMetadata({
	figma: customSelects
});

export default function CustomSelectFigmaLite(props: FigmaCustomSelectProps) {
	return <DBCustomSelect name="custom-select" />;
}
