import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBBrand } from '@db-ux/ngx-core-components/src/components/brand';
import defaultComponentVariants from '../../../../../shared/brand.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-button',
	templateUrl: './brand.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBBrand],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class BrandComponent {
	variants = defaultComponentVariants;
}
