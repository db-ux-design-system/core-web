import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabItem from '../tab-item.lite';
import { StorybookTabItemArgTypes } from './_tab-item.arg.types';

useMetadata({
	storybookTitle: 'Show Icon Trailing',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookTabItemArgTypes
});

export default function TabItemShowIconTrailing() {
	return (
		<Fragment>
			<DBTabList>
				<DBTabItem
					label="(Default) False"
					iconTrailing="x_placeholder"
					showIconTrailing={false}
				/>
			</DBTabList>
			<DBTabList>
				<DBTabItem
					label="True"
					iconTrailing="x_placeholder"
					showIconTrailing={true}
				/>
			</DBTabList>
		</Fragment>
	);
}
