import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNavigationItem from '../navigation-item.lite';
import { StorybookNavigationItemArgTypes } from './_navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Active',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookNavigationItemArgTypes
});

export default function NavigationItemActive() {
	return (
		<Fragment>
			<ul>
				<DBNavigationItem active={false}>
					<a href="#">(Default) False</a>
				</DBNavigationItem>
			</ul>
			<ul>
				<DBNavigationItem active={true}>
					<a href="#">True</a>
				</DBNavigationItem>
			</ul>
		</Fragment>
	);
}
