import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTextarea from '../textarea.lite';
import { StorybookTextareaArgTypes } from './_textarea.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookTextareaArgTypes
});

export default function TextareaDensity() {
	return (
		<Fragment>
			<DBTextarea
				data-density="functional"
				label="Label"
				placeholder="Functional"
			/>
			<DBTextarea
				data-density="regular"
				label="Label"
				placeholder="(Default) Regular"
			/>
			<DBTextarea
				data-density="expressive"
				label="Label"
				placeholder="Expressive"
			/>
		</Fragment>
	);
}
