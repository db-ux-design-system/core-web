import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeadingH2 from '../heading-h2.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Permalink',
	storybookComponentName: 'DBHeadingH2',
	storybookNames: ['Anchor link'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingPermalink() {
	return (
		<Fragment>
			<DBHeadingH2
				id="installation"
				class="heading-permalink"
				aria-label="Installation">
				<span>Installation</span>
				<a
					class="db-link heading-permalink-link"
					href="#installation"
					aria-label="Direct link to Installation">
					<span aria-hidden="true">#</span>
				</a>
			</DBHeadingH2>
		</Fragment>
	);
}
