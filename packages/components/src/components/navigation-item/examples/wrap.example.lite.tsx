import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNavigationItem from '../navigation-item.lite';
import { StorybookNavigationItemArgTypes } from './_navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Wrap',
	storybookNames: [
		'(Default) False',
		'True'
	],
	storybookArgTypes: StorybookNavigationItemArgTypes
});

export default function NavigationItemWrap() {
	return (
		<Fragment>
			<ul>
				<DBNavigationItem>
					<a href="#">No Wrap (Default)</a>
				</DBNavigationItem>
			</ul>
			<ul
				style={{
					width: '200px'
				}}>
				<DBNavigationItem
					subNavigation={
						<>
							<DBNavigationItem
								subNavigation={
									<>
										<DBNavigationItem>
											<a href="#">Sub-Sub-Navi-Item 1</a>
										</DBNavigationItem>
										<DBNavigationItem>
											<a href="#">Sub-Sub-Navi-Item 2</a>
										</DBNavigationItem>
									</>
								}>
								Sub-Navi-Item 1
							</DBNavigationItem>
							<DBNavigationItem>
								<a href="#">Sub-Navi-Item 2</a>
							</DBNavigationItem>
						</>
					}
					icon="x_placeholder"
					showIcon={true}
					wrap={true}>
					This is a very long text that is broken into multiple lines.
				</DBNavigationItem>
			</ul>
		</Fragment>
	);
}
