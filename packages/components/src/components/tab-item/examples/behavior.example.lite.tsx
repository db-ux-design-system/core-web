import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabItem from '../tab-item.lite';
import { StorybookTabItemArgTypes } from './_tab-item.arg.types';

useMetadata({
	storybookTitle: 'Behavior',
	storybookNames: ['(Default) Auto Width', 'Width full'],
	storybookArgTypes: StorybookTabItemArgTypes
});

export default function TabItemBehavior() {
	return (
		<Fragment>
			<DBTabList>
				<DBTabItem label="(Default) Auto Width" />
			</DBTabList>
			<DBTabList className="w-full">
				<DBTabItem label="Width full" />
			</DBTabList>
		</Fragment>
	);
}
