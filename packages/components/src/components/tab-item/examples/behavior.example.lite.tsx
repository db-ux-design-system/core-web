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
				<DBTabItem label="(Default) Auto Width">
					(Default) Auto Width
				</DBTabItem>
			</DBTabList>
			<div style={{ width: '500px' }}>
				<DBTabList>
					<DBTabItem label="Width full">Width full</DBTabItem>
				</DBTabList>
			</div>
		</Fragment>
	);
}
