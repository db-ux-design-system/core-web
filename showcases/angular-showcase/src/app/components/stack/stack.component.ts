import { Component } from '@angular/core';
import { DefaultComponent } from '../default.component';
import defaultComponentVariants from '../../../../../shared/stack.json';
import { DBStack, DBInfotext, DBDivider } from '@components';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-stack',
	templateUrl: './stack.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBStack, DBInfotext, DBDivider],
	standalone: true
})
export class StackComponent {
	variants = defaultComponentVariants;
}
