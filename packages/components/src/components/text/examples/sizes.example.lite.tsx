import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBParagraph from '../paragraph.lite';
import { StorybookParagraphArgTypes } from './_text.arg.types';

useMetadata({
	storybookTitle: 'Sizes',
	storybookComponentName: 'DBParagraph',
	storybookComponentNames: [
		'DBParagraph',
		'DBParagraph',
		'DBParagraph',
		'DBParagraph',
		'DBParagraph',
		'DBParagraph',
		'DBParagraph',
		'DBParagraph',
		'DBParagraph',
		'DBParagraph'
	],
	storybookNames: [
		'(Default) Inherited',
		'3xl',
		'2xl',
		'xl',
		'lg',
		'md',
		'sm',
		'xs',
		'2xs',
		'3xs'
	],
	storybookArgTypes: StorybookParagraphArgTypes
});

export default function TextSizes() {
	return (
		<Fragment>
			{/* Omitting size inherits from the surrounding typography, so there is
			 * no default step to override. */}
			<DBParagraph>(Default) Inherited</DBParagraph>
			<DBParagraph size="3xl">3xl</DBParagraph>
			<DBParagraph size="2xl">2xl</DBParagraph>
			<DBParagraph size="xl">xl</DBParagraph>
			<DBParagraph size="lg">lg</DBParagraph>
			<DBParagraph size="md">md</DBParagraph>
			<DBParagraph size="sm">sm</DBParagraph>
			<DBParagraph size="xs">xs</DBParagraph>
			<DBParagraph size="2xs">2xs</DBParagraph>
			<DBParagraph size="3xs">3xs</DBParagraph>
		</Fragment>
	);
}
