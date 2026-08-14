import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNavigationItem from '../navigation-item.lite';
import { StorybookNavigationItemArgTypes } from './_navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookNavigationItemArgTypes
});

export default function NavigationItemDisabled() {
	return (
		<Fragment>
			<ul>
				<DBNavigationItem
					disabled={false}
					text="(Default) False"></DBNavigationItem>
			</ul>
			<ul>
				<DBNavigationItem
					disabled={true}
					text="True"></DBNavigationItem>
			</ul>
		</Fragment>
	);
}
