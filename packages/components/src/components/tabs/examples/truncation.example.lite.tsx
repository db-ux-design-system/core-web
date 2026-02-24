import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTabItem from '../../tab-item/tab-item.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabPanel from '../../tab-panel/tab-panel.lite';
import DBTabs from '../tabs.lite';
import { StorybookTabsArgTypes } from './_tabs.arg.types';

useMetadata({
	storybookTitle: 'Truncation',
	storybookNames: ['truncated'],
	storybookArgTypes: StorybookTabsArgTypes
});

export default function TabsTruncation() {
	return (
		<Fragment>
			<div style={{ width: '100%' }} class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					truncated tab label (vertical only):
				</DBInfotext>
				<DBTabs orientation="vertical" width="auto">
					<DBTabList>
						<DBTabItem label="Very long tab label that gets truncated" />
						<DBTabItem label="Another long label" />
						<DBTabItem label="Short" />
					</DBTabList>
					<DBTabPanel>Tab Panel 1</DBTabPanel>
					<DBTabPanel>Tab Panel 2</DBTabPanel>
					<DBTabPanel>Tab Panel 3</DBTabPanel>
				</DBTabs>
			</div>
		</Fragment>
	);
}
