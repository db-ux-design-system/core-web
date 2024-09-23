import { Component } from '@angular/core';
import { DefaultComponent } from '../default.component';
import defaultComponentVariants from '../../../../../shared/stack.json';
import { DBStack } from '../../../../../../output/angular/src/components/stack';
import { DBInfotext } from '../../../../../../output/angular/src/components/infotext';
import { DBDivider } from '../../../../../../output/angular/src/components/divider';
import { DBBadge } from '../../../../../../output/angular/src/components/badge';

@Component({
	selector: 'app-stack',
	templateUrl: './stack.component.html',
	imports: [DefaultComponent, DBStack, DBInfotext, DBDivider, DBBadge],
	standalone: true
})
export class StackComponent {
	variants = defaultComponentVariants;
}
