import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNavigationItem from '../navigation-item.lite';
import { StorybookNavigationItemArgTypes } from './_navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Wrap',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookNavigationItemArgTypes
});

export default function NavigationItemWrap() {
	return (
		<Fragment>
			<ul>
				<DBNavigationItem text="No Wrap (Default)"></DBNavigationItem>
			</ul>
			<ul
				style={{
					width: '200px'
				}}>
				<DBNavigationItem
					text="This is a very long text that is broken into multiple lines."
					subNavigation={
						<>
							<DBNavigationItem
								text="Sub-Navi-Item 1"
								subNavigation={
									<>
										<DBNavigationItem text="Sub-Sub-Navi-Item 1"></DBNavigationItem>
										<DBNavigationItem text="Sub-Sub-Navi-Item 2"></DBNavigationItem>
									</>
								}></DBNavigationItem>
							<DBNavigationItem text="Sub-Navi-Item 2"></DBNavigationItem>
						</>
					}
					icon="x_placeholder"
					showIcon={true}
					wrap={true}></DBNavigationItem>
			</ul>
		</Fragment>
	);
}
