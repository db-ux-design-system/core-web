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
				<DBNavigationItem>
					<a href="#">(Default) Auto</a>
				</DBNavigationItem>
			</ul>
			<ul style={{ width: '400px' }}>
				<DBNavigationItem width="full">
					<a href="#">Full</a>
				</DBNavigationItem>
			</ul>
		</Fragment>
	);
}
