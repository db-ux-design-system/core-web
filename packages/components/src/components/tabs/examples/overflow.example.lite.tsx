import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBTabItem from '../../tab-item/tab-item.lite';
import DBTabList from '../../tab-list/tab-list.lite';
import DBTabPanel from '../../tab-panel/tab-panel.lite';
import DBTabs from '../tabs.lite';
import { StorybookTabsArgTypes } from './_tabs.arg.types';

useMetadata({
	storybookTitle: 'Overflow',
	storybookNames: [
		'no overflow',
		'with overflow - behavior: arrows',
		'with overflow - behavior: scrollbar',
		'arrows heavy load (12 tabs, custom distance)',
		'vertical with arrows overflow'
	],
	storybookArgTypes: StorybookTabsArgTypes
});

export default function TabsOverflow() {
	return (
		<Fragment>
			<div style={{ width: '300px' }} class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					no overflow:
				</DBInfotext>
				<DBTabs tabItemWidth="auto">
					<DBTabList>
						<DBTabItem>Test 1</DBTabItem>
						<DBTabItem>Test 2</DBTabItem>
						<DBTabItem>Test 3</DBTabItem>
					</DBTabList>
					<DBTabPanel>Tab Panel 1</DBTabPanel>
					<DBTabPanel>Tab Panel 2</DBTabPanel>
					<DBTabPanel>Tab Panel 3</DBTabPanel>
				</DBTabs>
			</div>
			<div style={{ width: '300px' }} class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					with overflow - behavior: arrows:
				</DBInfotext>
				<DBTabs behavior="arrows">
					<DBTabList>
						<DBTabItem>Test 1</DBTabItem>
						<DBTabItem>Test 2</DBTabItem>
						<DBTabItem>Test 3</DBTabItem>
						<DBTabItem>Test 4</DBTabItem>
						<DBTabItem>Test 5</DBTabItem>
					</DBTabList>
					<DBTabPanel>Tab Panel 1</DBTabPanel>
					<DBTabPanel>Tab Panel 2</DBTabPanel>
					<DBTabPanel>Tab Panel 3</DBTabPanel>
					<DBTabPanel>Tab Panel 4</DBTabPanel>
					<DBTabPanel>Tab Panel 5</DBTabPanel>
				</DBTabs>
			</div>
			<div style={{ width: '300px' }} class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					with overflow - behavior: scrollbar:
				</DBInfotext>
				<DBTabs behavior="scrollbar">
					<DBTabList>
						<DBTabItem>Test 1</DBTabItem>
						<DBTabItem>Test 2</DBTabItem>
						<DBTabItem>Test 3</DBTabItem>
						<DBTabItem>Test 4</DBTabItem>
						<DBTabItem>Test 5</DBTabItem>
					</DBTabList>
					<DBTabPanel>Tab Panel 1</DBTabPanel>
					<DBTabPanel>Tab Panel 2</DBTabPanel>
					<DBTabPanel>Tab Panel 3</DBTabPanel>
					<DBTabPanel>Tab Panel 4</DBTabPanel>
					<DBTabPanel>Tab Panel 5</DBTabPanel>
				</DBTabs>
			</div>
			<div style={{ width: '300px' }} class="fit-content-container">
				<DBInfotext icon="none" size="small" semantic="informational">
					arrows heavy load (12 tabs, custom distance 250px):
				</DBInfotext>
				<DBTabs behavior="arrows" arrowScrollDistance={250}>
					<DBTabList>
						<DBTabItem>Berlin</DBTabItem>
						<DBTabItem>München</DBTabItem>
						<DBTabItem>Hamburg</DBTabItem>
						<DBTabItem>Frankfurt</DBTabItem>
						<DBTabItem>Köln</DBTabItem>
						<DBTabItem>Stuttgart</DBTabItem>
						<DBTabItem>Düsseldorf</DBTabItem>
						<DBTabItem>Leipzig</DBTabItem>
						<DBTabItem>Hannover</DBTabItem>
						<DBTabItem>Nürnberg</DBTabItem>
						<DBTabItem>Dresden</DBTabItem>
						<DBTabItem>Bremen</DBTabItem>
					</DBTabList>
					<DBTabPanel>Berlin</DBTabPanel>
					<DBTabPanel>München</DBTabPanel>
					<DBTabPanel>Hamburg</DBTabPanel>
					<DBTabPanel>Frankfurt</DBTabPanel>
					<DBTabPanel>Köln</DBTabPanel>
					<DBTabPanel>Stuttgart</DBTabPanel>
					<DBTabPanel>Düsseldorf</DBTabPanel>
					<DBTabPanel>Leipzig</DBTabPanel>
					<DBTabPanel>Hannover</DBTabPanel>
					<DBTabPanel>Nürnberg</DBTabPanel>
					<DBTabPanel>Dresden</DBTabPanel>
					<DBTabPanel>Bremen</DBTabPanel>
				</DBTabs>
			</div>
		</Fragment>
	);
}
