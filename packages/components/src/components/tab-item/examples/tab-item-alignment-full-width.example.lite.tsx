import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabItem from '../tab-item.lite';
import { StorybookTabItemArgTypes } from './_tab-item.arg.types';

useMetadata({
	storybookTitle: 'Tab-Item Alignment Full Width',
	storybookNames: ['Start', 'Centered', 'End'],
	storybookArgTypes: StorybookTabItemArgTypes
});

export default function TabItemAlignmentFullWidth() {
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
