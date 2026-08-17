import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBCustomHeading from '../custom-heading.lite';
import DBHeadingH2 from '../heading-h2.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Permalink',
	storybookComponentName: 'DBHeadingH2',
	storybookComponentNames: ['DBHeadingH2', 'DBCustomHeading'],
	storybookNames: ['Native anchor link', 'Custom anchor link'],
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
			<DBCustomHeading
				semanticLevel={2}
				id="custom-installation"
				class="heading-permalink"
				aria-label="Custom installation">
				<div style={{ display: 'inline' }}>Custom installation</div>
				<a
					class="db-link heading-permalink-link"
					href="#custom-installation"
					aria-label="Direct link to Custom installation">
					<span aria-hidden="true">#</span>
				</a>
			</DBCustomHeading>
		</Fragment>
	);
}
