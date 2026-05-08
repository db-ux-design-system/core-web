import { useMetadata } from '@builder.io/mitosis';
import { DBTextarea } from '../index';
import { FigmaTextareaProps, textareas } from './textarea.figma';

useMetadata({
	figma: textareas
});

export default function TextareaFigmaLite(props: FigmaTextareaProps) {
	return <DBTextarea name="textarea" />;
}
