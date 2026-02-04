import { Component } from '@angular/core';

import { DefaultComponent } from '../default.component';
import defaultComponentVariants from '../../../../../shared/loading-indicator.json';
import { DBLoadingIndicator } from '../../../../../../output/angular/src/components/loading-indicator';

@Component({
	selector: 'app-loading-indicator',
	templateUrl: './loading-indicator.component.html',
	imports: [DefaultComponent, DBLoadingIndicator],
	standalone: true
})
export class LoadingIndicatorComponent {
	variants = defaultComponentVariants;
}


