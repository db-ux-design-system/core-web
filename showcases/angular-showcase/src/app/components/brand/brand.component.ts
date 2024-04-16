import { Component } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/brand.json';
import { DefaultComponent } from '../default.component';
import { DBBrand } from '../../../../../../output/angular/src/components/brand';

@Component({
	selector: 'app-button',
	templateUrl: './brand.component.html',
	imports: [DefaultComponent, DBBrand],
	standalone: true
})
export class BrandComponent {
	variants = defaultComponentVariants;
}
