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
					subNavigation={
						<>
							<DBNavigationItem
								subNavigation={
									<>
										<DBNavigationItem>
											<a href="#">Navigation-Item 2</a>
										</DBNavigationItem>
									</>
								}>
								Also a navigation item with longer label
							</DBNavigationItem>
							<DBNavigationItem>
								<a href="#">Navigation-Item 1</a>
							</DBNavigationItem>
						</>
					}>
					True
				</DBNavigationItem>
			</ul>
		</Fragment>
	);
}
