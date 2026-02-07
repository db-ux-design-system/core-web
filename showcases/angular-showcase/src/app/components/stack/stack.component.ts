import { Component } from '@angular/core';
import { DBDivider } from '@db-ux/ngx-core-components/src/components/divider';
import { DBInfotext } from '@db-ux/ngx-core-components/src/components/infotext';
import { DBStack } from '@db-ux/ngx-core-components/src/components/stack';
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
