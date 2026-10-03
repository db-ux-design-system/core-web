import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBParagraph from '../paragraph.lite';
import DBText from '../text.lite';
import { StorybookTextArgTypes } from './_text.arg.types';

useMetadata({
	storybookTitle: 'Inline text',
	storybookComponentName: 'DBText',
	storybookComponentNames: ['DBText', 'DBText'],
	storybookNames: ['Inside a paragraph', 'Inside a description list'],
	storybookArgTypes: StorybookTextArgTypes
});

export default function TextInline() {
	return (
		<Fragment>
			<DBParagraph>
				A paragraph with an{' '}
				<DBText size="sm">inline passage at a smaller size</DBText> that
				keeps flowing in the same line.
			</DBParagraph>
			{/* DBText renders a span, which is phrasing content, so it is valid
			 * inside dt and dd without a wrapper. */}
			<dl>
				<dt>
					<DBText size="2xs">Departure</DBText>
				</dt>
				<dd>
					<DBText>Berlin Hauptbahnhof</DBText>
				</dd>
			</dl>
		</Fragment>
	);
}
