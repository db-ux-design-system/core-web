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
			<DBTabList style={{ blockSize: '100%' }}>
				<DBTabItem label="Left" />
			</DBTabList>

			<DBTabList style={{ blockSize: '100%' }}>
				<DBTabItem label="Centered" />
			</DBTabList>
		</Fragment>
	);
}
