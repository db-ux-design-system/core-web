import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNavigationItem from '../navigation-item.lite';
import { StorybookNavigationItemArgTypes } from './_navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Show Icon',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookNavigationItemArgTypes
});

export default function NavigationItemShowIcon() {
	return (
		<Fragment>
			<ul>
				<DBNavigationItem icon="x_placeholder" showIcon={false}>
					<a href="#">(Default) False</a>
				</DBNavigationItem>
			</ul>
			<ul>
				<DBNavigationItem icon="x_placeholder" showIcon={true}>
					<a href="#">True</a>
				</DBNavigationItem>
			</ul>
		</Fragment>
	);
}
