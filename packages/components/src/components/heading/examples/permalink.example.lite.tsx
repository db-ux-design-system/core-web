import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBHeading from '../heading.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Permalink',
	storybookNames: ['Anchor link'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingPermalink() {
	return (
		<Fragment>
			<DBHeading
				as="h2"
				id="installation"
				class="heading-permalink"
				aria-label="Installation"
				endSlot={
					<a
						class="db-link heading-permalink-link"
						href="#installation"
						aria-label="Direct link to Installation">
						<span aria-hidden="true">#</span>
					</a>
				}>
				<span>Installation</span>
			</DBHeading>
		</Fragment>
	);
}
