import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/link.json';
import { DefaultComponent } from '../default.component';
import { DBLink } from '../../../../../../output/angular/src';

@Component({
	selector: 'app-link',
	templateUrl: './link.component.html',
	imports: [DefaultComponent, DBLink],
	standalone: true
})
export class LinkComponent {
	variants = defaultComponentVariants;
}
