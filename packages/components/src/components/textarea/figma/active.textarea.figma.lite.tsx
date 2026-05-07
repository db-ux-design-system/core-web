import { useMetadata } from '@builder.io/mitosis';
import { DBTextarea } from '../index';
import { activeAboveTextareas } from './textarea.figma';

useMetadata({
	figma: activeAboveTextareas
});

export default function ActiveAboveTextareaFigmaLite() {
	return <DBTextarea label="Label" />;
}
