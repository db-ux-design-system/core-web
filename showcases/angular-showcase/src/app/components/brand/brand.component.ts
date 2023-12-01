import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/brand.json';

@Component({
	selector: 'app-button',
	templateUrl: './brand.component.html'
})
export class BrandComponent {
	variants = defaultComponentVariants;
}
