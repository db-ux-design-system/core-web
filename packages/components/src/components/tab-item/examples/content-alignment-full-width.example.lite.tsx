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
			<DBTabList className="w-full">
				<DBTabItem label="Left" />
			</DBTabList>

			<DBTabList className="w-full">
				<DBTabItem label="Centered" />
			</DBTabList>
		</Fragment>
	);
}
