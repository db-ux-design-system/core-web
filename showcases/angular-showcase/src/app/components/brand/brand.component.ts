import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DBControlPanelBrand } from '@components';
import defaultComponentVariants from '../../../../../shared/brand.json';
import { environment } from '../../../environments/environment';
import { DefaultComponent } from '../default.component';

@Component({
	selector: 'app-button',
	templateUrl: './brand.component.html',
	imports: environment.webComponents
		? [DefaultComponent]
		: [DefaultComponent, DBControlPanelBrand],
	standalone: true,
	schemas: environment.webComponents ? [CUSTOM_ELEMENTS_SCHEMA] : []
})
export class BrandComponent {
	variants = defaultComponentVariants;
}
