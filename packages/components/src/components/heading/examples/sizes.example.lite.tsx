import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeadingH2 from '../heading-h2.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Visual sizes',
	storybookComponentName: 'DBHeadingH2',
	storybookComponentNames: [
		'DBHeadingH2',
		'DBHeadingH2',
		'DBHeadingH2',
		'DBHeadingH2',
		'DBHeadingH2',
		'DBHeadingH2',
		'DBHeadingH2',
		'DBHeadingH2',
		'DBHeadingH2'
	],
	storybookNames: [
		'Visual h1',
		'Visual h2',
		'Visual h3',
		'Visual h4',
		'Visual h5',
		'Visual h6',
		'Paragraph large',
		'Paragraph medium',
		'Paragraph small'
	],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingSizes() {
	return (
		<Fragment>
			<DBHeadingH2 visualSize="h1">Visual h1</DBHeadingH2>
			<DBHeadingH2 visualSize="h2">Visual h2</DBHeadingH2>
			<DBHeadingH2 visualSize="h3">Visual h3</DBHeadingH2>
			<DBHeadingH2 visualSize="h4">Visual h4</DBHeadingH2>
			<DBHeadingH2 visualSize="h5">Visual h5</DBHeadingH2>
			<DBHeadingH2 visualSize="h6">Visual h6</DBHeadingH2>
			<i class="line-break" data-sb-ignore="true" />
			<DBHeadingH2 visualSize="p-large">Paragraph large</DBHeadingH2>
			<DBHeadingH2 visualSize="p-medium">Paragraph medium</DBHeadingH2>
			<DBHeadingH2 visualSize="p-small">Paragraph small</DBHeadingH2>
		</Fragment>
	);
}
