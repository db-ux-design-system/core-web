import { Fragment, Slot, useMetadata } from '@builder.io/mitosis';
import DBFooter from '../footer.lite';
import { StorybookFooterArgTypes } from './_footer.arg.types';

useMetadata({
	storybookTitle: 'Show Copyright',
	storybookNames: ['True', 'False'],
	storybookArgTypes: StorybookFooterArgTypes
});

export default function FooterShowCopyright() {
	return (
		<Fragment>
			<DBFooter showCopyright>
				<Slot name="main">True</Slot>
				<Slot name="meta">Meta Content</Slot>
			</DBFooter>
			<DBFooter showCopyright={false}>
				<Slot name="main">False</Slot>
				<Slot name="meta">Meta Content</Slot>
			</DBFooter>
		</Fragment>
	);
}
