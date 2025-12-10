import { Component } from '@angular/core';
import { DBDivider, DBInfotext, DBStack } from '@components';
import defaultComponentVariants from '../../../../../shared/stack.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

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
