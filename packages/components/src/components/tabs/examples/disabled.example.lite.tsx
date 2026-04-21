import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTabItem from '../../tab-item/tab-item.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabPanel from '../../tab-panel/tab-panel.lite';
import DBTabs from '../tabs.lite';
import { StorybookTabsArgTypes } from './_tabs.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['with disabled tab in the middle'],
	storybookArgTypes: StorybookTabsArgTypes
});

export default function TabsDisabled() {
	return (
		<Fragment>
			<div class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					with disabled tab in the middle:
				</DBInfotext>
				<DBTabs>
					<DBTabList>
						<DBTabItem>Active Tab</DBTabItem>
						<DBTabItem disabled={true}>Disabled Tab</DBTabItem>
						<DBTabItem>Another Tab</DBTabItem>
					</DBTabList>
					<DBTabPanel>Panel for active tab</DBTabPanel>
					<DBTabPanel>Panel for disabled tab</DBTabPanel>
					<DBTabPanel>Panel for another tab</DBTabPanel>
				</DBTabs>
			</div>
		</Fragment>
	);
}
