import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabItem from '../tab-item.lite';
import { StorybookTabItemArgTypes } from './_tab-item.arg.types';

useMetadata({
	storybookTitle: 'States',
	storybookNames: ['(Default) Enabled', 'active', 'disabled'],
	storybookArgTypes: StorybookTabItemArgTypes
});

export default function TabItemStates() {
	return (
		<Fragment>
			<DBTabList>
				<DBTabItem label="(Default) Enabled" />
			</DBTabList>
			<DBTabList>
				<DBTabItem label="active" active={true} />
			</DBTabList>
			<DBTabList>
				<DBTabItem label="disabled" disabled={true} />
			</DBTabList>
		</Fragment>
	);
}
