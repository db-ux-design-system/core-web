import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBDrawerHeader from '../drawer-header.lite';
import { StorybookDrawerHeaderArgTypes } from './_drawer-header.arg.types';

useMetadata({
	storybookTitle: 'Example',
	storybookNames: ['(Default) With children', 'With text prop'],
	storybookArgTypes: StorybookDrawerHeaderArgTypes
});

export default function DrawerHeaderExample() {
	return (
		<Fragment>
			<div>
				<DBDrawerHeader>(Default) With children</DBDrawerHeader>
			</div>
			<div>
				<DBDrawerHeader text="With text prop" />
			</div>
		</Fragment>
	);
}
