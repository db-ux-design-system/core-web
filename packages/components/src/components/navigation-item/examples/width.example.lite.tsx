import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNavigationItem from '../navigation-item.lite';
import { StorybookNavigationItemArgTypes } from './_navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Width',
	storybookNames: ['(Default) Auto', 'Full'],
	storybookArgTypes: StorybookNavigationItemArgTypes
});

export default function NavigationItemWidth() {
	return (
		<Fragment>
			<ul style={{ width: '400px' }}>
				<DBNavigationItem text="(Default) Auto"></DBNavigationItem>
			</ul>
			<ul style={{ width: '400px' }}>
				<DBNavigationItem width="full" text="Full"></DBNavigationItem>
			</ul>
		</Fragment>
	);
}
