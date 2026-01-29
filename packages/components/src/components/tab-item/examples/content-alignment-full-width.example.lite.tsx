import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabItem from '../tab-item.lite';
import { StorybookTabItemArgTypes } from './_tab-item.arg.types';

useMetadata({
	storybookTitle: 'Content Alignment Full Width',
	storybookNames: ['Left', 'Centered'],
	storybookArgTypes: StorybookTabItemArgTypes
});

export default function TabItemContentAlignmentFullWidth() {
	return (
		<Fragment>
			<div style={{ width: '500px' }}>
				<DBTabList>
					<DBTabItem label="Left" />
				</DBTabList>
			</div>
			<div style={{ width: '500px' }}>
				<DBTabList>
					<DBTabItem label="Centered" />
				</DBTabList>
			</div>
		</Fragment>
	);
}
