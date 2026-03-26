import { Fragment, Slot, useMetadata } from '@builder.io/mitosis';
import DBFooter from '../footer.lite';
import { StorybookFooterArgTypes } from './_footer.arg.types';

useMetadata({
	storybookTitle: 'Width',
	storybookNames: ['Full', 'Large', 'Small'],
	storybookArgTypes: StorybookFooterArgTypes
});

export default function FooterWidth() {
	return (
		<Fragment>
			<DBFooter width="full">
				<Slot name="main">Full</Slot>
				<Slot name="meta">Meta Content</Slot>
			</DBFooter>
			<DBFooter width="large">
				<Slot name="main">Large</Slot>
				<Slot name="meta">Meta Content</Slot>
			</DBFooter>
			<DBFooter width="small">
				<Slot name="main">Small</Slot>
				<Slot name="meta">Meta Content</Slot>
			</DBFooter>
		</Fragment>
	);
}
