import { Fragment, Slot, useMetadata } from '@builder.io/mitosis';
import DBFooter from '../footer.lite';
import { StorybookFooterArgTypes } from './_footer.arg.types';

useMetadata({
	storybookTitle: 'Show Main',
	storybookNames: ['True', 'False'],
	storybookArgTypes: StorybookFooterArgTypes
});

export default function FooterShowMain() {
	return (
		<Fragment>
			<DBFooter showMain>
				<Slot name="main">True</Slot>
				<Slot name="meta">Meta Content</Slot>
			</DBFooter>
			<DBFooter showMain={false}>
				<Slot name="main">False</Slot>
				<Slot name="meta">Meta Content</Slot>
			</DBFooter>
		</Fragment>
	);
}
