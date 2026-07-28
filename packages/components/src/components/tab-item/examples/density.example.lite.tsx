import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabItem from '../tab-item.lite';
import { StorybookTabItemArgTypes } from './_tab-item.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookTabItemArgTypes
});

export default function TabItemDensity() {
	return (
		<Fragment>
			<DBTabList data-density="functional">
				<DBTabItem label="Functional" />
			</DBTabList>
			<DBTabList>
				<DBTabItem label="(Default) Regular" />
			</DBTabList>
			<DBTabList data-density="expressive">
				<DBTabItem label="Expressive" />
			</DBTabList>
		</Fragment>
	);
}
