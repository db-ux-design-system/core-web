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
				<DBNavigationItem>
					<a href="#">(Default) False</a>
				</DBNavigationItem>
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
										<DBNavigationItem>
											<a href="#">Navigation-Item 2</a>
										</DBNavigationItem>
									</>
								}></DBNavigationItem>
							<DBNavigationItem>
								<a href="#">Navigation-Item 1</a>
							</DBNavigationItem>
						</>
					}></DBNavigationItem>
			</ul>
		</Fragment>
	);
}
