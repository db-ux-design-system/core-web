import { useMetadata } from '@builder.io/mitosis';
import DBCustomButton from '../../custom-button/custom-button.lite';
import DBCustomHeading from '../custom-heading.lite';
import DBHeadingH2 from '../heading-h2.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Permalink',
	storybookComponentName: 'DBCustomHeading',
	storybookComponentNames: ['DBCustomHeading'],
	storybookNames: ['Heading with a permalink button'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingPermalink() {
	return (
		<DBCustomHeading class="heading-permalink">
			<DBHeadingH2 id="installation">Installation</DBHeadingH2>
			<DBCustomButton
				class="heading-permalink-link"
				variant="ghost"
				icon="link_chain"
				noText={true}>
				<a href="#installation">Direct link to Installation</a>
			</DBCustomButton>
		</DBCustomHeading>
	);
}
