import { Fragment, Slot, useMetadata } from '@builder.io/mitosis';
import DBFooter from '../footer.lite';
import { StorybookFooterArgTypes } from './_footer.arg.types';

useMetadata({
	storybookTitle: 'Show Meta',
	storybookNames: ['True', 'False'],
	storybookArgTypes: StorybookFooterArgTypes
});

export default function FooterShowMeta() {
	return (
		<Fragment>
			<DBFooter showMeta>
				<Slot name="main">True</Slot>
				<Slot name="meta">Meta Content</Slot>
			</DBFooter>
			<DBFooter showMeta={false}>
				<Slot name="main">False</Slot>
			</DBFooter>
		</Fragment>
	);
}
