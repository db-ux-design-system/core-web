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
			<DBTabList>
				<DBTabItem data-density="functional" label="Functional" />
			</DBTabList>
			<DBTabList>
				<DBTabItem data-density="regular" label="(Default) Regular" />
			</DBTabList>
			<DBTabList>
				<DBTabItem data-density="expressive" label="Expressive" />
			</DBTabList>
		</Fragment>
	);
}
