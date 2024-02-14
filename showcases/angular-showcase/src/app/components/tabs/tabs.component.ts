import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/tabs.json';
import { DefaultComponent } from '../default.component';
import { DBTabs } from '../../../../../../output/angular/src/components/tabs';
import { DBTab } from '../../../../../../output/angular/src/components/tab';
import { DBTabPanel } from '../../../../../../output/angular/src/components/tab-panel';
import { DBTabList } from '../../../../../../output/angular/src/components/tab-list';
import { DBInfotext } from '../../../../../../output/angular/src/components/infotext';

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	imports: [
		DefaultComponent,
		DBTabs,
		DBTab,
		DBTabList,
		DBTabPanel,
		DBInfotext
	],
	standalone: true
})
export class TabsComponent {
	variants = defaultComponentVariants;
}
