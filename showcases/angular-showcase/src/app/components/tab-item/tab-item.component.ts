import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/tab-item.json';
import { DefaultComponent } from '../default.component';
import { DBTabItem, DBTabList } from '../../../../../../output/angular/src';

@Component({
	selector: 'app-tab',
	templateUrl: './tab-item.component.html',
	imports: [DefaultComponent, DBTabItem, DBTabList],
	standalone: true
})
export class TabItemComponent {
	variants = defaultComponentVariants;
}
