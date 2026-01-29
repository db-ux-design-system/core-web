import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabItem from '../tab-item.lite';
import { StorybookTabItemArgTypes } from './_tab-item.arg.types';

useMetadata({
	storybookTitle: 'Show Icon Leading',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookTabItemArgTypes
});

export default function TabItemShowIconLeading() {
	return (
		<Fragment>
			<DBTabList>
				<DBTabItem
					label="(Default) False"
					icon="x_placeholder"
					showIcon={false}
				/>
			</DBTabList>
			<DBTabList>
				<DBTabItem label="True" icon="x_placeholder" showIcon={true} />
			</DBTabList>
		</Fragment>
	);
}
