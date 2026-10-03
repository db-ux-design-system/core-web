import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBParagraph from '../paragraph.lite';
import DBText from '../text.lite';
import { StorybookTextArgTypes } from './_text.arg.types';

useMetadata({
	storybookTitle: 'Visually hidden',
	storybookComponentName: 'DBText',
	storybookComponentNames: ['DBText'],
	storybookNames: ['Additional context for screen readers'],
	storybookArgTypes: StorybookTextArgTypes
});

export default function TextVisuallyHidden() {
	return (
		<Fragment>
			<DBParagraph>
				Ticket price: 29 euros
				<DBText visuallyHidden>
					, reduced fare including seat reservation
				</DBText>
			</DBParagraph>
		</Fragment>
	);
}
