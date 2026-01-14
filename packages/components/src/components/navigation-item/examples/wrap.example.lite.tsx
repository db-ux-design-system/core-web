import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNavigationItem from '../navigation-item.lite';
import { StorybookNavigationItemArgTypes } from './_navigation-item.arg.types';

useMetadata({
	storybookTitle: 'Wrap',
	storybookNames: [
		'No Wrap (Default)',
		'This is a very long text that is broken into multiple lines.',
		'This is a very long text that is broken into multiple lines.'
	],
	storybookArgTypes: StorybookNavigationItemArgTypes
});

export default function NavigationItemWrap() {
	return (
		<Fragment>
			<ul className="nav-item-list">
				<DBNavigationItem areaPopup={true}>
					<a href="#">No Wrap (Default)</a>
				</DBNavigationItem>
			</ul>
			<ul className="nav-item-list">
				<DBNavigationItem
					areaPopup={true}
					icon="x_placeholder"
					showIcon={true}
					wrap={true}>
					<a href="#">
						This is a very long text that is broken into multiple
						lines.
					</a>
				</DBNavigationItem>
			</ul>
			<ul className="nav-item-list">
				<DBNavigationItem areaPopup={true} wrap={true}>
					<a href="#">
						This is a very long text that is broken into multiple
						lines.
					</a>
				</DBNavigationItem>
			</ul>
		</Fragment>
	);
}
