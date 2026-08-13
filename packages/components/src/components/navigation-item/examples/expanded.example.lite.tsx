import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNavigationItem from '../navigation-item.lite';
import { StorybookNavigationItemArgTypes } from './_navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Expanded',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookNavigationItemArgTypes
});

export default function NavigationItemExpanded() {
	return (
		<Fragment>
			<ul>
				<DBNavigationItem text="(Default) False"></DBNavigationItem>
			</ul>
			<ul>
				<DBNavigationItem
					text="True"
					subNavigation={
						<>
							<DBNavigationItem
								text="Also a navigation item with longer label"
								subNavigation={
									<>
										<DBNavigationItem text="Navigation-Item 2"></DBNavigationItem>
									</>
								}></DBNavigationItem>
							<DBNavigationItem text="Navigation-Item 1"></DBNavigationItem>
						</>
					}></DBNavigationItem>
			</ul>
		</Fragment>
	);
}
