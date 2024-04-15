import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/tabs.json';
import { DefaultComponent } from '../default.component';
import { DBTabs } from '../../../../../../output/angular/src/components/tabs';
import { DBTabItem } from '../../../../../../output/angular/src/components/tab-item';
import { DBTabPanel } from '../../../../../../output/angular/src/components/tab-panel';
import { DBTabList } from '../../../../../../output/angular/src/components/tab-list';
import { DBInfotext } from '../../../../../../output/angular/src/components/infotext';

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	imports: [
		DefaultComponent,
		DBTabs,
		DBTabItem,
		DBTabList,
		DBTabPanel,
		DBInfotext
	],
	standalone: true
})
export class TabsComponent {
	variants = defaultComponentVariants;
}
