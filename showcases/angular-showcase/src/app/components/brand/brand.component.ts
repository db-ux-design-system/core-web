import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import defaultComponentVariants from '../../../../../shared/brand.json';
import { DefaultComponent } from '../default.component';
import { DBControlPanelBrand } from '@components';
import { environment } from '../../../environments/environment';

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
