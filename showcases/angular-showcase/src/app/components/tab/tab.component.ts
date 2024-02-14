import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/tab.json';
import { DefaultComponent } from '../default.component';
import { DBTab } from '../../../../../../output/angular/src/components/tab';

@Component({
	selector: 'app-tab',
	templateUrl: './tab.component.html',
	imports: [DefaultComponent, DBTab],
	standalone: true
})
export class TabComponent {
	variants = defaultComponentVariants;
}
